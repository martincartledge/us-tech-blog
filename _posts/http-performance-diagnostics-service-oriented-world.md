---
title: "HTTP Performance Diagnostics in a Service Oriented World"
date: "2015-01-07"
author: Steven Schlansker
category: engineering
---

[Service oriented architecture (SOA)](https://en.wikipedia.org/wiki/Service-oriented_architecture) is one of the buzzwords defining this decade of software development. While there are very real maintainability and scalability gains, it introduces entirely new classes of problems. Today, I will focus on the visibility of performance (or lack thereof).

In a monolithic application, a [profiler](https://en.wikipedia.org/wiki/Profiling_%28computer_programming%29) will immediately identify hot spots in your code – locations where the majority of time is spent, as your valued users await the arrival of their data. In a SOA environment, the time will be spread across many services spanning multiple machines, and perhaps even multiple datacenters. Looking at a single application profile of the code is useful once you know where the hotspots are, but cannot identify the global hotspots across many services.

First, you need to define the scope of performance issues you are looking at. In this post we will focus on the time to service a single end-user HTTP request. When our customer asks for a [list of San Francisco restaurants](https://www.opentable.com/san-francisco-restaurants), we want to serve them delightful results as quickly as possible. Once the user requests this web page, the platform will service a tree of internal HTTP requests – fetching the list of restaurants itself, the user profile, targeted recommendations, and so on. As the requests complete, the final webpage is built and returned to the end user. So our first task is to correlate these related requests so that they are identifiable as a unit.

### RequestId

Enter RequestId. Every request that comes into the OpenTable platform is tagged with a UUID that we call RequestId. Any child requests launched from the end-user request are passed the same RequestId via a HTTP header. This necessitates a bit of code in every service you run, but once it is plumbed through you will find that it’s invaluable for debugging and diagnostics. I will focus on only two of the languages we use at OpenTable, Java and Node.JS, but the principles are applicable to any environment.

In Java, most HTTP services are written to use the Servlet API. Unless you are using the new asynchronous features, this means that in general one request is serviced by one thread. Our implementation stashes a Context object in a ThreadLocal (You might think to use the ServletRequest “attribute” mechanism, but it’s not thread-safe and can’t be shared with worker threads you spawn). A Filter reads the incoming header and places the RequestId in the Context.

```
public class RequestIdFilter implements Filter
{
    public static final String HEADER_NAME = &quot;OT-RequestId&quot;;
    private ThreadLocal&lt;Context&gt; context = ...;
 
    @Override
    public void doFilter(ServletRequest request,
                         ServletResponse response,
                         FilterChain chain)
    {
        final HttpServletRequest req = (HttpServletRequest) request;
        final HttpServletResponse res = (HttpServletResponse) response;
        try {
            final RequestIdToken requestId = scopedProvider.get();
            final UUID requestUUID = UUID.fromString(
                                       req.getHeader(HEADER_NAME));
            context.get().setValue(HEADER_NAME, requestUUID);
 
            if (requestUUID != null) {
                request.setAttribute(HEADER_NAME, requestUUID);
                res.setHeader(HEADER_NAME, requestUUID.toString());
                MDC.put(HEADER_NAME, requestUUID);
            }
        }
        finally {
            chain.doFilter(request, response);
            MDC.remove(HEADER_NAME);
            context.get().removeValue(HEADER_NAME);
        }
    }
}
```
This code is stripped down a bit from the actual version we use, which is available as [otj-requestid on GitHub](https://github.com/opentable/otj-requestid).

### Node.js

Node uses a slightly different paradigm. Instead of threads, there are a series of callbacks. We are using the relatively new [domain](http://nodejs.org/api/domain.html) feature to keep track of our RequestId tokens.

```
uuid = require 'node-uuid'
 
# Return the current request id
exports.requestId = function() { process.domain.otctx.requestId }
 
exports.enter = function(id, next) {
  d = domain.create()
  d.otctx = {&quot;requestId&quot;: id}
  d.run(next)
}
 
# Express middleware to set request id from HTTP header
exports.middleware = function(req, res, next) {
  rqId = req.get('OT-RequestId') || uuid.v1()
  process.domain.otctx.requestId = rqId
  res.set('OT-RequestId', rqId)
  next()
}
```

Again, this is pseudo-code adapted from our actual code [ot-requestid-nodejs](https://github.com/opentable/ot-requestid-nodejs).

### Central Logging

Now that your requests all have a RequestId attached to them, you need a central place to aggregate your data. We log all HTTP access and application log lines to a central [ElasticSearch](http://www.elasticsearch.org/) and [Kibana](http://www.elasticsearch.org/overview/kibana/) instance. I won’t go over the details of setting this up; everyone’s setup will be different.

### Pretty Graphs

On to the good stuff! Now we have a tree of requests, with start and stop times. Let’s plot them!

<a href="/images/posts/http-performance-diagnostics-service-oriented-world/timeline.png" target="_blank">
  <img src="/images/posts/http-performance-diagnostics-service-oriented-world/timeline.png" width="700" height="700"/>
</a>

Our [Request Timeline](https://github.com/opentable/request-timeline) tool queries ElasticSearch by RequestId and plots all HTTP requests on a timeline graph. Each individual request can be expanded to see metadata such as status code or HTTP headers.

The visual nature of this display is incredibly useful for identifying bottlenecks. There’s two classes of requests that should catch your eye. Requests that themselves take a long time are candidates to investigate single-process performance, either with deeper logging or a code profiler. Requests that are executed serially are potentially improved by executing them in parallel.

In the example graph, there are a couple of places to look for improvements. Two of the requests executing from about 180ms to 300ms are much longer than the others and could potentially be sped up. There is clear dead space from 0-70, 100-170ms that could be investigated – 70ms is a lot of CPU time on a modern processor! Finally, the tailing two requests may be able to start earlier in the request pipeline if they do not depend on the results of the previous batch.

### Identifying Network Delays

Network delays are another class of error that can be identified by this technique. By instrumenting your HTTP request library to emit similar logs, you can identify time lost outside of any service.

<a href="/images/posts/http-performance-diagnostics-service-oriented-world/outgoing-vs-incoming.png" target="_blank">
  <img src="/images/posts/http-performance-diagnostics-service-oriented-world/outgoing-vs-incoming.png" width="600" height="800"/>
</a>

### State of the Code

We’ve opened the source of all of the code featured here, as well as their dependencies, under the Apache 2 license. A lot of the code is written to solve our problems right now – it’s unlikely you can just drop it into your infrastructure and have it work. If you are looking to get it up and running we’d love to collaborate on making our code more portable!
