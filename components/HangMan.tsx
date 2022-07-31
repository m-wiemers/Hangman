import styled from 'styled-components';
import Line, { StyledLine } from './line';
import Head from './Head';

type Props = {
  visibleIndex: number;
  dead: boolean;
};

type StyleTypes = {
  right?: boolean;
};

const OverWrapper = styled.div`
  height: 250px;
`;

const Wrapper = styled.div`
  position: relative;
  left: 50%;
  transform: translate(-50%);
  width: max-content;
`;

const Body = styled.div`
  position: absolute;
  left: 50%;
  transform: translate(-50%);
`;

const Arm = styled(StyledLine)`
  position: absolute;
  left: ${({ right }: StyleTypes) => (right ? '55px' : '18px')};
  top: 70px;
`;

const Leg = styled(StyledLine)`
  position: absolute;
  left: ${({ right }: StyleTypes) => (right ? '55px' : '18px')};
  top: 135px;
`;

const Cable = styled(StyledLine)`
  position: absolute;
  top: -30%;
  left: -20px;
`;

const LongStand = styled(StyledLine)`
  position: absolute;
  top: 35%;
  left: -70px;
`;

const StandLeg = styled(StyledLine)`
  position: absolute;
  left: ${({ right }: StyleTypes) => (right ? '-52px' : '-88px')};
  top: 168px;
`;

const Hangman = ({ visibleIndex, dead }: Props) => {
  return (
    <OverWrapper>
      <Wrapper>
        <StandLeg visible={visibleIndex < 10} height={50} rotate={45} />
        <StandLeg
          right={visibleIndex < 9}
          visible={visibleIndex < 9}
          height={50}
          rotate={-45}
        />
        <LongStand visible={visibleIndex < 8} height={150} />
        <Cable visible={visibleIndex < 7} height={100} rotate={90} />
        <Head dead={dead} visible={visibleIndex < 6} />
        <Body>
          <Line visible={visibleIndex < 5} height={70} />
        </Body>
        <Arm visible={visibleIndex < 4} height={50} rotate={45} />
        <Arm
          right={visibleIndex < 3}
          visible={visibleIndex < 3}
          height={50}
          rotate={-45}
        />
        <Leg visible={visibleIndex < 2} height={50} rotate={45} />
        <Leg
          right={visibleIndex < 1}
          visible={visibleIndex < 1}
          height={50}
          rotate={-45}
        />
      </Wrapper>
    </OverWrapper>
  );
};

export default Hangman;
