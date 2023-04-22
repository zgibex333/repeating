import { fireEvent, screen } from '@testing-library/react'
import renderWithTranslation from 'shared/lib/tests/renderWithTranslation/renderWithTranslation'
import Sidebar from './Sidebar'

describe('Sidebar', () => {
  const text = 'Text'
  test('should render with correct text', () => {
    renderWithTranslation(<Sidebar />)
    expect(screen.getByTestId('sidebar')).toBeInTheDocument()
  })
  test('should render with correct text', () => {
    renderWithTranslation(<Sidebar />)
    const toggleBtn = screen.getByTestId('sidebar-toggler')
    expect(screen.getByTestId('sidebar')).toBeInTheDocument()
    fireEvent.click(toggleBtn)
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed')
  })
})
