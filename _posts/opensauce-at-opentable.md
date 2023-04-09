---
title: "Open Sauce at OpenTable"
date: "2015-10-06"
author: Johnno Nolan
category: culture
---
At OpenTable, we know the best ingredients make the best dining experiences. Participating in open source software is one way that we, as engineers, serve the best applications to our diners and restaurateurs.

It hasn’t always been this way, though. For a long time, OpenTable produced mostly closed source, proprietary software. We’ve been working to change that for quite a few years now, and we’ve been opening up many parts of our toolset to give things back to the community.

### Open Sores at OpenTable

However, there are parts of any business that need privacy and security, and that’s where we made some mistakes. A scan found non-public information in a public repository and, as part of our response, all OpenTable’s public repositories – almost 300 of them – were reset to private repositories. When taking this step it was believed temporary and reversible: The plan was to confirm that no private information was inside and then re-publicize the repositories that were intended to be open source. Unfortunately, the team’s understanding was flawed and our actions had some unpleasant side effects:
* If you’ve previously “starred” an OpenTable open source repository, your star is gone. We hope that you will star us again!
* If you had forked an OpenTable open source repository, you may need to re-fork or update your remotes. See Github’s [guide](https://help.github.com/articles/what-happens-to-forks-when-a-repository-is-deleted-or-changes-visibility/) about this.

We messed up. We lost the goodwill that our contributors had shown us. We know we did bad, but we’ll learn from it. There’s nothing more to say other than we’re really sorry and we are working to ensure it won’t happen again.

### Open Source at OpenTable
We remain fully committed to open sourcing what we can at OpenTable. We believe that it fosters better solutions to our problems, as well as better interaction with the community. Here’s a sample of what’s currently open:

#### HobKnob https://github.com/opentable/hobknob 
* A super-simple feature toggle system with clients in Go, .Net/Mono, Node.js and Java.

#### Spur IoC https://github.com/opentable/spur-ioc
* A Dependency Framework for Node.js.

#### OpenComponents https://github.com/opentable/oc
* Open Components (or, as I like to call it, The OC) is a framework for developing and distributing HTML components. Think Web
Components without the polyfill + a package manager framework.

#### NPM packages galore
We’ve contributed dozens of packages to [NPM](https://www.npmjs.com/search?q=opentable).

#### …and even more
We’ve got so much more than I even realised; just take a look: https://github.com/opentable

### Help Us
We’re pleased that we’ve made a lot of stuff open, and we want to do more. If helping us floats your boat, then come and join us—either in the [office](https://www.opentable.com/careers/technology/) or just on [GitHub](https://github.com/opentable/).

The featured image is from [OpenSourceWay](https://www.flickr.com/photos/opensourceway/6554314981).