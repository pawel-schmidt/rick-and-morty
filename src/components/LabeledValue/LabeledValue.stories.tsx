import { ComponentMeta, Story } from '@storybook/react'
import React from 'react'
import styled from 'styled-components'

import LabeledValue from './LabeledValue'

type ComponentType = typeof LabeledValue
type ComponentPropsType = React.ComponentProps<ComponentType>

export default {
  component: LabeledValue,
} as ComponentMeta<ComponentType>

const Wrapper = styled.div`
  max-width: ${({ theme }) => theme.breakpoints.sm};
`

const Template: Story<ComponentPropsType> = (args) => (
  <Wrapper>
    <LabeledValue {...args} />
  </Wrapper>
)

export const Default = Template.bind({})
Default.args = {
  label: 'name',
  value: 'Rick Sanchez',
}
