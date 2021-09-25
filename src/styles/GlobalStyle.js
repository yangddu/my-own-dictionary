import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *, *::before, *::after {
        box-sizing: border-box;
    }

    body {
        background: #fff;
        background-image: radial-gradient(#eee 20%, transparent 0), radial-gradient(#eee 20%, transparent 0);
        background-position: 20px 20px;
        background-size: 10px 10px;
        }
      
`;

export default GlobalStyle;