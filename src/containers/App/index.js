import React from 'react';
import Dashboard from '../../containers/Dashboard';
import Login from '../../containers/Login';
import { Layout } from 'antd';
import { AuthProvider } from './AuthContext';

import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

const { Content } = Layout;

function Torre() {
  return (
    <AuthProvider>
        <Layout className="container">
            <div className="wrapper-container">
                <Content>
                    <Router>
                        <Switch>
                            <Route path="/dashboard">
                                <Dashboard />
                            </Route>
                            <Route exact={true} path="/">
                                <Login/>
                            </Route>
                        </Switch>
                    </Router>
                </Content>
            </div>
        </Layout>
    </AuthProvider>
  );
}

export default Torre;
