import { FaCog } from 'react-icons/fa'

import { Avatar, Icon, Flex, Heading, Text, Box } from '@chakra-ui/react'

const MyProfile = () => (
  <>
    <Flex
      justifyContent="space-between"
      p="2.4rem 2.6rem"
      alignItems="center"
      bg="#FDFEFF"
      gap="0.8rem"
      // border="1px solid rgba(218, 228, 232, 0.5)"
      // borderRadius="16px"
    >
      <Flex gap="1.4rem" alignItems="center">
        <Avatar
          w="5.6rem"
          h="5.6rem"
          name="Milena Almeida"
          src="https://github.com/milealmeida.png"
        />

        <Flex gap="0.4rem" color="black" flexDir="column">
          <Heading
            fontSize="1.6rem"
            color="#0A0A0A"
            fontWeight={700}
            lineHeight="2.4rem"
          >
            Milena Almeida
          </Heading>
          <Text
            fontSize="1.2rem"
            color="rgba(10, 10, 10, 0.5)"
            lineHeight="2rem"
          >
            São tempos difíceis para as patricinhas
          </Text>
        </Flex>
      </Flex>

      <Flex>
        <Icon as={FaCog} w="2.4rem" h="2.4rem" color="#005683" />
      </Flex>
    </Flex>
    <Box
      w="100%"
      h="0.1rem"
      bg="rgba(218, 228, 232, 0.5)"
      borderRadius="1.6rem"
    />
  </>
)

export default MyProfile
