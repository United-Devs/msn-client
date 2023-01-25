import { screen, render } from '@testing-library/react'
import MessagesContainer from 'components/MessagesContainer'

describe('<MessagesContainer />', () => {
  it('should render correctly', () => {
    render(
      <MessagesContainer>
        <div data-testid="children">Some Children</div>
      </MessagesContainer>
    )

    expect(screen.getByTestId(/children/i)).toBeInTheDocument()
    expect(screen.getByTestId(/children/i).parentElement).toHaveStyle({
      'max-height': '75vh'
    })
  })
})
