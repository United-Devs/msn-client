import { BiBell, BiMusic } from 'react-icons/bi'

import { Avatar, Flex, Heading, Text, Icon } from '@chakra-ui/react'

import Status from './Status'

export type ContactProps = {
  name: string
  src: string
  statusText?: string
  song?: string
  notification?: number
  alert?: boolean
  status?: string | undefined
}

const Contact = ({
  name,
  src,
  statusText,
  song,
  notification,
  alert,
  status
}: ContactProps) => (
  <Flex
    cursor="pointer"
    p="1.6rem 2.4rem"
    border="0.1rem solid rgba(216, 243, 255, 0.5)"
    justifyContent="space-between"
    alignItems="center"
    backgroundColor={notification ? '#D8F3FF' : '#fafeff'}
  >
    <Flex gap="0.9rem">
      <Flex position="relative">
        <Avatar w="4.8rem" h="4.8rem" name={name} src={src} />
        {status && <Status status={status} />}
      </Flex>

      <Flex flexDir="column">
        <Heading
          fontWeight={500}
          fontSize="1.4rem"
          lineHeight="2.2rem"
          color="#0A0A0A"
        >
          {name}
        </Heading>
        <Text lineHeight="2rem" color="rgba(10, 10, 10, 0.5)">
          {statusText && statusText}
        </Text>

        {song && (
          <Flex alignItems="center" gap="0.4rem">
            <Icon as={BiMusic} w="1.8rem" h="1.8rem" color="#575a9b" />
            <Text lineHeight="2rem" color="rgba(10, 10, 10, 0.5)">
              {song}
            </Text>
          </Flex>
        )}
      </Flex>
    </Flex>

    <Flex gap="0.8rem">
      {notification && (
        <Text
          h="2.4rem"
          p="0.2rem 1.2rem"
          bg="#3BB2EA"
          borderRadius="5rem"
          color="#FDFEFF"
          fontWeight={600}
          fontSize="1.2rem"
          lineHeight="2rem"
        >
          {notification}
        </Text>
      )}

      {alert && (
        <Flex bg="#FF3A45" borderRadius="50%" p="0.4rem">
          <Icon as={BiBell} color="#fff" w="1.6rem" h="1.6rem" />
        </Flex>
      )}
    </Flex>
  </Flex>
)

export default Contact
