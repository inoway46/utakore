import { render, screen } from '@testing-library/react'
import Home from '../pages/index'
import '@testing-library/jest-dom'

describe('Home', () => {
  it('renders input form', () => {
    render(<Home />)
    expect(screen.getByRole('textbox')).toBeInTheDocument()
  })

    expect(heading).toBeInTheDocument()
  })
})
