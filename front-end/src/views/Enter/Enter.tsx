import React from "react";
import { connect } from "react-redux";
import { storeType } from "../../store";
import Login from "./Login";
import { Wrapper, WrapperForm, Form } from "./Enter.style";
import Register from "./Register";
import { ButtonSquare } from "../../components/Button";

type IEnterProps = ReturnType<typeof mapStateToProps> & {};

interface IEnterState {
    loginView: boolean;
    loginViewButtonText: string;
}

class Enter extends React.Component<IEnterProps, IEnterState> {
    constructor(props: IEnterProps) {
        super(props);
        this.state = {
            loginView: true,
            loginViewButtonText: "Register"
        }
    }

    openRegisterPage() {
        const { loginView } = this.state;
        if (loginView) {
            this.setState({
                loginView: !loginView,
                loginViewButtonText: "Login"
            });
        } else {
            this.setState({
                loginView: !loginView,
                loginViewButtonText: "Register"
            });
        }
    }

    render() {
        const { loginView, loginViewButtonText } = this.state;
        return (
            <Wrapper>
                <WrapperForm>
                    <Form>
                        {
                            loginView ? <Login></Login> : <Register></Register>
                        }
                        <ButtonSquare color="#23b023" hoverColor="#209b20" onClick={this.openRegisterPage.bind(this)}>
                            { loginViewButtonText }
                        </ButtonSquare>
                    </Form>
                </WrapperForm>
            </Wrapper>
        );
    }
}

const mapStateToProps = (state: storeType) => { return state.authReducer; };

export default connect(mapStateToProps)(Enter);