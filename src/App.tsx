import { use, useCallback, useEffect, useState } from 'react';
import words from '../store/words.json';
import { Keyboard } from './components/Keyboard/Keyboard';
import './App.css';

function App() {
  const [currWord, setCurrWord] = useState(() => {
    return words[Math.floor(Math.random() * words.length)];
  });

  const [msg, setMsg] = useState('');
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  const [wrongGuesses, setWrongGuesses] = useState<number>(0);

  // event delegation - when the user clicks on a letter, check if it is in the word and if it is, add it to the guessed letters

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

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const letter = target.innerText.toLowerCase();

      if (!letter.match(/^[a-z]$/)) return;

      e.preventDefault();
      addGuessedLetter(letter);
    };

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <div className='container'>
      <h1>Win | Lose</h1>
      <h1>Hangman</h1>
      <h1>{currWord}</h1>
      <h1>
        {guessedLetters.length === 0 ? 'Waiting for input...' : guessedLetters}
      </h1>
      <Keyboard />
      <p>{msg}</p>
    </div>
  );
}

export default App;
