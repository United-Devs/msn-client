import { defineStyleConfig, extendTheme } from '@chakra-ui/react'

const Button = defineStyleConfig({
  baseStyle: {
    background: 'transparent'
  }
})

const theme = extendTheme({
  components: {
    Button
  },
  styles: {
    global: {
      html: {
        fontSize: '62.5%'
      },
      body: {
        fontFamily:
          "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"
      }
    }
  }
})

export default theme
