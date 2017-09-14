# Vox Media Programming Exercise v2

Hello and welcome, I promise this will not be painful.  We are looking to understand your programming skills without sweat, live coding or intestinal-distress. 

We thought the best way to do this is have you **pick two** of the following ways to demonstrate your technical abilities with us:

* **Code that you previously wrote**. This should be something that you can confidently talk about the technical, architectural and use case for this project. 
* **A Javascript logging code exercise** for logging, filtering and reporting on events.
* **A Ruby string manipulation library** from our existing publishing platform.

All of these are weighted equally, we really want you to be as comfortable and confident as possible sharing your solutions with us.

The sample exercises are scoped to an hour to an hour-and-a-half because we all have lives outside of work and away from the computer too.

## Conversational Assessment

You should write this code like you were part of team. Come prepared to talk about your work.  We will be asking questions like the following:

* What was the first thing you did after reading the exercises?
* Why did you chose this approach?
* Tell us more about this architecture?
* What specific syntax decisions did you make?
* Were there interesting optimizations you discovered?
* What was the most difficult part of this exercise?
* What did you do when you got stuck?

Additionally, pretend we work together:

* What does your teammate need to know about it? 
* Did you structure it in a way that is understandable to others?
* Is it sufficiently documented?
* What should we add in the next version that you didn't have time for?

## Sharing and Submitting

During the technical call be prepared to share your screen with us in a readable (sufficiently large) font size. 

