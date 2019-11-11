import { Route, RouteProps } from 'react-router-dom';
import { connect } from 'react-redux';
import { storeType, history } from '../store';

type Props = ReturnType<typeof mapStateToProps> & RouteProps;

class AuthorizedRoute extends Route<Props> {
    componentDidMount() {
        if (!this.props.authenticated) {
            history.push("/enter")
        }
    }
}

function mapStateToProps(store: storeType) {
    return {
        authenticated: !!store.authReducer.accessToken
    }
}

export default connect(mapStateToProps)(AuthorizedRoute);