import { screen } from '@testing-library/react'
import ChatMessage from 'components/ChatMessage'
import { renderWithTheme } from 'utils/tests/renderWithTheme'

describe.skip('<ChatMessage />', () => {
  it('should render a chat message from a friend', () => {
    const { container } = renderWithTheme(
      <ChatMessage message="lorem ipsum" isFriend />
    )

    expect(screen.getByText(/lorem ipsum/i)).toBeInTheDocument()
    expect(container.firstChild).toHaveStyle({
      color: 'black',
      background: '#FAFEFF',
      'border-radius': '0 1.6rem 1.6rem 1.6rem'
    })
  })

  it('should render my chat message', () => {
    const { container } = renderWithTheme(<ChatMessage message="lorem ipsum" />)

    expect(screen.getByText(/lorem ipsum/i)).toBeInTheDocument()
    expect(container.firstChild).toHaveStyle({
      color: 'white',
      background: '#128C7E',
      'border-radius': '1.6rem 1.6rem 0 1.6rem'
    })
  })
})
