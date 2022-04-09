import { createGlobalStyle} from "styled-components";
import styled from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    body{
        margin: 0;
        padding: 0;
        font-family: "Lato";
        font-weight: 600;
    }
`

export const SubTitle = styled.p`
    color: #ccc;
    font-size: 1.0em;
    text-transform: capitalize;
    margin: 0;
    margin-top: 3px;
`