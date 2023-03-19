---
title: "HTTP Performance Diagnostics in a Service Oriented World"
date: "2015-01-07"
author: Steven Schlansker
category: engineering
draft: true
---

Service oriented architecture (SOA) is one of the buzzwords defining this decade of software development. While there are very real maintainability and scalability gains, it introduces entirely new classes of problems. Today, I will focus on the visibility of performance (or lack thereof).

In a monolithic application, a profiler will immediately identify hot spots in your code – locations where the majority of time is spent, as your valued users await the arrival of their data. In a SOA environment, the time will be spread across many services spanning multiple machines, and perhaps even multiple datacenters. Looking at a single application profile of the code is useful once you know where the hotspots are, but cannot identify the global hotspots across many services.

First, you need to define the scope of performance issues you are looking at. In this post we will focus on the time to service a single end-user HTTP request. When our customer asks for a list of San Francisco restaurants, we want to serve them delightful results as quickly as possible. Once the user requests this web page, the platform will service a tree of internal HTTP requests – fetching the list of restaurants itself, the user profile, targeted recommendations, and so on. As the requests complete, the final webpage is built and returned to the end user. So our first task is to correlate these related requests so that they are identifiable as a unit.
