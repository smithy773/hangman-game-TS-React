import { useEffect, useState } from 'react';
import words from '../store/words.json';
import { Keyboard } from './components/Keyboard/Keyboard';
import './App.css';
import { HangmanGraphic } from './components/HangmanGraphic/HangmanGraphic';

// TODO: disable event listeners if game has finished, host on website

function App() {
  const [currWord] = useState(() => {
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

  console.log(win, lose);

  function addGuessedLetter(letter: string) {
    setGuessedLetters((prev) => {
      if (prev.includes(letter)) {
        setMsg('You already guessed that letter!');
        return prev;
      }

      setMsg('');
      return [...prev, letter];
    });
  }

  return (
    <div className='container'>
      <h1 className='title'>Hangman</h1>
      <HangmanGraphic incorrectGuesses={incorrectGuesses} />

      <h1 className='letters-to-guess'>
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
        <p className='status'>
          {'You won! Press "F5" (reload page) to play again.'}
        </p>
      ) : lose ? (
        <p className='status'>
          {`You lost! The word was ${currWord}.
        Press "F5" (reload page) to play again.`}
        </p>
      ) : (
        <Keyboard addGuessedLetter={addGuessedLetter} />
      )}
      <p>{msg}</p>
    </div>
  );
}

export default App;
