# Resource Contention Exercise

Our latest project involves many independent worker-processes performing many disparate tasks (e.g. fetching URL contents, making requests to external APIs, calculations on data, etc.).

Our deployment platform makes scaling the resources performing this work incredibly easy, but sadly, we have other choke-points: one of the external APIs being consumed has a hard-limit on the number of concurrent connections we can make.

How can we best maximize our usage of scalable resources, while still not breaking this limit?

## What to expect in the interview

_This exercise is conversational, and no artifacts need to be produced beforehand._

1. We'll talk through the problem.
1. We'd like to hear a human-worded converversation about how you'd solve this problem.
1. You are not expected to write, share, or read code at any point in this interview.
1. Though we do expect that your solution would be technically feasible to create.
1. If you'd like you can share a block or flow diagram, via screensharing, though this is not necessary.

---

## The Problem

* We want to be able to have as many workers as possible (in our reality, they're `resque` workers, but that's an implementation detail), while still conforming to our API connection limit.

* The worker processes themselves should be treated as "unreliable"; they might hang and they might be suddenly (not-cleanly) terminated, etc.

* The "total number of worker processes" will change over time.

* Assume a (successful) API request will return in less than 5 seconds.

* The worker processes share access to a database (`postgres`, in our case), and a key-value store (`redis`), but have no other inter-process communication ability. (As such, when they start, they have no direct awareness of how many other workers there may be, etc.)

* In reality, incoming load to the service varies considerably over time, but for the sake of this exercise, assume there is _always_ load that requires consuming this API.

* While exceeding the connection limit is "bad" (because it causes exceptions to be raised, which causes other problems), **consistently** having "too few" connections is possibly _worse_ because we're paying for access to this API, and not using it to the maximum potential (a.k.a. "leaving moneytacos on the table").

## Expected questions and discussion

* Talk us through a proposed solution to this problem (it can be abstract, or concrete; but should be "implementable").
* How do workers determine if they can consume the API?
* How is the "number of active connections" tracked?
* What (if any) are the failure modes?
* What does a worker do if it _wants_ to consume the API, but there are already the maximum number of connections?
* How does the system recover from workers hanging? From workers being killed?
* Are there any conditions which cause the solution to be "sub-optimal" (or "not work at all")?
* What happens if successful requests could take substantially/arbitrarily long?

## Artist's Rendition of Resource Contention

![](https://media.tenor.com/images/a6418534ed79eb74f4f62f55f38dc14a/tenor.gif)
