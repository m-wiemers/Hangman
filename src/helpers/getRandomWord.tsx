import wordlist from '../words/wordlist';

const getRandomWord = (): string => {
  const randomNumber = Math.floor(Math.random() * wordlist.length);
  const newWord = wordlist[randomNumber];
  return newWord;
};

export default getRandomWord;
