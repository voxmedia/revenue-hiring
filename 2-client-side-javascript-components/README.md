# E2: Client-Side JavaScript Components

You're an engineer on Vox Media's revenue team. In a surprising turn of events, our premium ad network [Concert](https://concert.io) has just pivoted from display ads into breakfast food.

Your job: help make **Concert Breakfast Studio's** e-commerce presence into a reality by creating an interactive, client-side experience.

The HTML and CSS has already been mocked up, so your responsibility is to make the page _work_.

![Concert Breakfast Studio](https://user-images.githubusercontent.com/848147/65905961-31605e00-e387-11e9-8404-57bd7654021d.png)

## Your Task

To make the Concert Breakfast Studio interactive, you will need to do the following:

- Pull in a **dynamic list** of menu items, living as a constant in `kitchen.js`, and replace the static items in the mockup.
- The `Food Groups` filter dropdown is populated with a **unique, alphabetical list** of all possible groups from the menu.
- The items in the `Food Groups` filter are **capitalized**, but the group labels in the menu items are lowercase.
- When a user enters search text, **filter menu items by title**.
- When a user selects a food group, **filter menu items by group tags**.
- When a user clicks on the plus icon for a menu item, it **increments the number** in the `Add to Cart (0)` button and changes the plus icon to a minus icon.
- When a user clicks on the minus icon for a menu item, it **decrements the number** in the `Add to Cart (n)` button and changes the minus icon back to a plus button.

## Getting Started

To get you started quickly, we have starter projects hosted on [CodeSandbox](https://codesandbox.io) for both React and Vue:

- [React](https://codesandbox.io/s/e2-react-556dz)
- [Vue](https://codesandbox.io/s/e2-vue-emjvb)

Feel free to fork either sandbox (a free CodeSandbox account is required) to start in on your version — or create your own from scratch using a completely different client-side framework! 

_We're not looking for Vue- or React-specific solutions; rather, we hope to see a basic understanding of client-side JavaScript component architecture._

## Conversations and Questions

- Where did you start with the exercise?
- Why did you choose to begin the way you did?
- Tell us about your component architecture.
- What pieces did you decide to split into components? Why or why not?
- How did you handle component state? Did you use a state-management library? Why or why not?
- How did you communicate events or actions between components?
- What was the most difficult part of the exercise?
- What would you do differently next time?
- What do you do when you get stuck?
- Did you learn anything new?
- What documentation would you provide for this project for other engineers?

## Code and additional resources

`kitchen.js` (already exists in the CodeSandbox links above)

```js
export const MENU = [
  {
    name: "Pancakes",
    image: "https://emjvb.csb.app/images/pancakes.svg",
    groups: ["sweet", "hot"]
  },
  {
    name: "Eggs",
    image: "https://emjvb.csb.app/images/eggs.svg",
    groups: ["protein", "hot"]
  },
  {
    name: "Bagel",
    image: "https://emjvb.csb.app/images/bagel.svg",
    groups: ["portable", "hot", "carbs"]
  },
  {
    name: "Donut",
    image: "https://emjvb.csb.app/images/donut.svg",
    groups: ["sweet", "portable"]
  },
  {
    name: "Coffee",
    image: "https://emjvb.csb.app/images/coffee.svg",
    groups: ["beverage", "hot", "portable"]
  },
  {
    name: "Muffin",
    image: "https://emjvb.csb.app/images/muffin.svg",
    groups: ["sweet", "portable"]
  },
  {
    name: "Toast",
    image: "https://emjvb.csb.app/images/toast.svg",
    groups: ["carbs", "hot"]
  },
  {
    name: "Waffles",
    image: "https://emjvb.csb.app/images/waffles.svg",
    groups: ["sweet", "hot"]
  },
  {
    name: "Oatmeal",
    image: "https://emjvb.csb.app/images/oatmeal.svg",
    groups: ["hot", "healthy"]
  },
  {
    name: "Bacon",
    image: "https://emjvb.csb.app/images/bacon.svg",
    groups: ["hot", "protein"]
  }
];
```
