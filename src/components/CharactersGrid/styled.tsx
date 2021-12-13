import styled from 'styled-components'

const gapSize = '8px'

export const GridWrapper = styled.div`
  padding: ${gapSize};
`

export const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: -${gapSize};
`

export const GridCell = styled.div`
  box-sizing: border-box;
  flex-basis: 25%;
  padding: ${gapSize};
`
