import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin:0;
        padding: 0;
        box-sizing: border-box;
    }

    body, textarea, input, button, p, span {
        font-family: ${({ theme }) => theme.FontFamily.default};
    }

    body{
        background: ${({ theme }) => theme.Colors["gray-600"]};
    }
    
    #root{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;
