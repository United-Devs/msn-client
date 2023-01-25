import { Flex } from '@chakra-ui/react'

export type ChatMessageProps = {
  message: string
  isFriend?: boolean
}

const ChatMessage = ({ message, isFriend }: ChatMessageProps) => {
  return (
    <Flex
      alignSelf={isFriend ? 'start' : 'end'}
      alignItems="center"
      justifyContent="center"
      w="fit-content"
      h="fit-content"
      p="1rem"
      bg={isFriend ? '#fafeff' : '#128C7E'}
      color={isFriend ? 'black' : 'white'}
      borderRadius={
        isFriend ? '0 1.6rem 1.6rem 1.6rem' : '1.6rem 1.6rem 0 1.6rem'
      }
      fontWeight="semibold"
      fontSize="1.4rem"
      wordBreak="break-word"
    >
      {message}
    </Flex>
  )
}

export default ChatMessage
