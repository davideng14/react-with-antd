import Genome from '../../containers/Genome';
import Login from '../../containers/Login';
import { Layout } from 'antd';

import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

const { Content } = Layout;

function Torre() {
  return (
    <Layout className="container">
        <div className="wrapper-container">
            <Content>
                <Router>
                    <Switch>
                        <Route path="/">
                            <Login/>
                        </Route>
                        <Route path="/genome">
                            <Genome />
                        </Route>
                    </Switch>
                </Router>
            </Content>
        </div>
    </Layout>
  );
}

export default Torre;
