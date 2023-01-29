import { FaCog } from 'react-icons/fa'

import { Avatar, Icon, Flex, Heading, Text, Box } from '@chakra-ui/react'

const MyProfile = () => (
  <>
    <Flex
      justifyContent="space-between"
      p="24px 26px"
      alignItems="center"
      bg="#FDFEFF"
      gap="8px"
      // border="1px solid rgba(218, 228, 232, 0.5)"
      // borderRadius="16px"
    >
      <Flex gap="14px" alignItems="center">
        <Avatar
          w="56px"
          h="56px"
          name="Milena Almeida"
          src="https://github.com/milealmeida.png"
        />

        <Flex gap="4px" color="black" flexDir="column">
          <Heading
            fontSize="16px"
            color="#0A0A0A"
            fontWeight={700}
            lineHeight="24px"
          >
            Milena Almeida
          </Heading>
          <Text fontSize="12px" color="rgba(10, 10, 10, 0.5)" lineHeight="20px">
            São tempos difíceis para as patricinhas
          </Text>
        </Flex>
      </Flex>

      <Flex>
        <Icon as={FaCog} w="24px" h="24px" color="#005683" />
      </Flex>
    </Flex>
    <Box w="100%" h="1px" bg="rgba(218, 228, 232, 0.5)" borderRadius="16px" />
  </>
)

export default MyProfile
