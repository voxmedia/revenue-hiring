# How to do this exercise:
1. This exercise aims to be a close example of **the type of work you will routinely tackle in this role**. There are no tricks! We are interested in how you approach the task and if you enjoy the work.
1. Take some time reading the requirements below and plan your approach -- please spend no longer than an hour or two with the project. **If you do not finish that is just fine!** (and **expected!** -- as projects like these are usually allowed at least 1-3 full business days for turnaround.)
1. We are most interested in **how you use what you already know to solve problems quickly.**
1. All requirements for the exercise are in the EXERCISE.md file.

# Conversational Assessment (What to expect in the technical interview)
Our goal here is to learn more about the thought process behind your work. You should write this code like you are part of our team. 
We are interested in the decisions you made, why you made them, and how you would explain your choices/code so your team can understand it. 

**We will be asking questions like the following:**

- What was the first thing you did after reading the exercises?
- Why did you choose this approach?
- What specific syntax decisions did you make?
- Were there interesting optimizations you discovered?
- What was the most difficult part of this exercise?
- What did you do when you got stuck?
- Did you learn anything new during this project?

**Additionally, pretend we work together:**

- What does your teammate need to know about it?
- Did you structure it in a way that is understandable to others?
- Given more time, what would you do next to improve the project that you didn't have time for here?

**Sharing and Submitting** 
- During the technical call be prepared to share your screen with us in a readable (sufficiently large) font size.

**FAQ**

_Can I use jQuery, React, Underscore, or other external libraries?_ – You are free to use any tools, libraries, and frameworks you feel comfortable using.

_Who wrote this? I have so many questions_ – If you are a Vox Media job applicant for this position email melissa.young@voxmedia.com



## The Exercise:

Click this button to "Remix" (Fork) the exercise on Glitch. 

<!-- Remix Button -->
<a href="https://glitch.com/edit/?utm_content=project_vox-ads-e1-hiring-exercise&utm_source=remix_this&utm_medium=button&utm_campaign=glitchButton#!/remix/vox-ads-e1-hiring-exercise">
  <img src="https://cdn.glitch.com/2bdfb3f8-05ef-4035-a06e-2043962a3a13%2Fremix%402x.png?1513093958726" alt="remix this" height="33">
</a>

All information and project files are in the Glitch project!

### URGENT AD BUILD REQUEST

For National Adopt-A-Pet Day, Paws & Co., a local pet adoption agency, is looking to promote the current dogs and cats available for adoption.

They have asked for a fun, interactive experience to help people find the right pet, and our expert creative designers have whipped up a mini Custom Interactive Quiz. 

This campaign is high-dollar (250K) and running as a site-wide takeover tomorrow only, so unfortunately, this demands a quick turnaround and needs to be delivered to the client by end-of-day in order to get approval and be set up for launch by the Advertising Operations team.

### Mocks: 

#### Desktop: 

![desktop intro panel](https://cdn.glitch.com/cf7f6919-57b5-474d-8916-e729aae9488b%2F_mock-desktop-intro-panel.jpg?v=1603418253035)
![desktop question panel](https://cdn.glitch.com/cf7f6919-57b5-474d-8916-e729aae9488b%2F_mock-desktop-question-2-panel.jpg?v=1603418283341)
![desktop results panel](https://cdn.glitch.com/cf7f6919-57b5-474d-8916-e729aae9488b%2F_mock-desktop-results-panel.jpg?v=1603418283362)

#### Mobile: 

![mobile intro panel](https://cdn.glitch.com/cf7f6919-57b5-474d-8916-e729aae9488b%2F_mock-mobile-intro-panel.jpg?v=1603418308522)
![mobile question panel](https://cdn.glitch.com/cf7f6919-57b5-474d-8916-e729aae9488b%2F_mock-mobile-question-2-panel.jpg?v=1603418308614)
![mobile results panel](https://cdn.glitch.com/cf7f6919-57b5-474d-8916-e729aae9488b%2F_mock-mobile-results-panel.jpg?v=1603418308636)

### Assets and Requirements are ready to go and as follows:

- Design has uploaded JPG design mocks and a variety of already cropped assets for both mobile and desktop to the assets section.
- Client is fine with using live text/default sans-serif fonts as needed.
- The quiz will ask two questions, and based on the user’s answers, will recommend a set of pets to adopt and display each pet’s photo, name, and a button users can click to get to their pet listing.
- Unit must be responsive to match the mocks for both mobile and desktop. Our ad template is set up to automatically resize by aspect ratio based on the window width, so make sure you adjust assets as needed within the template.
- Each pet photo should link out to a corresponding pet listing on the Paws & Co. website. (Client will provide links prior to launch, so for now use placeholder links, e.g. `http:/www.google.com?q=cooper`, `http:/www.google.com?q=scout`, etc.)


### Quiz Question tree/path/user flow:

**Question 1: Are you a Dog Person or a Cat Person?**
  - **Dogs 4 lyfe**
    - *Question 2: What does ideal playtime with your new pet look like?*
      - *Playing fetch, running trails together, or going on a hike*
        - Results: Wilbur, Cooper
      - *Leisurely strolls and couch cuddles*
        - Results: Canyon, Felipe
  - **Cats ONLY**
    - *Question 2: What does ideal playtime with your new pet look like?*
      - *Laser pointer, string or feather fun*
        - Results: Banksy, Scout
      - *Lap pets and couch cuddles*
        - Results: Grover, Miss Jackson
