import { ComponentMeta, Story } from '@storybook/react'
import React from 'react'

import CharacterDetails from './CharacterDetails'

type ComponentType = typeof CharacterDetails
type ComponentPropsType = React.ComponentProps<ComponentType>

export default {
  component: CharacterDetails,
} as ComponentMeta<ComponentType>

const Template: Story<ComponentPropsType> = (args) => {
  return <CharacterDetails {...args} />
}

export const Default = Template.bind({})
Default.args = {
  name: 'Rick Sanchez',
  image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
  status: 'Alive',
  species: 'Human',
  type: '',
  gender: 'Male',
}
