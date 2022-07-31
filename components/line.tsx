import styled from "styled-components";

type Props = {
  height: number;
  visible?: boolean;
  rotate?: number;
};

export const StyledLine = styled.div`
  background-color: black;
  width: 3px;
  height: ${({ height }: Props) => height && `${height}px`};
  visibility: ${({ visible }: Props) => (visible ? "inherit" : "hidden")};
  transform: rotate(
    ${({ rotate }: Props) => (rotate ? `${rotate}deg` : "rotate(0deg)")}
  );
`;

const Line = ({ height, visible, rotate }: Props) => {
  return <StyledLine height={height} visible={visible} rotate={rotate}></StyledLine>
};

export default Line;
