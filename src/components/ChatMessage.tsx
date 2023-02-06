import { Flex, Text } from '@chakra-ui/react'

export type ChatMessageProps = {
  message: string
  isFriend?: boolean
}

const ChatMessage = ({ message, isFriend }: ChatMessageProps) => {
  const customStyles = {
    messageAlign: isFriend ? 'start' : 'end',
    hourAlign: isFriend ? 'start' : 'end',
    background: isFriend ? 'bgColorSecondary' : 'variants.darkBlue',
    borderRadius: isFriend ? '0 1.6rem 1.6rem 1.6rem' : '1.6rem 1.6rem 0 1.6rem'
  }

  return (
    <>
      <Flex
        alignSelf={customStyles.messageAlign}
        alignItems="center"
        justifyContent="center"
        w="fit-content"
        h="fit-content"
        p="1rem"
        color="textColor"
        fontSize="1.4rem"
        wordBreak="break-word"
        bg={customStyles.background}
        borderRadius={customStyles.borderRadius}
      >
        {message}
      </Flex>

      <Text
        fontSize="1rem"
        color="textColor"
        opacity="0.4"
        alignSelf={customStyles.hourAlign}
      >
        19:12
      </Text>
    </>
  )
}

export default ChatMessage
