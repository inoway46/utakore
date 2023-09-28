import { render, screen } from '@testing-library/react'
import Home from '../app/page'
import '@testing-library/jest-dom'

describe('Home', () => {
  it('renders input form', () => {
    render(<Home />)
    expect(screen.getByRole('textbox')).toBeInTheDocument()
  })

  it('renders 登録ボタン', () => {
    render(<Home />)
    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()
    expect(button).toHaveTextContent('登録')
  })
})
