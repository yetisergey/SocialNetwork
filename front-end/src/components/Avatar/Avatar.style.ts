import styled from "styled-components";

interface IAvatarWrapp {
    src: any;
}

export const AvatarWrapp = styled.div<IAvatarWrapp>`
height: 200px;
background-image: url(${props => props.src});
background-size: cover;
background-repeat: no-repeat;
background-position: 50% 50%;
margin-bottom: 20px;
`;