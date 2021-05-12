# Brand Safety Exercise

Marketers today are particularly concerned about [brand safety](https://en.wikipedia.org/wiki/Brand_safety). In particular marketers want to make sure that they do not advertise on articles that contain words that they feel would leave a negative impression of their brand.

## Your Task

To help these marketers you should build an API that takes as arguments an article URL and a list of words and that returns a JSON response indicating if any of the words on the list are contained in the article. For example, given an article URL like [`https://www.theverge.com/2021/5/3/22417586/sony-discord-playstation-consoles-investment-partnership`](https://www.theverge.com/2021/5/3/22417586/sony-discord-playstation-consoles-investment-partnership) and a list of words `['obscenity', 'drugs', 'tobacco', 'crime', 'piracy']`, you API should determine if the article contains any of the listed words. For this exercise you may assume that the only articles you need to parse are those published on [The Verge](https://www.theverge.com) and that the lists of words all contain less than 100 words.

To create this API you may use whatever language (we are most proficient in Ruby and Javascript but don't let that constrain you), environment (your local computer or something like [CodePen](https://codepen.io/) are fine), and technologies you like. It will be more than sufficient to create a Ruby on Rails API via `rails new brand-safety-exercise --api` and add a route and controller method to handle this task. But you should use whatever tools and technologies you are most comfortable with and you should feel comfortable talking about your choices.

## Questions and Discussion

- How did you start designing this API?
- What was the hardest part of your solution?
- How would this API perform if it were called every time someone viewed an article?
- How would you update your design if there were multiple lists of words that had to be checked for each article?
