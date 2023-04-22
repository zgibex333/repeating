import { render, screen } from '@testing-library/react'
import Button, { ThemeButton } from './Button'

describe('Button', () => {
  const text = 'Text'
  test('should render with correct text', () => {
    render(<Button>{text}</Button>)
    expect(screen.getByText(text)).toBeInTheDocument()
  })
  test('should render with correct classname', () => {
    render(<Button theme={ThemeButton.CLEAR}>{text}</Button>)
    expect(screen.getByText(text)).toHaveClass('clear')
  })
})
