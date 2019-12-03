import { Route, RouteProps } from 'react-router-dom';
import { connect } from 'react-redux';
import { storeType, history } from '../store';

type Props = ReturnType<typeof mapStateToProps> & RouteProps;

class AuthorizedRoute extends Route<Props> {
    constructor(props: Props) {
        if (!props.authenticated) {
            history.push("/enter")
        }
        super(props);
    }
}

function mapStateToProps(store: storeType) {
    return {
        authenticated: !!store.authReducer.accessToken
    }
}

export default connect(mapStateToProps)(AuthorizedRoute);