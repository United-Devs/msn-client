import React, { ReactNode } from 'react'

import { ThemeProvider } from '@chakra-ui/react'
import { render, RenderResult } from '@testing-library/react'
import theme from 'styles/theme'

export const renderWithTheme = (children: ReactNode): RenderResult =>
  render(<ThemeProvider theme={theme}>{children}</ThemeProvider>)
