import { useEffect, useState } from "react";
import styled from "styled-components";

type Props = {
  winWord: string;
  finalWord: string[];
};

const StyledLetter = styled.p`
  font-size: 40px;
  width: 40px;
  margin-bottom: 5px;
  margin-top: 0;
  color: ${({ visible }) => (visible ? "black" : "transparent")};
  border-bottom: black solid 2px;

  ::selection {
    background: transparent;
    visibility: hidden;
  }
`;

const StyledLine = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: flex-end;
  column-gap: 10px;
  height: 60px;
`;

const WordLine = ({ winWord, finalWord }: Props) => {
  const [word, setWord] = useState<string[]>([]);

  useEffect(() => {
    const wordArray = Object.assign([], winWord);
    setWord(wordArray);
  }, [winWord]);

  const letters = word.map((letter) => (
    <StyledLetter visible={finalWord.includes(letter.toUpperCase())}>
      {letter.toUpperCase()}
    </StyledLetter>
  ));

  return <StyledLine>{letters}</StyledLine>;
};

export default WordLine;
