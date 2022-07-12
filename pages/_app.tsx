import type { AppProps } from 'next/app';
import GlobalStyle from 'src/commons/styles/GlobalStyle';
import theme from 'src/commons/styles/theme';
import { ThemeProvider } from 'styled-components';
import '../styles/globals.css';

const app = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default app;
