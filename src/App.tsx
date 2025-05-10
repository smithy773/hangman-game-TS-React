import { useEffect, useState } from 'react';
import words from '../store/words.json';
import { Keyboard } from './components/Keyboard/Keyboard';
import './App.css';
import { HangmanGraphic } from './components/HangmanGraphic/HangmanGraphic';

function App() {
  const [currWord, setCurrWord] = useState(() => {
    return words[Math.floor(Math.random() * words.length)];
  });

  const [msg, setMsg] = useState('');
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  const incorrectGuesses = guessedLetters.filter(
    (letter) => !currWord.includes(letter)
  );

  const win = currWord
    .split('')
    .every((letter) => guessedLetters.includes(letter));

  const lose = incorrectGuesses.length >= 6;

  function addGuessedLetter(letter: string) {
    setGuessedLetters((prev) => {
      if (prev.includes(letter)) {
        setMsg('You already guessed that letter!');
        return prev;
      }

      console.log('clicked letter ', letter);

      setMsg('');
      return [...prev, letter];
    });
  }

  // event delegation - when the user clicks on a letter, check if it is in the word and if it is, add it to the guessed letters
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const letter = target.innerText.toLowerCase();

      if (!letter.match(/^[a-z]$/)) return;

      e.preventDefault();
      addGuessedLetter(letter);
    };

    const handleKeypress = (e: KeyboardEvent) => {
      const letter = e.key.toLowerCase();

      if (!letter.match(/^[a-z]$/)) return;

      e.preventDefault();
      addGuessedLetter(letter);
    };

    document.addEventListener('keypress', handleKeypress);
    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
      document.removeEventListener('keypress', handleKeypress);
    };
  }, []);

  return (
    <div className='container'>
      <h1>Hangman</h1>
      <HangmanGraphic incorrectGuesses={incorrectGuesses} />
      {/* below it should be empty ___ for each letter of currWord, so basically it will depend on the length */}
      <h1>{currWord}</h1>
      {/* will probably remove the line below */}
      <h1>
        {guessedLetters.length === 0 ? 'Waiting for input...' : guessedLetters}
      </h1>
      {win ? (
        'You won!'
      ) : lose ? (
        `You lost! The word was ${currWord}.`
      ) : (
        <Keyboard />
      )}
      <p>{msg}</p>
    </div>
  );
}

export default App;
