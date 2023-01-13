import React from 'react'

import { render, screen } from '@testing-library/react'

import Main from './Main'

describe('<Main />', () => {
  it('should render correctly', () => {
    render(<Main />)
    screen.logTestingPlaygroundURL()
  })
})
