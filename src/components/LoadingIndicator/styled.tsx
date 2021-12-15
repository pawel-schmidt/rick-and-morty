import styled, { css } from 'styled-components'

interface DotProps {
  size: 'small' | 'normal'
}

const normalSize = '24px'
const smallSize = '16px'

export const Dots = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 16px;
`

const dotNormalStyles = css`
  width: ${normalSize};
  height: ${normalSize};

  @keyframes dot-grow {
    0% {
      width: 0;
      height: 0;
    }
    100% {
      width: ${normalSize};
      height: ${normalSize};
    }
  }
  @keyframes dot-shrink {
    0% {
      width: ${normalSize};
      height: ${normalSize};
    }
    100% {
      width: 0;
      height: 0;
    }
  }
`

const dotSmallStyles = css`
  width: ${smallSize};
  height: ${smallSize};

  @keyframes dot-grow {
    0% {
      width: 0;
      height: 0;
    }
    100% {
      width: ${smallSize};
      height: ${smallSize};
    }
  }
  @keyframes dot-shrink {
    0% {
      width: ${smallSize};
      height: ${smallSize};
    }
    100% {
      width: 0;
      height: 0;
    }
  }
`

export const Dot = styled.div<DotProps>`
  display: inline-block;
  position: relative;
  &:after {
    content: '';
    background-color: black;
    position: absolute;
    width: 75%;
    height: 75%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
  }

  &:first-of-type {
    animation: dot-grow 0.5s infinite;
  }

  &:last-of-type {
    animation: dot-shrink 0.5s infinite;
  }

  ${({ size }) => (size === 'small' ? dotSmallStyles : dotNormalStyles)};
`
