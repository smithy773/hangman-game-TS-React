# Hangman

The classic Hangman game, made with React + TypeScript.

## Table of contents

- [Screenshot](#screenshot)
- [Links](#links)
- [Built with](#built-with)
- [What I learned](#what-i-learned)
- [Author](#author)

### Screenshot

![Hangman project screenshot](/public/images/hangman.PNG)

### Links

- Live Site URL: [Hangman Live Site, hosted with Firebase Hosting](https://hangman-ts.web.app)

### Built with

- TypeScript
- React
- Vite
- CSS

### What I learned

- Practiced _Event delegation_ when implementing the Keyboard component. Instead of having an _event listener_ for click or press of each button, corresponding to each letter of the alphabet, I delegated said events to a single event listener per action - one for clicking the keyboard buttons on screen and one for pressing your PC's keyboard buttons.

![keyboard](/public/images/keyboard.png)

![keyboard.tsx image](/public/images/keyboardComponentCode.png)

Full Hangman Keyboard code available inside the `Keyboard.tsx` file.

- Instead of relying on an image and waiting for it to load each time a different part of the Hangman graphic must be displayed, I simply built the whole graphic with **CSS**. The graphic is _always loaded_, but it is _hidden_ by default. The different parts are _displayed_ whenever a wrong letter is guessed.

![Hangman graphic](/public/images/HangmanGraphic.png)

![Hangman graphic code](/public/images/HangmanGraphicCode.png)

Full code available inside `HangmanGraphic.tsx`.

## Author

- LinkedIn - [Viktor Kolev](https://www.linkedin.com/in/viktork7/)
- Email - [viktorkolev0707@gmail.com]()
