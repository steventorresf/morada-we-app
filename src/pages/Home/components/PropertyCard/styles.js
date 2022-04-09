import styled from 'styled-components';

export const PropertyCardWrapper = styled.div`
    padding: 15px;
    display: flex;
    border: 1px solid #ccc;
    border-radius: 20px;
    box-shadow: 5px 2px 7px 0px rgba(194,194,194,0.75);
    -webkit-box-shadow: 5px 2px 7px 0px rgba(194,194,194,0.75);
    -moz-box-shadow: 5px 2px 7px 0px rgba(194,194,194,0.75);
    margin: 10px 0;
`;

export const PropertyImageWrapper = styled.div`
    flex: 30;
    border-radius: 20px;

    img{
        width: 100%;
        border-radius: 20px;
    }
`;

export const PropertyInfoWrapper = styled.div`
    flex: 70;
    margin-left: 10px;

    h3{
        margin: 0;
    }
`;