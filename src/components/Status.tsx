import { Box } from '@chakra-ui/react'

import { ContactProps } from './Contact'

type StatusProps = Pick<ContactProps, 'status'>

const Status = ({ status }: StatusProps) => (
  <Box
    w="1.2rem"
    h="1.2rem"
    bg={status === 'offline' ? 'red' : 'greenDark'}
    borderRadius="50%"
    position="absolute"
    right="0"
  />
)

export default Status
