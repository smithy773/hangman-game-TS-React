import { useEffect } from 'react';
import './HangmanGraphic.css';

interface HangmanGraphicProps {
  incorrectGuesses: string[];
}

export function HangmanGraphic(props: HangmanGraphicProps) {
  useEffect(() => {
    let bodyPart: string = '';
    let show: string = '';
    switch (props.incorrectGuesses.length) {
      case 0:
        return;
      case 1:
        bodyPart = '.head';
        show = 'show-head';
        break;
      case 2:
        bodyPart = '.body';
        show = 'show-body';
        break;
      case 3:
        bodyPart = '.left-arm';
        show = 'show-limbs';
        break;
      case 4:
        bodyPart = '.right-arm';
        show = 'show-limbs';
        break;
      case 5:
        bodyPart = '.left-leg';
        show = 'show-limbs';
        break;
      case 6:
        bodyPart = '.right-leg';
        show = 'show-limbs';
        break;
    }
    document.querySelector(bodyPart)?.classList.add(show);
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
