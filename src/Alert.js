import React from 'react'
import { useEffect } from 'react'
import { AlertContainer } from './styles/Alert.styled'

export default function Alert({ type, msg, removeAlert, list }) {
  useEffect(() => {
    const timeout = setTimeout(() => {
      removeAlert()
    }, 3000)
    return () => clearTimeout(timeout)
  }, [list])

  return (
    <AlertContainer className={`alert-${type}`}>
      <p>{msg}</p>
    </AlertContainer>
  )
}
