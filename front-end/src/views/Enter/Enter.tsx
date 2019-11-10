import React from "react";
import { connect } from "react-redux";
import { storeType } from "../../store";
import Login from "./Login/Login";
import { EnterWrappAbsolute } from "./Enter.style";

type IEnterProps = ReturnType<typeof mapStateToProps> & {};

class Enter extends React.Component<IEnterProps> {
    render() {
        return (
            <EnterWrappAbsolute>
                <Login></Login>
            </EnterWrappAbsolute>
        );
    }
}

const mapStateToProps = (state: storeType) => { return state.authReducer; };

export default connect(mapStateToProps)(Enter);