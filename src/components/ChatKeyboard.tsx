import { KeyboardEvent, useContext, useState } from 'react'
import { BsFillMicFill } from 'react-icons/bs'
import { IoMdSend } from 'react-icons/io'
import { MdOutlineEmojiEmotions } from 'react-icons/md'

import { Flex, Input, Icon, Box, Button } from '@chakra-ui/react'
import { ChatContext } from 'contexts/chatContext'
import EmojiPicker, { EmojiClickData, EmojiStyle } from 'emoji-picker-react'
import { useSpeechRecognition } from 'hooks/useSpeechRecognition'

const ChatKeyboard = () => {
  const [inputValue, setInputValue] = useState('')
  const [showEmojiKeyboard, setShowEmojiKeyboard] = useState(false)
  const [listeningMic, setListeningMic] = useState(false)

  const { dispatch } = useContext(ChatContext)

  const { recognition } = useSpeechRecognition()

  const handleEmojiClick = (emoji: EmojiClickData) =>
    setInputValue(inputValue + emoji.emoji)

  const handleListeningMic = () => {
    if (recognition) {
      recognition.onstart = () => setListeningMic(true)
      recognition.onend = () => setListeningMic(false)

      /**
        @todo: Alinhar com o pessoal sobre qual o melhor a se fazer, depois de gravar o audio
      */

      recognition.onresult = (event) => {
        setShowEmojiKeyboard(false)

        return dispatch({
          type: 'SEND_MESSAGE',
          payload: { message: event.results[0][0].transcript }
        })
      }

      return recognition.start()
    }

    alert('This browser does not support this function.')
  }

  const handleSendMessage = () => {
    if (!inputValue) return

    dispatch({
      type: 'SEND_MESSAGE',
      payload: {
        message: inputValue
      }
    })

    setShowEmojiKeyboard(false)
    setInputValue('')
  }

  const handleKeyUp = (event: KeyboardEvent) => {
    if (event.key === 'Enter') handleSendMessage()
  }

  return (
    <>
      {showEmojiKeyboard && (
        <Box pos="absolute" bottom="7rem" w="100%">
          <EmojiPicker
            onEmojiClick={handleEmojiClick}
            autoFocusSearch={false}
            emojiStyle={EmojiStyle.APPLE}
            skinTonesDisabled
            lazyLoadEmojis
            width="100%"
            height={350}
          />
        </Box>
      )}

      <Flex
        w="100%"
        h="7.5rem"
        bg="white"
        p="0 2rem"
        alignItems="center"
        justifyContent="center"
        gap="1rem"
      >
        <Flex gap="0.5rem">
          <Button color="#8C8F94" bg="transparent">
            <Icon
              aria-label="Botao gravar audio"
              as={BsFillMicFill}
              w="2rem"
              h="2rem"
              color={listeningMic ? '#126ECE' : 'inherit'}
              onClick={handleListeningMic}
            />
          </Button>

          <Button color="#8C8F94" bg="transparent">
            <Icon
              aria-label="Botao para abrir teclado de emojis"
              as={MdOutlineEmojiEmotions}
              w="2rem"
              h="2rem"
              onClick={() => setShowEmojiKeyboard((prevState) => !prevState)}
            />
          </Button>
        </Flex>

        <Input
          placeholder="Mensagem"
          bg="#EDF3F5"
          border="none"
          borderRadius="1rem"
          p="2rem 1.5rem"
          fontSize="1.4rem"
          value={inputValue}
          onChange={(e) => setInputValue(e.currentTarget.value)}
          onKeyUp={handleKeyUp}
        />

        <Button bg="transparent">
          <Icon
            as={IoMdSend}
            w="2rem"
            h="2rem"
            color="#8C8F94"
            bg="transparent"
            aria-label="Botao para enviar mensagem"
            onClick={handleSendMessage}
          />
        </Button>
      </Flex>
    </>
  )
}

export default ChatKeyboard
