import styled from "styled-components";
import VisuallyHidden from "../VisuallyHidden/VisuallyHidden";
import { COLORS } from "../constants";

const STYLES = {
  small: {
    height: 8,
    radius: 4,
    padding: 0,
  },
  medium: {
    height: 12,
    radius: 4,
    padding: 0,
  },
  large: {
    height: 16,
    radius: 4,
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
      style={{
        "--padding": style.padding + "px",
        "--radius": style.radius + "px",
      }}
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
  border-radius: calc(var(--radius) + var(--padding));
`;

const BarWrapper = styled.div`
  overflow: hidden;
  border-radius: var(--radius);
`;

const Bar = styled.div`
  width: var(--width);
  height: var(--height);
  background: ${COLORS.blue};
  border-radius: var(--radius) 0 0 var(--radius);
`;

export default ProgressBar;
