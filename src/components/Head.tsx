import styled from 'styled-components';

type Props = {
  visible: boolean;
  dead: boolean;
};

type FaceProps = {
  right: boolean;
};

const Wrapper = styled.div`
  visibility: ${({ visible }: Partial<Props>) =>
    visible ? 'inherit' : 'hidden'};
`;

const StyledCircle = styled.div`
  position: relative;
  height: 75px;
  width: 75px;
  background-color: black;
  border-radius: 50%;
`;

const StyledFace = styled.div`
  position: absolute;
  left: 2px;
  top: 2px;
  height: 70px;
  width: 70px;
  background-color: white;
  border-radius: 50%;
`;

const StyledEye = styled.div`
  position: absolute;
  left: ${({ right }: Partial<FaceProps>) => (right ? '50px' : '15px')};
  top: 20px;
  height: 5px;
  width: 5px;
  background-color: black;
  border-radius: 50%;
`;

const StyledMouth = styled.div`
  position: absolute;
  left: 20px;
  top: 50px;
  height: 5px;
  width: 30px;
  background-color: black;
`;

const DeadEye = styled.p`
  font-weight: bold;
  position: absolute;
  left: ${({ right }: Partial<FaceProps>) => (right ? '46px' : '13px')};
  top: 20px;
  margin: 0;
`;

const Head = ({ visible, dead }: Props) => {
  return (
    <Wrapper visible={visible}>
      <StyledCircle>
        <StyledFace>
          {dead ? <DeadEye>X</DeadEye> : <StyledEye />}
          {dead ? <DeadEye right>X</DeadEye> : <StyledEye right />}
          <StyledMouth />
        </StyledFace>
      </StyledCircle>
    </Wrapper>
  );
};

export default Head;
