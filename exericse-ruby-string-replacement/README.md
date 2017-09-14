# Ruby String Manipulation Library

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

Being the leader of your overly-staffed engineering team, you ask one of your teammates to build a test suite (using Ruby's [Test::Unit](https://ruby-doc.org/stdlib-2.1.5/libdoc/test/unit/rdoc/Test/Unit/Assertions.html)) for this library. And they came back with a nearly complete [complete test suite!](https://gist.github.com/banderson623/9e26950101acb93648e10299edd13b10)

This is fantastic! _(You make a note to promote that test-loving engineer.)_ So it look's like you'll need to:

* Implement the `Swirl` library, in such a way that it passes the unit test.
* [Download]((https://gist.github.com/banderson623/9e26950101acb93648e10299edd13b10)) and use the unit test library
* Add that missing test, the one your tired superstar teammate left unimplemented.
