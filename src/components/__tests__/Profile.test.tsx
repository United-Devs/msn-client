import React from 'react'

import { fireEvent, render, screen } from '@testing-library/react'
import Profile from 'components/Profile'
import { profileMock } from 'mocks/profile'

describe.skip('<Profile />', () => {
  it('should render the user profile correctly', () => {
    render(<Profile {...profileMock} />)

    const backButton = screen.getByRole('button', {
      name: /icone de uma seta para a esquerda/i
    })

    expect(backButton).toBeInTheDocument()
    expect(fireEvent.click(backButton)).toBeTruthy()

    expect(screen.getByLabelText('Foto do usuario')).toHaveStyle({
      'background-image': `url(${profileMock.photo})`
    })

    expect(screen.getByText(/jane doe/i)).toBeInTheDocument()
    expect(screen.getByText(/👨🏻‍💻 focusing/i)).toBeInTheDocument()
  })

  it('should render the default image when the photo is not passed', () => {
    render(<Profile {...profileMock} photo={undefined} />)

    const defaultImagePath = 'img/defaultProfile.jpg'

    expect(screen.getByLabelText('Foto do usuario')).toHaveStyle({
      'background-image': `url(${defaultImagePath})`
    })
  })
})
