import styled from "styled-components";
import VisuallyHidden from "../VisuallyHidden/VisuallyHidden";
import { COLORS } from "../constants";

const STYLES = {
  small: {
    height: 8,
    padding: 0,
  },
  medium: {
    height: 12,
    padding: 0,
  },
  large: {
    height: 16,
    padding: 4,
  },
};

function ProgressBar({ value, size }) {
  const style = STYLES[size];

  if (!style) {
    throw new Error(`Unknown size passed: ${size}`);
  }

  return (
    <Wrapper
      role="progressbar"
      aria-valuemax={100}
      aria-valuemin={0}
      aria-valuenow={value}
      style={{ "--padding": style.padding + "px" }}
    >
      <VisuallyHidden>{value}</VisuallyHidden>
      <BarWrapper>
        <Bar
          style={{
            "--width": value + "%",
            "--height": style.height + "px",
          }}
        />
      </BarWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  box-shadow: inest 0px 2px 4px ${COLORS.transparentGray35};
  background: ${COLORS.transparentGray15};
  padding: var(--padding);
  width: 500px;
  border-radius: 4px;
`;

const BarWrapper = styled.div`
  overflow: hidden;
  border-radius: 4px;
`;

const Bar = styled.div`
  width: var(--width);
  height: var(--height);
  background: ${COLORS.blue};
  border-radius: 4px 0 0 4px;
`;

export default ProgressBar;
