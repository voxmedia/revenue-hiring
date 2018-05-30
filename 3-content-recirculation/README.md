# Content Recirculation Exercise

_During the call, we'll give the candidate a set of criteria and ask them to model how they would solve the problem._

Nature of the problem:

* Is large and sparsely defined
* The candidate should ask questions to figure out the scope of the problem.
* Throughout the interview additional context and/or limitations will be surfaced if the candidate doesn’t explore them.

## The Problem: Build a Content Recirculation Experience:

In recent months we've become frustrated with the low quality recirculation ads that are running on our sites. There has to be a better way to do it.

This call is a great time to prototype a recommendation system! Let's layout a few *requirements and constraints*:

* This will live on all of our article pages
* It will be visible on all breakpoints (desktop and mobile)
* It will have an image, headline, and link
* The unit will contain "recommended" content modules and paid modules.
* The unit will receive 100,000 views per minute.
* We must record how well the ad performed on our site (impressions, clicks).

### Expected questions and discussion:
* What is the source of the "recommended" content? Paid content?
* Independently introduce:
    * Ingesting metadata of recommended content
    * Thumbnail generation
    * Asynchronous delivery
    * Caching
* Separation of data (Admin CMS + API) and construction of ad and compilation.

### Additional context and limitations:
* We’d like to add editorially managed content.
* We’d like to track what visitors are doing on our site after they’ve clicked through (GA).
* We’d like to add experiments and AB Testing.
