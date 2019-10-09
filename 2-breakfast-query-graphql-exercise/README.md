# Breakfast Query
_A Revenue Engineering Exercise, for Engineer Level 2_

Welcome to your first day on the job at Concert Breakfast Studio! _(in our new pivot to a breakfast commerce)._ Through extensive market research we've realized (hence the pivot) that people are fanatical about food delivery and we are fanatical about great breakfasts so we thought we could combine the two into a musical morning experience. Farm fresh goodness from our culinary experts to your hungry chomper.

## The work

![delicious looking interface describing food you should order](https://user-images.githubusercontent.com/848147/65905961-31605e00-e387-11e9-8404-57bd7654021d.png)

Our pals [over on the client side](https://github.com/voxmedia/revenue-hiring/tree/master/2-client-side-javascript-components/README.md) have made an amazing menu and ordering interface. And now you'll be helping our patrons get their delicious breakfast order to our hard working cooks, farmers and delivery people!

**The task is to design, and get started on, a server side system that allows** for the client interface to perform the following:
- discover what food items are available,
- submit an order,
- check the status of an order,
- see all unfilled orders, and
- update the status of an order

**So let's get started!**

Because our director is a bit of a micromanager, you've been asked to **build this as a [GraphQL](https://graphql.org) API**. He muttered something about [a helpful introduction to GraphQL](https://graphql.org/learn/).

1. Concert Breakfast Engineers (internally we've rebranded ourselves The Code Wafflers) provided a small interactive sandbox: [BreakfastQL](https://codesandbox.io/s/vox-media-revenue-exercise-breakfastql-0h000). **Fork this sandbox and perform your work here**
1. First step you will need to **define the data structures** (graphql types) required. Again, thanks to that tightwad Director he's mandaited the delicious `FoodItem` must include:
    - a unique id (`ID`)
    - an image url (`string`),
    - the tasty food name (`string`),
    - the appropriate groups (an `array of strings`, you know like: protein, sweet, warm, vegan)
    - and quantity (`number`)
1. Next you'll need to **define the data structures(types)** responsible for an `Order` and `OrderState`.
1. Now that you have these types defined, its off to **define a query to get available Food Items** for customers to select.
1. Now its time to get the query (defined in the previous step) functioning by **writing a resolver** to power it. _(We are so close to tasty breakfast ordering success)_
TKTKTKTKTT
