import styled from "styled-components";
import VisuallyHidden from "../VisuallyHidden/VisuallyHidden";
import { COLORS } from "../constants";

function ProgressBar({ value }) {
  return (
    <Wrapper
      role="progressbar"
      aria-valuemax={100}
      aria-valuemin={0}
      aria-valuenow={value}
      $value={value}
    >
      <VisuallyHidden>{value}</VisuallyHidden>
      <Bar style={{ "--width": value + "%" }} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  box-shadow: inest 0px 2px 4px ${COLORS.transparentGray35};
  background: ${COLORS.transparentGray15};
  width: ${(props) => props.$value * 5 + "px"};
  border-radius: 4px;
  overflow: hidden;
`;

const Bar = styled.div`
  width: var(--width);
  height: 8px;
  background: ${COLORS.blue};
  border-radius: 4px 0 0 4px;
`;

export default ProgressBar;
