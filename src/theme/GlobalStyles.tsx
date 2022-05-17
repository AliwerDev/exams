import { createGlobalStyle } from "styled-components";
import { colors } from "./colors";

export const GlobalStyles = createGlobalStyle`
    ::-webkit-scrollbar {
        width: 10px;
        height: 10px;
    }
    ::-webkit-scrollbar-track {
        /* background-color: ; */
    }

    ::-webkit-scrollbar-thumb {
        background-color: ${colors.primary.light};
        box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    }
    html{
        scroll-behavior: smooth;
    }
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
    }

    .icon-button {
        border: none;
        outline: none;
        cursor: pointer;
        width: 30px;
        height: 30px;
        font-size: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        color: ${colors.primary.dark};
        transition: all 0.3s ease-in-out;
        &:hover {
            color: ${colors.error.light};
        }
    }
`;
