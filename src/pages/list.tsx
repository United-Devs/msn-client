import { useState } from 'react'
import { BiChevronDown, BiChevronUp } from 'react-icons/bi'

import { Box, Collapse, Flex, Heading, Icon } from '@chakra-ui/react'
import Contact from 'components/Contact'
import MyProfile from 'components/MyProfile'
import { listActive, listOff } from 'mocks/list'

const List = () => {
  const [showOnline, setShowOnline] = useState(true)
  const [showOffline, setShowOffline] = useState(true)

  const handleToggleOnline = () => setShowOnline((prevState) => !prevState)
  const handleToggleOffline = () => setShowOffline((prevState) => !prevState)

  return (
    <Box backgroundColor="#f0f8ff" height="100vh">
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
            color="#0A0A0A"
          >
            online
            <Icon
              as={showOnline ? BiChevronUp : BiChevronDown}
              w={12}
              h={12}
              color="#005683"
            />
          </Heading>

          <Collapse in={showOnline}>
            {listActive.map((item) => (
              <Contact
                key={item.id}
                status={item.status}
                notification={item.notification}
                alert={item.alert}
                name={item.name}
                src={item.src}
                statusText={item.statusText}
                song={item.song}
              />
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
            color="#0A0A0A"
          >
            offline
            <Icon
              as={showOffline ? BiChevronUp : BiChevronDown}
              w={12}
              h={12}
              color="#005683"
            />
          </Heading>

          <Collapse in={showOffline}>
            {listOff.map((item) => (
              <Contact
                key={item.id}
                name={item.name}
                src={item.src}
                statusText={item.statusText}
                song={item.song}
              />
            ))}
          </Collapse>
        </Box>
      </Flex>
    </Box>
  )
}

export default List
