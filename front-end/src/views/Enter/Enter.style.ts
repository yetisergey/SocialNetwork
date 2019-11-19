import styled from "styled-components";

export const Wrapper = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    background-color: #51186f;
    justify-content: center;
    color: #ffffff;
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

export const Form = styled.div`
    width: 90%;
    padding-top: 20px;
    flex: 1 1 auto;
`;

export const NavBarWrapper = styled.div`
    width: 100%;
    background-color: #9b23c8;
    display: flex;
    flex-direction: row;
`;

interface INavBarButton {
    active: boolean;
}

export const NavBarButton = styled.div`
    height: 35px;
    width: 100px;
    text-align: center;
    cursor: pointer;
    border-bottom: ${(props: INavBarButton) => props.active ? "3px solid #fb3b25" : ""}
`;

export const LogoWrapper = styled.div`
    text-align: center;
    background-color: #9b23c8;
    width: 100%;
    padding-bottom: 15px;
    padding-top: 5px;
`;

export const Logo = styled.img`
    max-height: 100px;
    width: auto;
`;

export const BackArrowWrapper = styled.img`
    position: absolute;
    cursor: pointer;
    top: 15px;
    left: 15px;
    width: 30px;
    height: auto;
`