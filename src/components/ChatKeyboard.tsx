import { KeyboardEvent, useContext, useState } from 'react'
import { BsFillMicFill, BsFillEmojiSmileFill } from 'react-icons/bs'
import { IoMdSend } from 'react-icons/io'

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
    // prevents double call if mic is already active
    if (listeningMic) return

    if (recognition) {
      recognition.onstart = () => setListeningMic(true)
      recognition.onend = () => {
        setListeningMic(false)
        recognition.stop()
      }

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
    const isEnterKey = event.key === 'Enter'
    if (isEnterKey) handleSendMessage()
  }

  return (
    <>
      {showEmojiKeyboard && (
        <Box pos="absolute" bottom="7rem" w="100%" aria-label="Teclado Emoji">
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
        borderTop="0.1rem solid"
        borderColor="borderColor"
      >
        <Input
          placeholder="Mensagem"
          bg="componentBgColor"
          color="black"
          border="none"
          borderRadius="1rem"
          p="2rem 1.5rem"
          fontSize="1.4rem"
          value={inputValue}
          onChange={(e) => setInputValue(e.currentTarget.value)}
          onKeyUp={handleKeyUp}
        />

        <Flex>
          <Button color="iconColor" bg="transparent">
            <Icon
              aria-label="Bot??o para abrir teclado de emojis"
              as={BsFillEmojiSmileFill}
              w="1.6rem"
              h="1.6rem"
              onClick={() => setShowEmojiKeyboard((prevState) => !prevState)}
            />
          </Button>

          <Button color="iconColor" bg="transparent">
            <Icon
              aria-label="Bot??o gravar audio"
              as={BsFillMicFill}
              w="1.6rem"
              h="1.6rem"
              color={listeningMic ? 'variants.darkBlue' : 'inherit'}
              onClick={handleListeningMic}
            />
          </Button>

          <Button
            bg="iconColor"
            color="white"
            borderRadius="50%"
            w="2.6rem"
            h="2.6rem"
            ml={2}
            _hover={{
              backgroundColor: 'lightBlue'
            }}
          >
            <Icon
              as={IoMdSend}
              w="1rem"
              h="1rem"
              bg="transparent"
              aria-label="Bot??o para enviar mensagem"
              onClick={handleSendMessage}
            />
          </Button>
        </Flex>
      </Flex>
    </>
  )
}

export default ChatKeyboard
