import { ComponentMeta, Story } from '@storybook/react'
import React from 'react'

import LabeledValue from './LabeledValue'

type ComponentType = typeof LabeledValue
type ComponentPropsType = React.ComponentProps<ComponentType>

export default {
  component: LabeledValue,
} as ComponentMeta<ComponentType>

const Template: Story<ComponentPropsType> = (args) => {
  return <LabeledValue {...args} />
}

export const Default = Template.bind({})
Default.args = {
  label: 'name',
  value: 'Rick Sanchez',
}
