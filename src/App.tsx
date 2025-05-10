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

  const incorrectGuesses: string[] = guessedLetters.filter(
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

      <h1>
        {currWord.split('').map((letter) => {
          if (guessedLetters.includes(letter)) {
            return `${letter} `;
          } else {
            return '_ ';
          }
        })}
      </h1>
      {/* test line below */}
      {/* <h1>
        {guessedLetters.length === 0 ? 'Waiting for input...' : guessedLetters}
      </h1> */}
      {win ? (
        'You won!\nPress "F5" to play again.'
      ) : lose ? (
        `You lost! The word was ${currWord}.
        Press "F5" to play again.`
      ) : (
        <Keyboard />
      )}
      <p>{msg}</p>
    </div>
  );
}

export default App;
