https://williamlafortunecaissy.github.io/comingSoon/
# Frontend Mentor - Base Apparel coming soon page solution

This is a solution to the [Base Apparel coming soon page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/base-apparel-coming-soon-page-5d46b47f8db8a7063f9331a0). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - The `input` field is empty
  - The email address is not formatted correctly

## My process

### Built with

- Semantic HTML5 markup
- Sass
- Flexbox
- Bem
- Mobile-first workflow
### What I learned

This simple project was a good start on form validations. I was quite conftable doing the Html css, I challenged myself to do it quickly. This entire project was done in 8h~

Due to the time limit and the fact that it is a simple landing page, some styling was done quickly
ex:

```scss
main {
  ...
  h1 {
    ...
  }
  ...
}
```

normally I would add a class to each element in a bem format to keep the specificity to the lowest, but considering its a simple landing page this works fine

the same mentality has been applied in js, ex:
```js
function updateErrorMessage(message) {
    const messageDisplayer = document.getElementById("email__message")
    messageDisplayer.innerText = message || ""
}
```
this function could receive the input as param to specify which input has an error, but in this case we only have 1 input.


### Continued development

I really liked this project, I would like to tackle a harder challenge, especially in js to be more conftable with this language whithout being overwhelmed by the difficulty

## Author

- Website - [William Lafortune-Caissy](http://www.williamlafortunecaissy.ca/)
- Frontend Mentor - [@williamLafortuneCaissy](https://www.frontendmentor.io/profile/williamLafortuneCaissy)
- Facebook - [@william.lafortunecaissy](https://www.facebook.com/william.lafortunecaissy/)
- Linkedin - [@william-lafortune-caissy-803800149](https://www.linkedin.com/in/william-lafortune-caissy-803800149/)


**The english language was used in this README only because the entire project was in english**
