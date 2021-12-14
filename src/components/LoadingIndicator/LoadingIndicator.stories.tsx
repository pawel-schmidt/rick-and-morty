import { ComponentMeta, Story } from '@storybook/react'
import React from 'react'

import LoadingIndicator from './LoadingIndicator'

type ComponentType = typeof LoadingIndicator
type ComponentPropsType = React.ComponentProps<ComponentType>

export default {
  component: LoadingIndicator,
} as ComponentMeta<ComponentType>

const Template: Story<ComponentPropsType> = (args) => {
  return <LoadingIndicator {...args} />
}

export const Normal = Template.bind({})

export const Small = Template.bind({})
Small.args = {
  size: 'small',
}
