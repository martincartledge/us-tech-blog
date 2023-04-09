---
title: "Detecting service application pauses"
date: "2015-06-16"
author: Steven Schlansker
category: backend
---
Any well-designed application that serves content to end users cares greatly about responsiveness. First intuitions, backed by extensive research, concur: if a user spends too much time waiting for your product to deliver the requested information, user satisfaction goes down dramatically.

Many factors influence response time. The most direct is the actual processing time of the user’s request. Many other factors, some directly under your control and some not, can greatly increase response time.

* You fill up your Java heap and trigger a Full GC cycle. The JVM is out to lunch
* You run a single-threaded runtime like Node, and you need to resize that gigabyte-large hashtable of cached data. Or a synchronous callback takes too long
* Ops decides to migrate your VM to a new host because of failing hardware

**All the while, your users are waiting!**

Our first step to address this problem is to improve visibility. When a user complaint comes in, it is invaluable to immediately identify the problem as “the application handling this request paused for 10 seconds”, rather than looking for a deeper cause that may not exist. Additionally, by trending this value you can gain long term insight and decide if it is a threat to your SLA.

Once you’ve established this baseline, you can then use more in-depth diagnostics to identify root causes of your worst pauses.

Our algorithm for detecting CPU starvation is pleasantly simple. In pseudocode:
```
PAUSE_DETECT_MS = 100;
CHECK_INTERVAL = 20;
 
lastUpdate = now();
while (true) {
  sleep(CHECK_INTERVAL);
  newUpdate = now();
  actualSleepTime = newUpdate = lastUpdate;
  if (actualSleepTime &gt; PAUSE_DETECT_MS) {
    print &quot;We slept for %d ms!&quot;, actualSleepTime
  }
  lastUpdate = newUpdate;
}
```

In short, the process repeatedly sleeps for a short duration and tests that the actual sleep does not exceed a threshold. If the runtime cannot execute the thread frequently enough, the sleep will exceed the threshold and a warning is printed.

The cost is only a few microseconds of CPU time and a mostly idle thread, and you can easily tune the accuracy / cost tradeoff as you please.

While the example only prints to standard out, we have wired our logging and monitoring infrastructure to allow correlating pauses with requests executing at the time so any engineer diagnosing performance problems can immediately see if the service is experiencing pauses.

We have released open source components for both [Java](https://github.com/opentable/otj-pausedetector) (on Maven Central) and Node.js (on NPM)

This simple pause detector will not replace a robust profiling tool, nor can it pinpoint the cause of any pause it notices. But sometimes all you need is a starting point, and this approach gives you that crucial information.
