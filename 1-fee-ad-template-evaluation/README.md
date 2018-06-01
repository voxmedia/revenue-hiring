
# Evaluate a Prototype for Templatization

✨**SparkleTooth Toothpaste Corp**✨ has grand plans to launch a nationwide oral hygiene education program. To reach the minds and hearts of many, they are looking to leverage advertising campaigns and ad-served content to distribute their message and branding across the web. 

Seeking to make the content "interactive," they have requested from us a custom "quiz" unit to test users' knowledge in a fun way. 

Being a modern, tech-savvy company, ✨SparkleTooth✨ asked their on-staff developers to throw together a quick prototype of what they want and sent over this [Codepen example](https://codepen.io/techsassy/pen/eKNKPj)

While SparkleTooth is fine running this creative "as is," our sales team thinks this custom creative execution is an idea they can sell to many clients and would like you to explore the best way to turn this unit into a template that can be easily reused for many different clients. 

You are well-versed in your company's ad building tools and know that you can build a dynamic template that can help streamline the production of many future quizzes. 

### Your Task

There's no need to start coding just yet. For now, your job is to take a look at the prototype and its code and take some notes for the following questions you'll be asked in the next sales product team meeting:

- **What parts of the code can be made dynamic variables or repeatable code snippets to streamline the production of these?**

- **Are there any features you think should be added that would make the quiz more appealing and feel "more customized" for a client without adding a ton of extra design and engineering work?**

- **From a casual first skim and read of the code, how much refactoring of the original prototype do you think is needed? Can you give a timeline estimate for how long it would take to turn this into a viable template (not including post-development testing and, of course, as always, extensive QA)?

---

### Prototype Code

[Codepen here](https://codepen.io/techsassy/pen/eKNKPj)

#### HTML:
```html
<div class="ad__athena ad__hymnal">
  <div class="quiz is-active">
    <div class="quiz__content">
      <h1>Quiz: Test your teeth-cleaning knowledge</h1>

      <form name="quiz-form">
        <ul class="quiz-questions">
          <li class="quiz-question question-1-active">
            <h2>1. 90% of bad breath comes from bacteria living where?</h2>
            <input class="answer" type="radio" name="q1" value="a" id="q1a">Between your teeth<br>
            <input class="answer" type="radio" name="q1" value="b" id="q1b">On your tongue<br>
            <input class="answer" type="radio" name="q1" value="c" id="q1c">In the food you eat<br>
            <input class="answer" type="radio" name="q1" value="d" id="q1d">On your lips<br>
          </li>
          <li class="quiz-question question-2">
            <h2>2. At any given time, bacteria in your mouth number up to.</h2>
            <input class="answer" type="radio" name="q2" value="a" id="q2a">10-20 million<br>
            <input class="answer" type="radio" name="q2" value="b" id="q2b">200 million<br>
            <input class="answer" type="radio" name="q2" value="c" id="q2c">10-50 billion<br>
            <input class="answer" type="radio" name="q2" value="d" id="q2d">500 trillion<br>
          </li>
          <li class="quiz-question question-3">
            <h2>3. What percentage of people floss their teeth daily?</h2>
            <input class="answer" type="radio" name="q3" value="a" id="q3a">5%<br>
            <input class="answer" type="radio" name="q3" value="b" id="q3b">12%<br>
            <input class="answer" type="radio" name="q3" value="c" id="q3c">22%<br>
            <input class="answer" type="radio" name="q3" value="d" id="q3d">30%<br>
          </li>
        </ul>

        <div class="counter">
          <span id="count">1 of 2</span>
          <button type="button" class="submit-button">
            <span class="submit-button-text">Submit Answers</span>
          </button>
        </div>
      </form>
    
      <div class="results"></div>

    </div>
  </div>
</div>
```

#### CSS:

```css
.ad__athena {  
  padding: 0 0 percentage(590 / 1060);
  }
}

.ad__hymnal {
  font-family: "Helvetica neue", sans-serif;
  height: 0;
  margin: 0 auto;
  overflow: hidden;
  position: relative;
  width: 100%;
}

h1 {
  color: #111;
  font-family: "Helvetica neue", sans-serif;;
  font-size: 16px;
  margin-top: 0;
  text-align: center;
  width: 100%;
}

h2 {
  font-size: 14px;
}

.quiz {
  display: none;
}

.quiz.is-active {
  display: block;
  height: 0;
  left: 0;
  margin: auto;
  overflow: hidden;
  position: absolute;
  right: 0;
  top: 19px;
  width: 100%;
  z-index: 0;
}

.quiz__content {
  background-color: #fff;
  border: solid 1px #d2d2d2;
  box-sizing: border-box;
  left: 50%;
  overflow: hidden;
  padding: 10px;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
}

.quiz-form {
  width: 100%;
}

.quiz-questions {
  align-items: center;
  display: flex;
  list-style: none;
  margin: 0;
  min-height: 20px;
  overflow: hidden;
  padding: 0;
  position: relative;
  text-align: center;
  transform: translate3d(0,0,0);
  transition: transform .25s ease-in-out;
  width: 300%;
}

.quiz-questions.question-1-active {
  transform: translate3d(0,0,0);
}

.quiz-questions.question-2-active {
  transform: translate3d(-33.33%,0,0);
}

.quiz-questions.question-3-active {
  transform: translate3d(-66.66%, 0, 0);
}

.quiz-question {
  color: #888;
  display: block;
  font-family: "Helvetica neue", sans-serif;;
  font-size: 13px;
  font-weight: 200;
  margin: 0 auto;
  text-align: center;
  transition: transform .25s ease-in-out;
  width: 100%;
}

.counter {
  text-align: center;
}

#count {
  background-color: #f9f9f9;
  border-radius: 3px;
  border: 1px solid #c2c2c2;
  color: #c2c2c2;
  display: inline-block;
  font-family: "Helvetica neue", sans-serif;;
  font-size: 10px;
  margin-top: 26px;
  padding: 2px 4px;
}

.quiz.is-active {
  height: 100%;
  width: 100%;
}

.submit-button {
  background-color: #f9f9f9;
  border-radius: 3px;
  border: 1px solid #737373;
  color: #0057b3;
  cursor: pointer;
  display: none;
  font-family: "Helvetica neue", sans-serif;;
  font-size: 10px;
  margin-top: 26px;
  padding: 8px 10px;
}

.submit-button:hover {
  background-color: #eee;
}

.results {
  background-color: #fff;
  border: solid 6px #58dce4;
  bottom: 0;
  box-sizing: border-box;
  display: none;
  font-family: "Helvetica neue",sans-serif;
  left: 0;
  margin: 15px auto;
  padding: 10px;
  position: absolute;
  right: 0;
  text-align: center;
  top: 0;
  width: 50%;
}

.results img {
  width: 20%;
}
```

#### JS:

```js

var formContainer = document.querySelector('.ad__hymnal');
var form = formContainer.querySelector('.quiz-form');
var formQuestions = formContainer.querySelector('.quiz-questions');
var questions = ['question-1-active', 'question-2-active', 'question-3-active'];
var submitButton = formContainer.querySelector('.submit-button');

// Activate Submit button
submitButton.addEventListener('click', submitAnswers);

// Find all the questions in the active variant and add an event listener
answers = [].slice.call(formContainer.querySelectorAll('.answer'));
answers.forEach(function(answer) {
  answer.addEventListener('change', showNextQuestion);
});

setNextActive();


// if we have a next question, show it, otherwise close the form after three seconds or onClick, whichever comes first.
function setNextActive() {
  if (questions.length) {
    var next = questions.shift();
    formQuestions.className = 'quiz-questions ' + next;
    formQuestions.dataset.activeQuestion = next;
    if (questions.length < 1) {
      document.querySelector('.submit-button').style.display = 'inline';
      document.getElementById('count').style.display = 'none';
    }
  }
}

function answerHandler(ev) {
  ev.preventDefault();
  var count = document.getElementById('count');
  var activeQuestion = formQuestions.getAttribute('data-active-question');
  var chosenAnswer = ev.currentTarget;
  var chosenAnswerData = chosenAnswer.getAttribute('data-answer');

  chosenAnswer.classList.add('active');

  if (questions.length == 1) {
    chosenAnswer.removeEventListener('click', answerHandler);
  } else {
    setTimeout(function() {
      chosenAnswer.classList.remove('active');
      window.requestAnimationFrame(setNextActive);
      count.innerHTML = "2 of 2";
    }, 1500);
  }
}

function showNextQuestion() {
  window.requestAnimationFrame(setNextActive);
}


function submitAnswers() {
  var total = 3;
  var score = 0;
  
  // Get User Input
  var q1 = document.forms["quiz-form"]["q1"].value;
  var q2 = document.forms["quiz-form"]["q2"].value;
  var q3 = document.forms["quiz-form"]["q3"].value;
  
  // Set Correct Answers
  var answers = ["b","a","d"];
  
  // Check Answers
  for(i=1; i<=total; i++) {
    if(eval('q'+i) === answers[i-1]) {
      score++;
    }
  } 
  
  //Display Results
  var results = document.querySelector('.results');
  var logo = "https://i.imgur.com/f2zSHSO.png";
  results.innerHTML = '<h3>You scored <span>'+score+'</span> out of <span>'+total+'</span></h3><p>Visit <a href="http://www.vox.com"><img src="' + logo + '" /></a> to learn more about how to keep your teeth healthy!</p>';
  results.style.display = "block";
}
```

