import React from 'react'

import { Filler, Label, Value, Wrapper } from './styled'

interface Props {
  label: string
  value: string
}

const LabeledValue = ({ label, value = '—' }: Props): React.ReactElement => {
  return (
    <Wrapper>
      <Label>{label}</Label>
      <Filler />
      <Value>{value}</Value>
    </Wrapper>
  )
}

export default LabeledValue
