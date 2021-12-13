import { ComponentMeta, Story } from '@storybook/react'
import React from 'react'

import CharactersGrid from './CharactersGrid'

type ComponentType = typeof CharactersGrid
type ComponentPropsType = React.ComponentProps<ComponentType>

export default {
  component: CharactersGrid,
} as ComponentMeta<ComponentType>

const Template: Story<ComponentPropsType> = (args) => {
  return <CharactersGrid {...args} />
}

const results = new Array(10).fill({
  id: '1',
  name: 'Rick Sanchez',
  image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
})

export const WithItems = Template.bind({})
WithItems.args = {
  data: {
    characters: {
      info: null,
      results,
    },
  },
}

export const Empty = Template.bind({})
Empty.args = {
  data: {
    characters: {
      info: null,
      results: [],
    },
  },
}
