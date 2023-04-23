import { type ReactRenderer } from '@storybook/react'
import { type PartialStoryFn } from '@storybook/types'
import 'app/styles/index.scss'

export const StyleDecorator = (Story: PartialStoryFn<ReactRenderer>) => (
  <Story />
)
