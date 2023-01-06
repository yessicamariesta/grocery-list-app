import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
   * {
      padding: 0;
      margin: 0;
      box-sizing: border-box;
   }

   body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      line-height: 1.5;
      font-size: 0.875rem;
      background-color: ${({ theme }) => theme.colors.grey10};
   }
`
