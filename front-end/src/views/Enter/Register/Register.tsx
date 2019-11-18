import React from "react";
import { Password, RegisterFormButtons, Wrapper, RegisterInput } from "./Register.style";
import { ButtonSquare } from "../../../components/Button";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { registerAction } from '../../../store/Auth/actions';
import { storeType, history } from "../../../store";
import { LargeLabel } from "../../../components/Label/Label";

type IRegisterProps = ReturnType<typeof mapStateToProps> &
    ReturnType<typeof mapDispatchToProps> & {};

interface IRegisterState {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}

class Register extends React.Component<IRegisterProps, IRegisterState> {
    constructor(props: IRegisterProps) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            password: ""
        }
    }

    componentWillReceiveProps(props: IRegisterProps) {
        if (!!props.accessToken) {
            history.push('/');
        }
    }

    tryRegister() {
        const { firstName, lastName, email, password } = this.state;
        const { registerAction } = this.props;
        registerAction(firstName, lastName, email, password);
    }

    setEmail(e: React.ChangeEvent<HTMLInputElement>) {
        this.setState({ email: e.target.value });
    }

    setFirstName(e: React.ChangeEvent<HTMLInputElement>) {
        this.setState({ firstName: e.target.value });
    }

    setLastName(e: React.ChangeEvent<HTMLInputElement>) {
        this.setState({ lastName: e.target.value });
    }

    setPassword(e: React.ChangeEvent<HTMLInputElement>) {
        this.setState({ password: e.target.value });
    }

    render() {
        return (
            <Wrapper>
                <LargeLabel>Register in SocialNetwork</LargeLabel>
                <br></br>
                <RegisterInput name="email" onChange={this.setEmail.bind(this)} ></RegisterInput>
                <Password type="password" onChange={this.setPassword.bind(this)} ></Password>
                <RegisterInput name="firstName" onChange={this.setFirstName.bind(this)} ></RegisterInput>
                <RegisterInput name="lastName" onChange={this.setLastName.bind(this)} ></RegisterInput>
                <RegisterFormButtons>
                    <ButtonSquare onClick={this.tryRegister.bind(this)}>Register</ButtonSquare>
                </RegisterFormButtons>
            </Wrapper>
        );
    }
}

const mapDispatchToProps = (dispatch: Dispatch) =>
    bindActionCreators(
        {
            registerAction: registerAction
        },
        dispatch
    );

const mapStateToProps = (state: storeType) => {
    return state.authReducer;
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);