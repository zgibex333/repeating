import { type ReactRenderer } from '@storybook/react'
import { type PartialStoryFn } from '@storybook/types'
import { BrowserRouter } from 'react-router-dom'

export const RouterDecorator = (Story: PartialStoryFn<ReactRenderer>) => (
  <BrowserRouter>
    <Story />
  </BrowserRouter>
)
