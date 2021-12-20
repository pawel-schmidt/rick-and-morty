import { ComponentMeta, Story } from '@storybook/react'
import React from 'react'

import CharactersGrid from './CharactersGrid'

type ComponentType = typeof CharactersGrid
type ComponentPropsType = React.ComponentProps<ComponentType>

export default {
  component: CharactersGrid,
} as ComponentMeta<ComponentType>

const Template: Story<ComponentPropsType> = (args) => (
  <CharactersGrid {...args} />
)

const characters = new Array(10)
  .fill({
    id: '1',
    name: 'Rick Sanchez',
    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
  })
  .map((element, index) => ({ ...element, id: index.toString() }))

export const WithItems = Template.bind({})
WithItems.args = {
  characters,
}

export const Empty = Template.bind({})
Empty.args = {
  characters: [],
}