Optionally, you can send us your submissions via email ([brian.anderson@voxmedia.com](mailto://brian.anderson@voxmedia.com)).


## The Sample Exercises

### Javascript Logging Exercise

During the big rewrite of the Artisanal Mayonnaise website, [tastymayo.yum](http://tastymayo.yum), you realize there are many different front end components. Tracking their state via `console.log()` is proving to be a hot mess of thousands of debug logs being emitted in the console on every page reload.  There has got to be a better way to log all of these states without littering the console.

You devise a plan. And decide to create a small library to record these logs without printing them to the console.

Initially, it has the following interface available.

```js
MayoLog.log('Mayonnaise bottle 1 displayed ');
// and, optionally with an arbitrary dataset
MayoLog.log('Mayonnaise bottle 3 displayed', {mayoFlavId: 12});
```

As you progress you realize you need to find a way to retrieve items from the log, so you add in the following:

```js
// will print all of the logged events to the console
MayoLog.toConsole();
// in something like the following format:
// (103ms) Mayonnaise bottle 3 displayed {mayoFlavId: 12}
```

Oh yeah, you realized it would be nice to record the time, in milliseconds, from [DOMContentLoaded](https://developer.mozilla.org/en-US/docs/Web/Events/DOMContentLoaded) to when this log entry was added. That might help later on when debugging mega-mayonnaise performance concerns.

As you continue to add more logs, you realize that what you really need is a way to filter these logs. So you decide to add the following capabilities to filter on the data attribute.

```js
// This will return all log entries that have the 
// attribute 'mayoFlavId' in their dataset
MayoLog.findWithDataAttribute('mayoFlavId');

// returning something like the following
[
  {
   time: 103, 
   log: 'Mayonnaise bottle 3 displayed', 
   data: {mayoFlavId: 12}
  },
  {
   time: 144, 
   log: 'Bottle 5 clicked', 
   data: {mayoFlavId: 52, size: 'Largest'}
  }
]
```

Feeling mighty proud of yourself, you begin to get ambitious and wonder about how you might transmit these logs to your server for 1% of your mayonnaise loving traffic?

For this you design a function, that can take a URL, and when called will `POST` the entire log as a `JSON` object to this endpoint. _And remember, this should only be called for 1% of your traffic, we don't want to melt your mayo server._

```js
MayoLog.sendToServer('http://tastymayo.yum/analytics');
```

* * *

As a recap you should now have a nice logging library that has the following interface:

```js
MayoLog.log(<string>)
MayoLog.log(<string>, <object>)
MayoLog.toConsole()
MayoLog.findWithDataAttribute(<string>)
MayoLog.sendToServer(<url>)
```

As a convenience, we've uploaded [a starter file](https://gist.github.com/banderson623/c20d7b3adc023c5ce3404d2efde95bdb)  with a single function to help you generate many log entries.

```js
loadSampleLogEntries(100);
```



### Ruby String Manipulation Library

You're running an overly-funded start up covering the emerging smoothie craze sweeping the world. People are going bonkers for blended-delights.

You and your team of editors are writing no less than 15 stories per day covering all topics of creamy deliciousness. Topics range from ingredients, blenders, daily-clenses, to the adverse effect of eating far too much blended proteins. Your crew is uncovering the truth and education readers.

Your (believable, really it is!) revenue strategy is to add affiliate links to all of the food, smoothie making gear, exercise equipment or songs that your team writes about. _Seems okay, right? At least you got those angel investors of the Silicon Prairie ~fooled~ onboard._

You want your editorial team focused on blending up great stories, not hunting down products and links. Your job is to build a server side library to find and insert links for all of your money-making words.

Never missing an opportunity to promote your brand, you think this Ruby library will be called `Swirl`. 

The basic plan is to build the following interface:

```ruby
# Create a Swirl object
swirly = Swirl.new()

# Add in the html of your existing article
swirly.add_html('<lots of html>')

# Add an affiliate look up database
swirly.use_affiliate_database(<look up database object>)

# Gets the profit making article's HTML.
# returns a string with links surrounding words matched in the database.
swirly.money_making_html()
```  

The **Affiliate Lookup Database** you've selected is called _CashWords_ and has has few methods to look up words and find their affiliate link(s). It has this really handy feature that polls all of the partners and returns a collection of links and their affiliate revenue percent.

_The complete [`CashWords` Lookup Database implementation](https://gist.github.com/banderson623/024bd664064485a08460c08ff7094d80) should be downloaded and used as a part of this exercise. (You don't need to rewrite this)._

```ruby
# Instantiate a new cash word instance
db = CashWords.new()

# Check to see if this word is in the database
# Returns true or false
db.has_word?(<string>)

# Performs a look up on the word, and returns an array
# of hashes with keys: amount, url
#   db.get_links_for_word('kale')
#   > [
#      {:amount => 0.03, 
#       :url => 'https://bigstore.com/produce/kale?partner=smooth'
#      },
#      {:amount => 0.04, 
#       :url => 'https://largerstore.com/wiltedStuff/kale?partner=smooth'
#      },
#      {:amount => 0.02, 
#       :url => 'https://garden.org/fresh/kale?partner=smooth'
#      }
#   ]  
# 
db.get_links_for_word(<string>)
```

Being the leader of your overly-staffed engineering team, you ask one of your teammates to build a test suite (using Ruby's [Test::Unit](https://ruby-doc.org/stdlib-2.1.5/libdoc/test/unit/rdoc/Test/Unit/Assertions.html)) for this library. And to your surprise they stayed up all night coding and returned groggily with a [complete test suite!](https://gist.github.com/banderson623/9e26950101acb93648e10299edd13b10)

This is fantastic! _(You make a note to promote that test-loving engineer.)_ So it look's like you'll need to:

* Implementation the `Swirl` library, in such a way that it passes the unit test.
* [Download]((https://gist.github.com/banderson623/9e26950101acb93648e10299edd13b10)) and use the unit test library
* Add that missing test, the one your tired superstar teammate left unimplemented. 



## FAQ About Exercises

* **Can I use jQuery, React, Underscore, or other external libraries?** – Yes, this is totally fine. None of these examples require this, but if you feel more comfortable using these libraries go ahead.

* **Who wrote this? I have so many questions** – Please send all questions to [brian.anderson@voxmedia.com](mailto://brian.anderson@voxmedia.com) and we'll try to answer them as quickly as possible.

* **Wait, you think my affiliate linking startup will be successful?** – Who knows, we are not analysts, investors nor lawyers.
