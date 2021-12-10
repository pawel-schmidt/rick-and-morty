import styled from 'styled-components'

const gapSize = '8px'

export const Grid = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin: -${gapSize};
`

export const GridCell = styled.div`
  box-sizing: border-box;
  flex-basis: 25%;
  padding: ${gapSize};
`
