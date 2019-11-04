import * as React from 'react';
import Wall from '../views/Wall/Wall';
import { Route, Switch } from 'react-router';
import Messages from '../views/Messages/Messages';

export default () => {
    return (
        <section>
            <Switch>
                <Route exact path="/" component={Wall} />
                <Route path="/messages" component={Messages} />
            </Switch>
        </section>
    );
};