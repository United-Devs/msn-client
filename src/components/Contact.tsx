import { HiBellAlert } from 'react-icons/hi2'
import { MdMusicNote } from 'react-icons/md'

import { Avatar, Flex, Heading, Text, Icon } from '@chakra-ui/react'

type ContactProps = {
  name: string
  src: string
  status?: string
  song?: string
  notification?: number
  alert?: boolean
}

const Contact = ({
  name,
  src,
  status,
  song,
  notification,
  alert
}: ContactProps) => (
  <Flex
    p="16px 24px"
    border="1px solid rgba(216, 243, 255, 0.5)"
    justifyContent="space-between"
    alignItems="center"
    backgroundColor={notification ? '#D8F3FF' : '#fafeff'}
  >
    <Flex gap="9px">
      <Avatar w="48px" h="48px" name={name} src={src} />

      <Flex flexDir="column">
        <Heading
          fontWeight={500}
          fontSize="14px"
          lineHeight="22px"
          color="#0A0A0A"
        >
          {name}
        </Heading>
        <Text lineHeight="20px" color="rgba(10, 10, 10, 0.5)">
          {status && status}
        </Text>

        {song && (
          <Flex alignItems="center" gap="4px">
            <Icon as={MdMusicNote} w="18px" h="18px" color="#575a9b" />
            <Text lineHeight="20px" color="rgba(10, 10, 10, 0.5)">
              {song}
            </Text>
          </Flex>
        )}
      </Flex>
    </Flex>

    <Flex gap="8px">
      {notification && (
        <Text
          h="24px"
          p="2px 12px"
          bg="#3BB2EA"
          borderRadius="50px"
          color="#FDFEFF"
          fontWeight={600}
          fontSize="12px"
          lineHeight="20px"
        >
          {notification}
        </Text>
      )}

      {alert && (
        <Flex bg="#FF3A45" borderRadius="50%" p="4px">
          <Icon as={HiBellAlert} color="#fff" w="16px" h="16px" />
        </Flex>
      )}
    </Flex>
  </Flex>
)

export default Contact
