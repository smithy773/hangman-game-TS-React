import { useEffect } from 'react';
import './Keyboard.css';

interface KeyboardProps {
  addGuessedLetter: (letter: string) => void;
}

export function Keyboard(props: KeyboardProps) {
  // getting an array of each letter of the alphabet via character codes
  const alphabetArr: string[] = Array.from({ length: 26 }, (_, i) =>
    String.fromCharCode(97 + i)
  );

  // event delegation - when the user clicks on a letter, check if it is in the word and if it is, add it to the guessed letters
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const letter = target.innerText.toLowerCase();

      if (!letter.match(/^[a-z]$/)) return;

      e.preventDefault();
      props.addGuessedLetter(letter);
    };

    const handleKeypress = (e: KeyboardEvent) => {
      const letter = e.key.toLowerCase();

      if (!letter.match(/^[a-z]$/)) return;

      e.preventDefault();
      props.addGuessedLetter(letter);
    };

    document.addEventListener('keypress', handleKeypress);
    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
      document.removeEventListener('keypress', handleKeypress);
    };
  }, []);

  return (
    <div className='keyboard'>
      {alphabetArr.map((letter: string, idx) => {
        return (
          <h1 key={idx} className='key'>
            {letter}
          </h1>
        );
      })}
    </div>
  );
}
