import './Keyboard.css';

export function Keyboard() {
  // getting an array of each letter of the alphabet via character codes
  const alphabetArr: string[] = Array.from({ length: 26 }, (_, i) =>
    String.fromCharCode(97 + i)
  );

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
