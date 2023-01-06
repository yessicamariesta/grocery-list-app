import styled from 'styled-components'

export const GroceryItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.25rem 1rem;
  margin-bottom: 0.5rem;
  border-radius: 5px;
  text-transform: capitalize;
  transition: all 0.3s linear;

  &:hover {
    background-color: ${({ theme }) => theme.colors.grey10};
  }

  &:hover > p {
    color: ${({ theme }) => theme.colors.grey5};
  }

  & > p {
    color: ${({ theme }) => theme.colors.primary1};
    font-size: 16px;
    letter-spacing: 2px;
    margin-bottom: 0;
    transition: all 0.3s linear;
  }
`

export const BtnContainer = styled.div`
  display: flex;
  column-gap: 10px;

  & > button:first-child {
    font-size: 12px;
    border: none;
    background-color: transparent;
    color: ${({ theme }) => theme.colors.greenLight};
    transition: all 0.3s linear;
    cursor: pointer;
  }

  & > button:first-child:hover {
    color: ${({ theme }) => theme.colors.greenDark};
  }

  & > button:nth-child(2) {
    font-size: 12px;
    border: none;
    background-color: transparent;
    color: ${({ theme }) => theme.colors.redLight};
    transition: all 0.3s linear;
    cursor: pointer;
  }

  & > button:nth-child(2):hover {
    color: ${({ theme }) => theme.colors.redDark};
  }
`
