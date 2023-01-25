import { BsThreeDotsVertical } from 'react-icons/bs'
import { IoIosArrowBack } from 'react-icons/io'

import Link from 'next/link'

import { Flex, Center, Icon, Text, Box } from '@chakra-ui/react'

export type ProfileProps = {
  name: string
  status: string
  photo?: string
}

const Profile = ({ name, status, photo }: ProfileProps) => {
  const defaultImgPath = 'img/defaultProfile.jpg'

  return (
    <Flex
      alignItems="center"
      justifyContent="space-around"
      h="10rem"
      w="100%"
      p="2rem"
      gap="3rem"
      bg="#FDFEFF"
    >
      <Link href="/">
        <Center
          as="button"
          aria-label="Icone de uma seta para a esquerda"
          w="3.2rem"
          h="3.2rem"
          bg="#EDF3F5"
          borderRadius="50%"
        >
          <Icon as={IoIosArrowBack} w="1.6rem" h="1.6rem" color="#005683" />
        </Center>
      </Link>

      <Flex gap="1.6rem">
        <Box
          role="img"
          aria-label="Foto do usuario"
          backgroundImage={photo ?? defaultImgPath}
          bgPos="center"
          bgSize="cover"
          bgRepeat="no-repeat"
          w="5.6rem"
          h="5.6rem"
          borderRadius="50%"
        />

        <Flex flexDir="column" aria-label="Informacoes do usuario">
          <Text color="#0A0A0A" fontSize="2rem" fontWeight="bold" mb="0.2rem">
            {name}
          </Text>
          <Text color="rgba(10, 10, 10, 0.5)" fontSize="1.3rem">
            {status}
          </Text>
        </Flex>
      </Flex>

      <Center as="button" aria-label="Menu" w="3.2rem" h="3.2rem">
        <Icon as={BsThreeDotsVertical} w="1.6rem" h="1.6rem" color="#005683" />
      </Center>
    </Flex>
  )
}

export default Profile
