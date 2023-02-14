import { defineStyleConfig, extendTheme } from '@chakra-ui/react'

const Button = defineStyleConfig({
  baseStyle: {
    background: 'transparent'
  }
})

const theme = extendTheme({
  colors: {
    bgList: '#f0f8ff',
    white: '#ffffff',
    black: '#000000',
    red: '#F83737',
    greenDark: '#33FF2F',
    bgColor: '#FDFEFF',
    darkPurple: '#575a9b',
    lightGray: '#e9f9ff',
    bgBlue: '#D8F3FF',
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
