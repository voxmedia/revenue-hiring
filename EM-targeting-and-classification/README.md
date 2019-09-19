# Targeting and Classification Exercise

In the last few years, large advertising brands have become increasingly concerned with ensuring their advertisements are not running next to offensive content. The industry has termed this "Brand Safety". This exercise we'd like to hear how you would design a system to help ensure this is possible.

In addition to brand safety, it could be a foundation for building a richer contextual-targeting system that can place great ads next to relevant content. Allowing us to move away from the creepier demographic and interest focused audience targeting.

## What to expect in the interview

_This exercise is conversational, and no artifacts need to be produced beforehand._

1. We'll talk through the problem,
1. We'd like to hear an human-worded converversation about how you'd build this system.
1. You are not expected to write, share or read code at any point in this interview.
1. Though we do expect that your solution would be technically feasible to create.
1. If you'd like you can share a block or flow diagram, via screensharing, though this is not necessary.

---

## The Problem:
* We are going to be building a targeting and classification system to provide more information about the content of the pages where we run our ads.
* This information to be available via a web request to a JSON endpoint on page load, this has to happen before we can request ads on the page.
* Response payload should contain a list of matched keywords on the page previously defined by us, but could contain other types of classifications in the future.
* Payload is requested once per page view; more than 40MM+ requests per day.

## Expected questions and discussion:

* Should this happen in an external service or in the browser?
* How does it scale?
* How do we handle caching and invalidation?
* Given that classifying content might take some time, how do we still ensure fast delivery with accurate classification?
* What sort of rate limiting might we need?
* How can we manage keyword entries?
* Considering network requests are asynchronous, how can we still ensure an order of operation?
* Some of these keywords might be nasty, how could we shield users from them?

## Additional context and limitations:
* Payload should load in less than 200ms on an average internet connection.
* We’d like to add more classifications, how could we add:
  * Category of content, according to a third-party API
  * Sentiment analysis
  * Image or video analysis.
