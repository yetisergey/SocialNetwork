import React from "react";
import { connect } from "react-redux";
import { storeType } from "../../store";
import Login from "./Login";
import { Wrapper, WrapperForm, Form, NavBarWrapper, NavBarButton, LogoWrapper, Logo, BackArrowWrapper } from "./Enter.style";
import Register from "./Register";
import logoSrc from "../../img/logo.png";
import arrowLeftSrc from "../../img/arrowLeft.png";

type IEnterProps = ReturnType<typeof mapStateToProps> & {};

interface IEnterState {
    loginView: boolean;
}

class Enter extends React.Component<IEnterProps, IEnterState> {
    constructor(props: IEnterProps) {
        super(props);
        this.state = {
            loginView: true
        }
    }

    openRegisterPage() {
        this.setState({ loginView: false });
    }

    openLoginPage() {
        this.setState({ loginView: true });
    }

    render() {
        const { loginView } = this.state;
        return (
            <Wrapper>
                <WrapperForm>
                    {
                        !loginView &&
                        <BackArrowWrapper onClick={() => this.openLoginPage()} src={arrowLeftSrc} />
                    }
                    <LogoWrapper>
                        <Logo src={logoSrc}></Logo>
                    </LogoWrapper>
                    <NavBarWrapper>
                        <NavBarButton active={loginView} onClick={() => this.openLoginPage()}>SIGN IN</NavBarButton>
                        <NavBarButton active={!loginView} onClick={() => this.openRegisterPage()}>SIGN UP</NavBarButton>
                    </NavBarWrapper>
                    <Form>
                        {
                            loginView ?
                                <Login></Login> :
                                <Register></Register>
                        }
                    </Form>
                </WrapperForm>
            </Wrapper>
        );
    }
}

const mapStateToProps = (state: storeType) => { return state.authReducer; };

export default connect(mapStateToProps)(Enter);