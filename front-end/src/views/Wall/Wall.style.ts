import styled from "styled-components";

export const WallWrapper = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const WrapperForm = styled.div`
    display: flex;
    max-width: 500px;
    position: relative;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    align-items: center;
    flex-direction: column;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
`;

export const ProfileWrapper = styled.div`
    width: 100%;
`;

interface IAvatarWrapp {
    src: any;
}

export const AvatarWrapper = styled.div<IAvatarWrapp>`
    height: 150px;
    background-image: url(${props => props.src});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50% 50%;
    margin-bottom: 20px;
    background-color: #efefef;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const Icon = styled.img`
    cursor: pointer;
    width: 30px;
    display: block;
`;

export const NavWrapper = styled.div`
    padding: 15px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`

export const Name = styled.div`
    padding: 15px;
    font-size: 1.25em;
`;

export const Settings = styled.div``;

export const Label = styled.h1``
