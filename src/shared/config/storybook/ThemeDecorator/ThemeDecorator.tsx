import { type ReactRenderer } from '@storybook/react'
import { type PartialStoryFn } from '@storybook/types'
import { type Theme } from 'app/providers/ThemeProvider'

export const ThemeDecorator =
  (theme: Theme) => (Story: PartialStoryFn<ReactRenderer>) =>
    (
      <div className={`app ${theme}`}>
        <Story />
      </div>
    )
