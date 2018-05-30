# Replace jQuery with Vanilla Javascript

Here at **Clickable Dollars Corp™**, we specialize in creating really shnazzy buttons! We've been hard at work creating an amazing javascript file (`shnazzifier.js`) that can be loaded on any page and will take buttons from being boring stock UI buttons 🤮, to the most amazing smashable-buttons. ✨

![](https://dl.dropboxusercontent.com/s%2Fkchlboc2jhzioo7%2Fp00pv5fig.png)

> Editor's note: While we'd like to think we invented this technique, we shamelessly stole it from [a great blog post](https://tympanus.net/codrops/2012/01/11/css-buttons-with-pseudo-elements/#). Thankfully no one has caught on, and we are nearly printing cash with our $1 a month licensing scheme.

Recently our users have asked us to remove jQuery dependency _(silly users)._ But whatever, gotta keep making that money.

### Original Design Guidelines
When we built shnazzifier, back in 2013, we used the following principles:

* We don't know how to use stylesheets and **don't want to learn**, inline styles for life!
* The `<button>` element and objects containing the class `.button` should all get shnazzied.
* All found elements should be shnazzified unless they contain the class `.no-shnazz`.
* Buttons don't need to be the same size, they just need to contain their content.
* If a `data-color` attribute is added to the element, use this color for the button background.
* We only care about modern chrome browsers.

### Your Task

* Remove all usages of jQuery
* Ugh, there is a 1px wiggle we could never remove, see if you can find the source and remove it.
* You are free to add more optimizations as long as they don't violate the original design guidelines above.

_If this goes well, we plan on charging $2 a month for this "optimized" script._

---

### 2013 Reference Implementation

[Well preserved on codepen](https://codepen.io/banderson623/pen/MXWLEP)

```js
// Lets get shnazz'n!

// The best button styles on the web
// Copyright Clickable Dollars Corp™ 2013
// Author: Gerg Bradellhouse (gerg@cdollars.corp)
(function(){
  if(!window.isShazzified){

    // only apply shnazzzy once
    window.isShazzified = true;

    $('button, .button').each(function(){
      var shnazzersPadders = 10;
      var useGradient = true;
      var shnazzersGradient = '-webkit-linear-gradient(bottom, rgb(44,160,202) 0%, rgb(62,184,229) 100%)';

      if($(this).data('color')){
        var backgroundColor = $(this).data('color');
        useGradient = false;
      }

      if(!$(this).hasClass('no-shnazz')){
        // Sick button design
        $(this).css({
          'background-color': '#ba2323',
          'padding': shnazzersPadders + 'px',
          'position': 'relative',
          'font-family': "'Open Sans', sans-serif",
          'font-size': '12px',
          'text-decoration': 'none',
          'color':'#fff',
          'border': 'solid 1px #186f8f',
          '-webkit-box-shadow': 'inset 0px 1px 0px #7fd2f1, 0px 1px 0px #fff',
          'border-radius': '5px',
        });

        if(useGradient){
           $(this).css('background-image',shnazzersGradient);
        } else {
          $(this).css('background',backgroundColor);
        }

        // adding some cool hover effects!
        $(this).hover(function(){
          $(this).css({
            'padding-bottom': '9px',
            'padding-left':'10px',
            'padding-right':'10px',
            'padding-top':'11px',
            'top':'1px'
          });
          if(useGradient){
            $(this).css('background-image', '-webkit-linear-gradient(bottom, rgb(62,184,229) 0%, rgb(44,160,202) 100%)');
          }
        }, function(){
          $(this).css({
            'padding-bottom': shnazzersPadders + 'px',
            'padding-left': shnazzersPadders + 'px',
            'padding-right': shnazzersPadders + 'px',
            'padding-top': shnazzersPadders + 'px',
            'top': 0
          });
           if(useGradient){
             $(this).css('background-image',shnazzersGradient);
           }
        });

        // get that rad border going, people love this
        $(this).wrap('<div style="display:inline-block; background-color:#ccd0d5; margin: 0; ;z-index:-1; padding: 8px; border-radius: 5px;-webkit-box-shadow: inset 0px 1px 1px #909193, 0px 1px 0px #fff;"></div>');

      }
    });
  }
})();
```

The following HTML can be used for testing

```html
<button class="button">Purchase</button>
<div class="button">Cancel Order</div>
<button data-color="green">Make Coffee</button>
<button class="no-shnazz">Cancel Order</button>
```
