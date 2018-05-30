# JavaScript Debugging Exercise

Our team has been asked to create a premium advertising experience for MegaBaby SuperWipes™. The ad experience they've requested allows users to perform a card sort inside the ad unit. They're hoping to get a sense of how well they are executing their refreshed company goals in the wake of the Great MegaBaby Warehouse Wipeout Incident of 2017.

![MegaBaby Cardsort](https://www.dropbox.com/s/ssizbwdn50xenxb/megababy_start.png?dl=1)

The design team has created an amazing mockup for us, and our code is almost there! The CSS and HTML is bulletproof, thankfully.

But we're using the lovely [dragula](https://bevacqua.github.io/dragula/) open-source drag & drop JavaScript library — and we're having some problems:

## The Problems

1. The dragging doesn't work yet 😱 this feature is pretty important to this advertising experience!
1. We've written some CSS to target cards that are being dragged with the `.is-moving` class, which adds a grimacing emoji. It's supposed to be applied using JavaScript so that it appears in the "landing zone" ghost-looking card below the one attached to the user's mouse, [like in this screenshot](https://www.dropbox.com/s/vpqu6l8qhhd2d7n/megababy_dragging.png?dl=0). But it isn't working, because the same emoji _before_ the drag action persists. Help!
1. When a card is dropped in a column, the big emoji below the heading is supposed to change to be a smiley (if there are more "Yes" than "No" cards), a sad little face (if the "No" cards outnumber the "Yes" cards), or a grimacing face (if there are an equal number of "Yes" and "No" cards). [Just like this screenshot](https://www.dropbox.com/s/13a4aaq09wv5ysp/megababy_complete.png?dl=0). But we seem to be getting a JavaScript error.
1. Even when the JavaScript isn't erroring out, the emoji still isn't getting updated below the header. The advertiser _really_ wants this feature, so it would be ideal if we could ship a working version.
1. We're pretty sure after #4 is fixed, the emoji is updating! But it doesn't seem to be updating to the correct emoji, as stated as the specifications in #3. Let's try to get this last detail squared away, and the client will be so excited.

## Expected questions and discussion

- What steps did you take to debug the JavaScript problems above? There is no "wrong" answer here - everyone has their own ways of debugging code!
- What resources did you use to hunt down issues?

## Code

**[Here's a CodePen link for you to fork!](https://codepen.io/jplhomer/pen/LrELOW/)**

Here's our JavaScript code so far:

```js
dragula([
   document.querySelector('#col-start'),
   document.querySelector('#col-yes'),
   document.querySelector('#col-no')
]).on('move', function(el) {
   el.classList.add('is-moving')
}).on('moveend', function(el) {
   el.classList.remove('is-moving');

   updateEmoji();
});

function updateEmoji() {
   let numberYes = getNumberYes();
   let numberNo = getNumberNo();
   let emoji;

   if (numberNo === 0 && numberYes === 0) {
      emoji = '🤔';
   } else {
      if (numberYes > numberNo) {
         emoji = '😄';
      }

      if (numberNo > numberYes) {
         emoji = '😢';
      }

      if (numberNo = numberYes) {
         emoji = '😬';
      }
   }

   document.querySelectorAll('.emoji').innerHTML = emoji;
}

function getNumberYes() {
   return document.querySelector('.col-yes').children().length;
}

function getNumberNo() {
   return document.querySelector('.col-no').children().length;
}
```

And the accompanying HTML, for your reference:

```html
<div class="container">
   <h1>What comes to mind when you think about MegaBaby SuperWipes™?</h1>

   <p class="emoji">🤔</p>

   <div class="heds">
      <div></div>
      <div><h2>Yes</h2></div>
      <div><h2>No</h2></div>
   </div>
   <div class="cols">
      <div class="col-start">
         <div>Family-friendly</div>
         <div>Safe for babies</div>
         <div>Fun to use</div>
         <div>Environmentally-safe</div>
         <div>Trusted by parents</div>
         <div>I'm gonna use them</div>
      </div>
      <div class="col-yes"></div>
      <div class="col-no"></div>
   </div>
</div>
```
