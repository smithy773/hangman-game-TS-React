# Hangman

The classic Hangman game, made with React + TypeScript.

### Description

This project was made to practice my TypeScript knowledge. It is a rendition of the well-known Hangman game, where a certain word is given and you have to guess it. Each letter is blank, so you have to guess the word letter by letter. Each false guess results in one part of the hangman graphic being drawn. If the graphic of the hangman is completed before you guess the word, you lose.

Made with **Vite**, **React**, **TypeScript**, **CSS** and **eslint** and hosted with **Firebase**.

### Specifics

- Used **Event delegation** when implementing the _Keyboard_ component. Instead of having an _event listener_ for click or press of each button, corresponding to each letter of the alphabet, I delegated said events to a single event listener per action - one for clicking the keyboard buttons on screen and one for pressing your PC's keyboard buttons.

  ![keyboard](/public/images/keyboard.png)

  ![keyboard.tsx image](/public/images/keyboardComponentCode.png)

  Full code available inside `Keyboard.tsx`.

- Instead of relying on an image and waiting for it to load each time a different part of the Hangman graphic must be displayed, I simply built the whole graphic with **CSS**. The graphic is _always loaded_, but it is _hidden_ by default. The different parts are _displayed_ whenever a wrong letter is guessed.

![Hangman graphic](/public/images/HangmanGraphic.png)

![Hangman graphic code](/public/images/HangmanGraphicCode.png)

Full code available inside `HangmanGraphic.tsx`.
