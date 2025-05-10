import { useEffect } from 'react';
import './HangmanGraphic.css';

interface HangmanGraphicProps {
  incorrectGuesses: string[];
}

export function HangmanGraphic(props: HangmanGraphicProps) {
  useEffect(() => {
    switch (props.incorrectGuesses.length) {
      case 0:
        break;
      case 1:
        document.querySelector('.head')?.classList.add('show-head');
        break;
      case 2:
        document.querySelector('.body')?.classList.add('show-body');
        break;
      case 3:
        document.querySelector('.left-arm')?.classList.add('show-limbs');
        break;
      case 4:
        document.querySelector('.right-arm')?.classList.add('show-limbs');
        break;
      case 5:
        document.querySelector('.left-leg')?.classList.add('show-limbs');
        break;
      case 6:
        document.querySelector('.right-leg')?.classList.add('show-limbs');
        break;
    }
  }, [props.incorrectGuesses]);

  return (
    <div className='hangman-graphic'>
      <div className='gallows-l'> </div>
      <div className='gallows-r'>
        <div className='rope'> </div>
        <div className='head'> </div>
        <div className='middle'>
          <div className='left-arm'> </div>
          <div className='body'> </div>
          <div className='right-arm'> </div>
        </div>
        <div className='legs'>
          <div className='left-leg'> </div>
          <div className='right-leg'> </div>
        </div>
      </div>
    </div>
  );
}
