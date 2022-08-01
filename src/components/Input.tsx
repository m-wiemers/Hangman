import styled from 'styled-components';

type Props = {
  value: string;
  onChange: (key: string) => void;
};

const StyledInput = styled.input`
  border: black 3px solid;
  width: 50px;
  font-size: 42px;
  text-align: center;
`;

const Input = ({ onChange, value }: Props): JSX.Element => {
  const isValide = (str: string) => {
    if (str.match('[A-Za-z]+')) {
      const Key = str;
      onChange(Key.toUpperCase());
    } else {
      onChange('');
    }
  };

  return (
    <form>
      <StyledInput
        type="text"
        value={value}
        onChange={(e) => isValide(e.target.value)}
        maxLength={1}
        required
      />
    </form>
  );
};

export default Input;
