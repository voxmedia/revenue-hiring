# Breakfast Query
_A Revenue Engineering Exercise, for Engineer Level 2_

Welcome to your first day on the job at Concert Breakfast Studio! _(in our new pivot to a breakfast commerce)._ Through extensive market research we've realized (hence the pivot) that people are fanatical about food delivery and we are fanatical about great breakfasts so we thought we could combine the two into a musical morning experience. Farm fresh goodness from our culinary experts to your hungry chomper.

## The work

![delicious looking interface describing food you should order](https://user-images.githubusercontent.com/848147/65905961-31605e00-e387-11e9-8404-57bd7654021d.png)

Our pals [over on the client side](https://github.com/voxmedia/revenue-hiring/tree/master/2-client-side-javascript-components/README.md) have made an amazing menu and ordering interface. And now you'll be helping our patrons get their delicious breakfast order to our hard working cooks, farmers and delivery people!

To get going we'll prototype this with [Apollo Server](https://www.apollographql.com/docs/apollo-server/getting-started/), which is part of our BreakfastQL sandbox we made for you, listed below.

**The task is to design, and get started on, a server side system that allows** for the client interface to perform the following:
- discover what food items are available,
- submit an order,
- check the status of an order,
- see all unfilled orders, and
- update the status of an order

**So let's get started!**

Because our director is a bit of a micromanager, you've been asked to **build this as a [GraphQL](https://graphql.org) API**. He muttered something about [a helpful introduction to GraphQL](https://graphql.org/learn/).

1. Concert Breakfast Engineers (internally we've rebranded ourselves The Code Wafflers) provided a small interactive sandbox.
   * You can run it online using codesandbox.io: [BreakfastQL](https://codesandbox.io/s/vox-media-revenue-exercise-breakfastql-0h000) **Fork this sandbox and perform your work here** or
   * **clone this repository** and inside this directory run `yarn` and `yarn run` to run this example locally, the GraphiQL interface will be available at http://localhost:4000 (it will reload every time you save a file).
1. First step you will need to **define the data structures** (graphql types) required. Again, thanks to that tightwad Director he's mandaited the delicious `FoodItem` must include:
    - a unique id (`ID`)
    - an image url (`string`),
    - the tasty food name (`string`),
    - the appropriate groups (an `array of strings`, you know like: protein, sweet, warm, vegan)
    - and quantity (`number`)
1. Next you'll need to **define the data structures(types) responsible for an `Order` and `OrderState`**. (Imagine the type of information that an order might require to be placed, tracked and delivered to a hungry human.)
1. Now that you have these types defined, its off to **define a query to get available Food Items** for customers to select.
1. Now its time to get the query (defined in the previous step) functioning by **writing a resolver** to power it. _(We are so close to tasty breakfast ordering success)_. To get you started our engineering team has set you up to use `ConcertTote` our custom key/value database. (for the curious see `lib/concert_tote.js` and `test/concert_tote.test.js`). Working with the `ConcertTote` database is pretty straightforward, it is an ES6 class, see below for full documentation on Concert Tote.
1. Make sure you've tested your query in `GraphiQL`, running at port `4000`, does it work?
1. Now build the functionality to submit an `order`. You'll need to write a `mutation` and `resolver` to persist the order.
1. Once this is complete, create a `query` and `resolver` to query for the status of an order.
1. Lastly, to help our hard working Concert farmhands, design a `query` and `resolver` to show all the unfilled order.

Amazing, you did it! Thanks to your hard work the Concert brand has swiftly pivoted to a breakfast food delivery service!


## `ConcertTote` Documentation
A totes awesome database. ConcertTote is a barebones key/value database. A simple bag to carry a few things on the go, as they say. Great as commemorative gifts!

### Reference

`const ct = new ConcertTote()` – an ES6 style class constructor that initializes and prepares the database for use

`ct.keys()` – returns all the known keys in the tote.

`ct.get({key: <String>})` – Returns the value(s) found at the given key.

`ct.set({key: <String>, value: <Any>})` – Sets the value for a give key

`ct.update({key: <String>, by: function(item)})` – Updates the value found at key with the return from the function passed to `by`

### Example

```javascript

const ConcertTote = require('./lib/concert_tote');

const db = new ConcertTote();
console.log db.keys()
// -> ['foodItems']

db.set({key: 'favoriteRoundFood', value: 'Cantalope'});
console.log(db.get({key: 'favoriteRoundFood'))
// -> 'Cantalope'

db.update({key: 'favoriteRoundFood', by: item => "Cheese Wheel"});
console.log(db.get({key: 'favoriteRoundFood'))
// -> 'Cheese Wheel'
```
