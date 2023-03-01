import { IoIosArrowBack } from 'react-icons/io'

import Link from 'next/link'

import { Flex, Center, Icon, Text, Avatar, Heading } from '@chakra-ui/react'

import Status from './Status'

export type UserInfoProps = {
  name: string
  status: string
  photo?: string
}

const UserInfo = ({ name, status, photo }: UserInfoProps) => {
  const defaultImgPath = 'img/defaultProfile.jpg'

  return (
    <Flex
      justifyContent="flex-start"
      p="2.4rem 2.6rem"
      alignItems="center"
      bg="bgColor"
      gap="3rem"
      borderBottom="0.1rem solid"
      borderColor="borderColor"
    >
      <Link href="/list">
        <Center
          as="button"
          aria-label="Icone de uma seta para a esquerda"
          bg="componentBgColor"
          w="3.2rem"
          h="3.2rem"
          borderRadius="50%"
        >
          <Icon as={IoIosArrowBack} w="1.6rem" h="1.6rem" color="iconColor" />
        </Center>
      </Link>

      <Flex gap="1.4rem" alignItems="center">
        <Flex position="relative">
          <Avatar
            w="5.6rem"
            h="5.6rem"
            name={name}
            src={photo ?? defaultImgPath}
          />

          <Status status={status} />
        </Flex>

        <Flex gap="0.4rem" color="black" flexDir="column">
          <Heading
            fontSize="1.6rem"
            color="textColor"
            fontWeight={700}
            lineHeight="2.4rem"
          >
            {name}
          </Heading>
          <Text
            fontSize="1.2rem"
            color="textColor"
            lineHeight="2rem"
            opacity="0.5"
          >
            {status}
          </Text>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default UserInfo
