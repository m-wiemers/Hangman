import { useEffect, useState } from 'react';
import styled from 'styled-components';

type Props = {
  winWord: string;
  finalWord: string[];
};

type StyleProps = {
  visible: boolean;
};

const StyledLetter = styled.p`
  font-size: 12px;
  width: 12px;
  margin-bottom: 5px;
  margin-top: 0;
  color: ${({ visible }: StyleProps) => (visible ? 'black' : 'transparent')};
  border-bottom: black solid 2px;

  ::selection {
    background: transparent;
    visibility: hidden;
  }

  @media only screen and (min-width: 500px) {
    font-size: 20px;
    width: 20px;
  }
  @media only screen and (min-width: 768px) {
    font-size: 30px;
    width: 30px;
  }
`;

const StyledLine = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  column-gap: 5px;
  height: 60px;
`;

const WordLine = ({ winWord, finalWord }: Props): JSX.Element => {
  const [word, setWord] = useState<string[]>([]);

  useEffect(() => {
    const wordArray = Object.assign([], winWord);
    setWord(wordArray);
  }, [winWord]);

  const letters = word.map((letter, index) => (
    <StyledLetter
      key={index}
      visible={finalWord.includes(letter.toUpperCase())}
    >
      {letter.toUpperCase()}
    </StyledLetter>
  ));

  return <StyledLine>{letters}</StyledLine>;
};

export default WordLine;
