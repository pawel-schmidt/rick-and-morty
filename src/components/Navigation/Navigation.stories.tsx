import { ComponentMeta, Story } from '@storybook/react'
import React from 'react'
import { MemoryRouter } from 'react-router-dom'

import Navigation from './Navigation'

type ComponentType = typeof Navigation
type ComponentPropsType = React.ComponentProps<ComponentType>

export default {
  component: Navigation,
} as ComponentMeta<ComponentType>

const Template: Story<ComponentPropsType> = () => {
  return (
    <MemoryRouter>
      <Navigation />
    </MemoryRouter>
  )
}

export const Default = Template.bind({})
