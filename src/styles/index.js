import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

  *, *::after, *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
    --primary-color: ${({ theme }) => theme.colors.primaryColor};
    --secondary-color: ${({ theme }) => theme.colors.secondaryColor};
    --primary-dark: ${({ theme }) => theme.colors.primaryDark};
    --primary-light: ${({ theme }) => theme.colors.primaryLight};
    --secondary-dark: ${({ theme }) => theme.colors.secondaryDark};
    --secondary-light: ${({ theme }) => theme.colors.secondaryLight};
    --link: ${({ theme }) => theme.colors.link};
    --neutral: ${({ theme }) => theme.colors.neutral};
    --shadow: ${({ theme }) => theme.colors.shadow};
    --header-size: ${({ theme }) => theme.fontSizes.header};
    --sub-header-size: ${({ theme }) => theme.fontSizes.subHeader};
    --text-size: ${({ theme }) => theme.fontSizes.text};
    --header-weight: ${({ theme }) => theme.fontWeights.header};
    --sub-header-weight: ${({ theme }) => theme.fontWeights.subHeader};
    --text-weight: ${({ theme }) => theme.fontWeights.text};

    @media ${({ theme }) => theme.mediaQueries.smallest} {
      font-size: 55%;
    }

    @media ${({ theme }) => theme.mediaQueries.small} {
      font-size: 60%;
    }

    @media ${({ theme }) => theme.mediaQueries.medium} {
      font-size: 60%;
    }

    @media ${({ theme }) => theme.mediaQueries.large} {
      font-size: 60%;
    }

    @media ${({ theme }) => theme.mediaQueries.largest} {
      font-size: 60%;
    }
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    line-height: 1.6;
    overflow-x: hidden;
  }

  a, input, textarea, button, li {
    outline: none;
    text-decoration: none;
    font-family: inherit;
    list-style: none;
    background: none;
    border: none;
  }

  button {
    cursor: pointer;
  }
`;

export default GlobalStyles;
