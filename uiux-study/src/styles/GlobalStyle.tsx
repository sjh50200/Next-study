import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';
import { media } from './theme';

export const GlobalStyle = createGlobalStyle`
  ${reset}
  body {
        margin: 0;
        padding: 0;
        font-size: 16px;

				${media.tablet} {
            font-size: 12px;
        }

        ${media.mobile} {
            font-size: 8px;
        }
	}
`;
