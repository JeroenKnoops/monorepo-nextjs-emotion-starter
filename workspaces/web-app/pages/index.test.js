import React from 'react'
import { render } from 'react-testing-library'
import Home from './index'

describe('index', () => {
  it('has proper styling', () => {
    const { container } = render(<Home />)
    expect(container).toMatchSnapshot()
  })

  it('displays welcome text', () => {
    const { getByText } = render(<Home />)
    expect(getByText(/welcome to next.js/i)).toBeInTheDocument()
  })
})
