import { IoIosArrowBack } from 'react-icons/io'

import Link from 'next/link'

import {
  Flex,
  Center,
  Icon,
  Text,
  Box,
  Avatar,
  Heading
} from '@chakra-ui/react'

export type ProfileProps = {
  name: string
  status: string
  photo?: string
}

const Profile = ({ name, status, photo }: ProfileProps) => {
  const defaultImgPath = 'img/defaultProfile.jpg'

  return (
    <>
      <Flex
        justifyContent="space-between"
        p="2.4rem 2.6rem"
        alignItems="center"
        bg="#FDFEFF"
        gap="0.8rem"
      >
        <Flex gap="1.4rem" alignItems="center">
          <Avatar
            w="5.6rem"
            h="5.6rem"
            name={name}
            src={photo ?? defaultImgPath}
          />

          <Flex gap="0.4rem" color="black" flexDir="column">
            <Heading
              fontSize="1.6rem"
              color="#0A0A0A"
              fontWeight={700}
              lineHeight="2.4rem"
            >
              {name}
            </Heading>
            <Text
              fontSize="1.2rem"
              color="rgba(10, 10, 10, 0.5)"
              lineHeight="2rem"
            >
              {status}
            </Text>
          </Flex>
        </Flex>

        <Link href="/">
          <Center
            as="button"
            aria-label="Icone de uma seta para a esquerda"
            bg="#EDF3F5"
            w="3.2rem"
            h="3.2rem"
            borderRadius="50%"
          >
            <Icon as={IoIosArrowBack} w="1.6rem" h="1.6rem" color="#005683" />
          </Center>
        </Link>
      </Flex>

      <Box
        w="100%"
        h="0.1rem"
        bg="rgba(218, 228, 232, 0.5)"
        borderRadius="1.6rem"
      />
    </>
  )
}

export default Profile
