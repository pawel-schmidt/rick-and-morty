import { ComponentMeta, Story } from '@storybook/react'
import React from 'react'

import Character from './Character'

type ComponentType = typeof Character
type ComponentPropsType = React.ComponentProps<ComponentType>

export default {
  component: Character,
} as ComponentMeta<ComponentType>

const Template: Story<ComponentPropsType> = (args) => {
  return <Character {...args} />
}

export const WithImage = Template.bind({})
WithImage.args = {
  name: 'Rick Sanchez',
  image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
}

export const WithoutImage = Template.bind({})
WithoutImage.args = {
  name: 'Rick Sanchez',
}
