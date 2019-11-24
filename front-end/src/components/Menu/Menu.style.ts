import styled from "styled-components";

export const MenuWrapper = styled.div`
    width: 80%;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: #ffffff;
`;

export const MenuButtonsWrapper = styled.div``

export const MenuButton = styled.div`
    cursor: pointer;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 40px;
    :hover
    {
        background-color: #f0f5f7;
    }
`

export const MenuIconButton = styled.img`
    width: auto;
    margin-right: 10px;
    width: 30px;
`

export const Navbar = styled.div`
    padding: 15px;
    display: flex;
    flex-direction:row;
    align-items: center;
    justify-content: space-between;
`

export const NavbarButton = styled.img`
    width: 30px;
    height: auto;
    cursor: pointer;
`

export const PersonalInfo = styled.div`
    display: flex;
    align-items: center;
`

export const AvatarBlock = styled.img`
    padding: 20px;
    height: 100px;
    width: 100px;
`

export const FioBlock = styled.div``


