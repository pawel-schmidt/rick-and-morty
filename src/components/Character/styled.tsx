import styled from 'styled-components'

export const Wrapper = styled.div`
  border-radius: 8px;
  box-shadow: 0 0 4px gray;
  overflow: hidden;
  width: 100%;
  height: 100%;
  transition: 300ms;
  box-sizing: border-box;

  &:hover {
    box-shadow: 0 0 8px 2px gray;
    transform: scale(1.05, 1.05);
  }
`

export const Image = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export const Name = styled.div`
  font-family: 'Cabin Sketch', cursive;
  text-transform: capitalize;
  color: black;
  background-color: rgba(255, 255, 255, 0.5);
  position: absolute;
  padding: 12px;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0;
  transition: 300ms;

  ${Wrapper}:hover & {
    opacity: 1;
  }
`
