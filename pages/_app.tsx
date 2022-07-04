import type { AppProps } from 'next/app';
import theme from 'src/commons/styles/theme';
import { ThemeProvider } from 'styled-components';
import '../styles/globals.css';

const app = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default app;
