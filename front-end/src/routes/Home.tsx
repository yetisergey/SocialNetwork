import * as React from 'react';
import Wall from '../views/Wall';
import { Route, Switch } from 'react-router';
import Messages from '../views/Messages';
import Friends from '../views/Friends';
import Enter from '../views/Enter';
import AuthorizedRoute from './AuthorizedRoute';

export default () => {
    return (
        <section>
            <Switch>
                <Route exact path="/enter" component={Enter} />
                <AuthorizedRoute exact path="/" component={Wall} />
                <AuthorizedRoute path="/messages" component={Messages} />
                <AuthorizedRoute path="/friends" component={Friends} />
                <AuthorizedRoute path="/people" component={Friends} />
            </Switch>
        </section>
    );
};