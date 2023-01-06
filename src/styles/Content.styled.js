import styled from 'styled-components'

export const SectionCenter = styled.div`
  max-width: 560px;
  width: 90vw;
  margin: 120px auto;
  background-color: #fff;
  box-shadow: ${({ theme }) => theme.shadow.light};
  padding: 30px;
  transition: all 0.3s linear;

  &:hover {
    box-shadow: ${({ theme }) => theme.shadow.dark};
  }
`

export const Form = styled.form`
  & > h3 {
    color: ${({ theme }) => theme.colors.primary1};
    font-size: 28px;
    text-transform: capitalize;
    letter-spacing: 2px;
    text-align: center;
    margin-bottom: 20px;
  }
`

export const FormControl = styled.div`
  display: flex;
  margin-bottom: 20px;

  & > input {
    width: 100%;
    font-family: inherit;
    font-size: 17px;
    background-color: ${({ theme }) => theme.colors.grey10};
    border: transparent;
    border-radius: 5px 0 0 5px;
    padding: 3px 20px 5px;
  }

  & > button {
    font-family: inherit;
    text-transform: capitalize;
    font-size: 15px;
    letter-spacing: 1px;
    padding: 0 15px;
    border: transparent;
    border-radius: 0 5px 5px 0;
    background-color: ${({ theme }) => theme.colors.primary8};
    transition: all 0.3s linear;
    cursor: pointer;
  }

  & > button:hover {
    background-color: ${({ theme }) => theme.colors.primary5};
    color: #fff;
  }
`

export const GroceryContainer = styled.div`
  margin-top: 2rem;

  & > button {
    display: grid;
    align-items: center;
    margin: 0 auto;
    color: ${({ theme }) => theme.colors.redLight};
    text-transform: capitalize;
    font-family: inherit;
    font-size: 15px;
    letter-spacing: 2px;
    background-color: transparent;
    border: none;
    transition: all 0.3s linear;
    cursor: pointer;
  }

  & > button:hover {
    color: ${({ theme }) => theme.colors.redDark};
  }
`
