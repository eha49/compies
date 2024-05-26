import styled from "styled-components";
import VisuallyHidden from "../VisuallyHidden/VisuallyHidden";
import { COLORS } from "../constants";

function ProgressBar({ value, size }) {
  const height = size === "small" ? 8 : 12;
  return (
    <Wrapper
      role="progressbar"
      aria-valuemax={100}
      aria-valuemin={0}
      aria-valuenow={value}
    >
      <VisuallyHidden>{value}</VisuallyHidden>
      <Bar
        style={{ "--width": value + "%", "--height": height + "px" }}
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  box-shadow: inest 0px 2px 4px ${COLORS.transparentGray35};
  background: ${COLORS.transparentGray15};
  width: 500px;
  border-radius: 4px;
  overflow: hidden;
`;

const Bar = styled.div`
  width: var(--width);
  height: var(--height);
  background: ${COLORS.blue};
  border-radius: 4px 0 0 4px;
`;

export default ProgressBar;
