import * as React from 'react';
import Wall from '../views/Wall/Wall';
import { Route, Switch } from 'react-router';
import Messages from '../views/Messages/Messages';
import Friends from '../views/Friends/Friends';
import Enter from '../views/Enter/Enter';

export default () => {
    return (
        <section>
            <Switch>
                <Route exact path="/enter" component={Enter} />
                <Route exact path="/" component={Wall} />
                <Route path="/messages" component={Messages} />
                <Route path="/friends" component={Friends} />
                <Route path="/people" component={Friends} />
            </Switch>
        </section>
    );
};