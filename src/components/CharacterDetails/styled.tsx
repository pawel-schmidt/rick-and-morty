import styled from 'styled-components'

export const Wrapper = styled.div`
  border-radius: 4px;
  border: solid thin #000;
  overflow: hidden;
  width: ${({ theme }) => theme.breakpoints.sm};
  margin-left: auto;
  margin-right: auto;
`

export const Image = styled.img`
  display: block;
  width: 100%;
  object-fit: cover;
`
