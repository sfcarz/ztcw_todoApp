// import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import signIn from './components/signIn';
import signUp from './components/signUp';
import Components from './components/component';
// import TodosPage from './pages/AddTodo'



const Main = () => (
    <Switch>
        <Route path="/signIn" component={signIn} />
        <Route path="/signUp" component={signUp} />
        <Route path="/component" component={Components} />
        {/* <Route path="/todo" component={TodosPage} /> */}
    </Switch>
)

export default Main;