import Theme from '../src/AppTheme'
import { MemoryRouter } from 'react-router-dom'
import AppHelmet from '../src/AppHelmet'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
  (Story) => (
    <Theme>
      <AppHelmet>
        <MemoryRouter>
          <Story />
        </MemoryRouter>
      </AppHelmet>
    </Theme>
  ),
]
