import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 8px;
`

export const Label = styled.div`
  font-weight: bold;
  text-transform: lowercase;
  font-size: smaller;
`

export const Filler = styled.div`
  border-bottom: solid 1px #ddd;
  flex: 1;
  min-width: 48px;
  margin-left: 8px;
  margin-right: 8px;
`

export const Value = styled.div`
  font-family: 'Cabin Sketch', cursive;
  text-transform: capitalize;
`
