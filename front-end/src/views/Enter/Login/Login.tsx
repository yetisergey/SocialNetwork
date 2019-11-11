import React from "react";
import { LoginForm, Password, LoginFormButtons, Wrapper } from "./Login.style";
import { ButtonSquare } from "../../../components/Button";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { loginAction } from '../../../store/Auth/actions';
import { storeType, history } from "../../../store";
import { LoginInput } from "./Login.style";
import { LargeLabel } from "../../../components/Label/Label";

type ILoginProps = ReturnType<typeof mapStateToProps> &
    ReturnType<typeof mapDispatchToProps> & {};

interface ILoginState {
    login: string;
    password: string;
}

class Login extends React.Component<ILoginProps, ILoginState> {
    constructor(props: ILoginProps) {
        super(props);
        this.state = {
            login: "",
            password: ""
        }
    }

    componentWillReceiveProps(props: ILoginProps)
    {
        if (!!props.accessToken)
        {
            history.push('/');
        }
    }

    tryLogin() {
        const { login, password } = this.state;
        const { loginAction } = this.props;
        loginAction(login, password);
    }

    handleChangeLogin(e: React.ChangeEvent<HTMLInputElement>) {
        this.setState({ login: e.target.value });
    }

    handleChangePassword(e: React.ChangeEvent<HTMLInputElement>) {
        this.setState({ password: e.target.value });
    }

    render() {
        return (
            <Wrapper>
                <LoginForm>
                    <LargeLabel>Login in SocialNetwork</LargeLabel>
                    <br></br>
                    <LoginInput onChange={this.handleChangeLogin.bind(this)} ></LoginInput>
                    <Password type="password" onChange={this.handleChangePassword.bind(this)} ></Password>
                    <LoginFormButtons>
                        <ButtonSquare onClick={this.tryLogin.bind(this)}>Login</ButtonSquare>
                    </LoginFormButtons>
                </LoginForm>
            </Wrapper>
        );
    }
}

const mapDispatchToProps = (dispatch: Dispatch) =>
    bindActionCreators(
        {
            loginAction: loginAction
        },
        dispatch
    );

const mapStateToProps = (state: storeType) => { 
    return state.authReducer; 
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);