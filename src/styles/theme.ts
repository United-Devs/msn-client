import { defineStyleConfig, extendTheme } from '@chakra-ui/react'

const Button = defineStyleConfig({
  baseStyle: {
    background: 'transparent'
  }
})

const theme = extendTheme({
  colors: {
    bgColor: '#FDFEFF',
    bgColorSecondary: '#FAFEFF',
    textColor: '#0A0A0A',
    componentBgColor: '#EDF3F5',
    iconColor: '#005683',
    borderColor: '#dae4e87f',
    variants: {
      darkBlue: '#ABE0F5',
      lightBlue: '#3BB2EA'
    }
  },
  components: {
    Button
  },
  styles: {
    global: {
      html: {
        fontSize: '62.5%'
      },
      body: {
        fontFamily: 'Inter, sans-serif'
      }
    }
  }
})

export default theme
