import { screen, render, fireEvent, waitFor } from '@testing-library/react'
import ChatKeyboard from 'components/ChatKeyboard'

describe('<ChatMessage />', () => {
  it('should render correctly', async () => {
    render(<ChatKeyboard />)

    const micButton = screen.getByRole('button', {
      name: /botão gravar audio/i
    })

    const emojiButton = screen.getByRole('button', {
      name: /botão para abrir teclado de emojis/i
    })

    const sendMessageButton = screen.getByRole('button', {
      name: /botão para enviar mensagem/i
    })

    const emojiKeyboard = screen.queryByLabelText(/Teclado Emoji/i)
    const textField = screen.getByRole('textbox') as HTMLInputElement

    expect(micButton).toBeInTheDocument()
    expect(emojiButton).toBeInTheDocument()
    expect(sendMessageButton).toBeInTheDocument()
    expect(emojiKeyboard).not.toBeInTheDocument()

    fireEvent.click(emojiButton)
    waitFor(async () => {
      expect(emojiKeyboard).toBeInTheDocument()
    })

    fireEvent.change(textField, { target: { value: 'lorem ipsum' } })
    expect(textField.value).toBe('lorem ipsum')

    expect(fireEvent.click(emojiButton)).toBeTruthy()
    expect(fireEvent.click(sendMessageButton)).toBeTruthy()
  })
})
