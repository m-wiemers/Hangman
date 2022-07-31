const specialLetters = ["Ä", "ä", "Ö", "ö", "Ü", "ü"];

const ValideSpecialLetters = (str: string): boolean => {
  return specialLetters.includes(str) ? true : false;
};

export default ValideSpecialLetters;
