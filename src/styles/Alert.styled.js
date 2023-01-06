import styled from 'styled-components'

export const AlertContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 1.25rem;
  border-radius: 0.25rem;
  margin-bottom: 1rem;

  & > p {
    letter-spacing: 0.1rem;
    font-size: 0.7rem;
    text-transform: capitalize;
  }

  &.alert-danger {
    color: ${({ theme }) => theme.alert.danger.color};
    background: ${({ theme }) => theme.alert.danger.bg};
  }

  &.alert-success {
    color: ${({ theme }) => theme.alert.success.color};
    background: ${({ theme }) => theme.alert.success.bg};
  }
`
