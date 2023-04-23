import type { Meta, StoryObj } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'

import Button, { ThemeButton } from './Button'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Button> = {
  title: 'shared/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {},
}

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Clear: Story = {
  args: {
    children: 'Text',
  },
}

export const ClearDarkTheme: Story = {
  args: {
    children: 'Text',
  },
}

ClearDarkTheme.decorators = [ThemeDecorator(Theme.dark)]

export const Outline: Story = {
  args: {
    children: 'Text',
    theme: ThemeButton.OUTLINE,
  },
}

export const OutlineDarkTheme: Story = {
  args: {
    children: 'Text',
    theme: ThemeButton.OUTLINE,
  },
}

OutlineDarkTheme.decorators = [ThemeDecorator(Theme.dark)]
