import './styles.css';
import styled from 'styled-components';
import { useCallback, useEffect, useState } from 'react';
import Hangman from '../components/Hangman';
import Key from '../components/Key';
import WordLine from '../components/WordLine';
import KeyBoardKeys from '../helpers/keyboardkeys';
import ValidateSpecialLetters from '../helpers/validespecialletters';
import getRandomWord from '../helpers/getRandomWord';

const KeyboardLine = styled.div``;

const Message = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  background-color: gray;
  height: 100vh;
  width: 90%;
  font-size: 40px;
  font-weight: bold;
  align-items: center;
  justify-content: center;
`;

const ResetButton = styled.button`
  border: none;
  background-color: black;
  color: white;
  font-size: 1.5rem;
  border-radius: 10px;
  padding: 0.5rem 1rem;
`;

export default function App() {
  const [value, setValue] = useState<string>('');
  const [trys, setTrys] = useState<number>(10);
  const [finalWord, setFinalWord] = useState<string[]>([]);
  const [message, setMessage] = useState<string>('');
  const [gameOver, setGameOver] = useState<boolean>(false);
  const [word, setWord] = useState<string>();
  const [wordAsArray, setWordAsArray] = useState<string[]>([]);

  const words = () => {
    const newWord = getRandomWord().toUpperCase();
    setWord(newWord);

    const newArray = Object.assign([], word);
    setWordAsArray(newArray);
  };

  useEffect(() => {
    words();
  }, [word]);

  const handleKeyClick = (key: string) => {
    console.log(word);
    if (!word?.includes(key)) {
      setTrys(trys - 1);
    }
    setValue(key);
  };

  const handleKeyDown = useCallback(
    (event) => {
      const key = event.key;

      if (finalWord.includes(key.toUpperCase())) {
        return;
      }
      if (!word?.includes(key.toUpperCase())) {
        setTrys(trys - 1);
      }
      if (
        (key.match('[A-Za-z]') && event.code.includes('Key')) ||
        ValidateSpecialLetters(key)
      ) {
        setValue(key.toUpperCase());
      } else {
        setValue('');
      }
    },
    [trys, finalWord, word]
  );

  const reset = () => {
    setTrys(10);
    words();
    setMessage('');
    setFinalWord([]);
    setValue('');
    setGameOver(false);
  };

  useEffect(() => {
    if (wordAsArray.length === 0) {
      return;
    }
    if (wordAsArray.every((l) => finalWord.includes(l))) {
      setMessage('Du hast gewonnen!');
    }
  }, [finalWord, wordAsArray]);

  useEffect(() => {
    if (trys === 0) {
      setGameOver(true);
      setMessage('Du hast verloren');
    }
  }, [trys]);

  useEffect(() => {
    setFinalWord((oldArr) => [value, ...oldArr]);
  }, [value]);

  useEffect(() => {
    if (window) {
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  const KeyBoardLine = (number: number) =>
    KeyBoardKeys.map(
      (value) =>
        number === value.line && (
          <Key
            disabled={finalWord.includes(value.value)}
            onClick={() => handleKeyClick(value.value)}
            value={value.value}
          />
        )
    );

  return (
    <div className="App">
      {message && (
        <Message>
          {message}
          <ResetButton onClick={reset}>Noch mal</ResetButton>
        </Message>
      )}
      <h1>Hangman</h1>
      <div style={{ height: 'min-content' }}>
        <Hangman visibleIndex={trys} dead={gameOver} />
      </div>
      <KeyboardLine>{KeyBoardLine(1)}</KeyboardLine>
      <KeyboardLine>{KeyBoardLine(2)}</KeyboardLine>
      <KeyboardLine>{KeyBoardLine(3)}</KeyboardLine>

      <WordLine winWord={word ? word : 'Kompromiss'} finalWord={finalWord} />
      <p>Du hast noch {trys} Versuche</p>
    </div>
  );
}