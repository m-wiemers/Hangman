import styled from "styled-components";

type Props = {
  value: string;
  onClick(): void;
  disabled: boolean;
};

const StyledKey = styled.button`
  border: black solid 1px;
  width: 40px;
  border-bottom: red solid 2px;
  background-color: ${({ disabled }: Props) => (disabled ? "white" : "black")};
  font-size: 24px;
  font-weight: bold;
  color: ${({ disabled }: Props) => (disabled ? "red" : "white")};
  margin: 2px;
`;

const Key = ({ value, onClick, disabled }: Props) => {
  return (
    <StyledKey disabled={disabled} onClick={onClick}>
      {value}
    </StyledKey>
  );
};

export default Key;
