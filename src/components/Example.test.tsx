import React from 'react'

import { render, screen } from '@testing-library/react'

import Example from './Example'

describe('<Example />', () => {
  it('should render correctly', () => {
    render(<Example />)
    expect(screen.getByText(/an example component/i)).toBeInTheDocument()
  })
})
