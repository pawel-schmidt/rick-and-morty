import { ComponentMeta, Story } from '@storybook/react'
import React from 'react'
import styled from 'styled-components'

import Proportional from './Proportional'

type ComponentType = typeof Proportional
type ComponentPropsType = React.ComponentProps<ComponentType>

export default {
  component: Proportional,
} as ComponentMeta<ComponentType>

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: linear-gradient(tomato, aquamarine);
  color: white;
`

const Template: Story<ComponentPropsType> = (args) => {
  return (
    <Proportional {...args}>
      <Box>Proportional component</Box>
    </Proportional>
  )
}

export const Square = Template.bind({})

export const Rectangular = Template.bind({})
Rectangular.args = {
  widthToHeightRatio: 2,
}
