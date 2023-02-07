import { Box } from '@chakra-ui/react'

import { ContactProps } from './Contact'

type StatusProps = Pick<ContactProps, 'status'>

const Status = ({ status }: StatusProps) => (
  <Box
    w="1.2rem"
    h="1.2rem"
    bg={
      status === 'offline'
        ? '#F83737'
        : 'linear-gradient(180deg, #33FF2F 0%, #7FFA9A 100%);'
    }
    borderRadius="50%"
    position="absolute"
    right="0"
  />
)

export default Status
