import React from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from './styles/Global'
import Content from './Content'

const theme = {
  colors: {
    primary1: 'hsl(205, 86%, 17%)',
    primary5: 'hsl(205, 78%, 60%)',
    primary8: 'hsl(205, 86%, 81%)',
    grey1: 'hsl(209, 61%, 16%)',
    grey5: 'hsl(210, 22%, 49%)',
    grey10: 'hsl(210, 36%, 96%)',
    greenLight: 'hsl(125, 71%, 66%)',
    greenDark: 'hsl(125, 67%, 44%)',
    redLight: 'hsl(360, 71%, 66%)',
    redDark: 'hsl(360, 67%, 44%)',
  },
  alert: {
    danger: {
      color: '#721c24',
      bg: '#f8d7da',
    },
    success: {
      color: '#155724',
      bg: '#d4edda',
    },
  },
  shadow: {
    light: '0 5px 15px rgba(0, 0, 0, 0.1)',
    dark: '0 5px 15px rgba(0, 0, 0, 0.2)',
  },
}

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Content />
      </>
    </ThemeProvider>
  )
}
