import { useState } from 'react'
import { BiChevronDown, BiChevronUp } from 'react-icons/bi'

import Link from 'next/link'

import { Box, Collapse, Flex, Heading, Icon } from '@chakra-ui/react'
import Contact from 'components/Contact'
import MyProfile from 'components/MyProfile'
import { chatList } from 'mocks/list'

const List = () => {
  const [showOnline, setShowOnline] = useState(true)
  const [showOffline, setShowOffline] = useState(true)

  const handleToggleOnline = () => setShowOnline((prevState) => !prevState)
  const handleToggleOffline = () => setShowOffline((prevState) => !prevState)

  const listActive = chatList.filter((user) => user.status === 'online')
  const listOff = chatList.filter((user) => user.status === 'offline')

  return (
    <Box backgroundColor="bgList" height="100vh">
      <Flex
        flexDir="column"
        maxWidth="50rem"
        marginInline="auto"
        backgroundColor="white"
        h="100%"
      >
        <MyProfile />

        <Box>
          <Heading
            cursor="pointer"
            onClick={handleToggleOnline}
            display="flex"
            alignItems="center"
            gap="1.6rem"
            p="1.6rem 2.4rem"
            fontWeight={700}
            fontSize="1.6rem"
            lineHeight="2.4rem"
            color="textColor"
          >
            online
            <Icon
              as={showOnline ? BiChevronUp : BiChevronDown}
              w={12}
              h={12}
              color="iconColor"
            />
          </Heading>

          <Collapse in={showOnline}>
            {listActive.map((item) => (
              <Link href={`/chat/${item.id}`} key={item.id}>
                <Contact
                  status={item.status}
                  notification={item.notification}
                  alert={item.alert}
                  name={item.name}
                  src={item.src}
                  statusText={item.statusText}
                  song={item.song}
                />
              </Link>
            ))}
          </Collapse>
        </Box>

        <Box>
          <Heading
            cursor="pointer"
            onClick={handleToggleOffline}
            display="flex"
            alignItems="center"
            gap="1.6rem"
            p="1.6rem 2.4rem"
            fontWeight={700}
            fontSize="1.6rem"
            lineHeight="2.4rem"
            color="textColor"
          >
            offline
            <Icon
              as={showOffline ? BiChevronUp : BiChevronDown}
              w={12}
              h={12}
              color="iconColor"
            />
          </Heading>

          <Collapse in={showOffline}>
            {listOff.map((item) => (
              <Link href={`/chat/${item.id}`} key={item.id}>
                <Contact
                  key={item.id}
                  name={item.name}
                  src={item.src}
                  statusText={item.statusText}
                  song={item.song}
                />
              </Link>
            ))}
          </Collapse>
        </Box>
      </Flex>
    </Box>
  )
}

export default List
