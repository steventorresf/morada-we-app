import styled from "styled-components";

export const PropertyTypeButtonWrapper = styled.div`
    background-color: #F3E5F5;
    border-radius: 10px;
    min-width: 150px;
    margin: 0 5px;
    display: flex;
    flex-direction: column;
    align-items: center;

    p{
        color: #4A148C;
    }
    &:hover{
        background-color: #4A148C;

        svg, p{
            color: #fff;
        }
    }
`

export const IconWrapper = styled.div`
    margin-top: 9px;

    svg{
        font-size: 1.8em;
        color: #4A148C;
    }
`