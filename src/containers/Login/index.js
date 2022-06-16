import { LayoutWithHeader } from '../Layout';
import './style.css';
import { Form, Row, Button, Input, Col } from 'antd';
import useAuth from '../App/AuthContext';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

function Login() {

    const { login, loading, error, user } = useAuth();
    const history = useHistory();

    const onLogin = values => {
        login(values.username, values.password);
    }

    useEffect(() => {
        console.log('user: ', user);
        if (user) {
            history.push('/dashboard');
        }
    }, [user, history]);

    return(
        <LayoutWithHeader>
            <Row gutter={[24, 16]}>
                <Col xs={{span: 20, offset: 2}} md={{span: 10, offset: 6}} >
                    <Form 
                        onFinish={onLogin} 
                        className="login"
                        labelCol={{ span: 8 }}
                        wrapperCol={{ span: 16 }}
                    >
                        <Form.Item
                            label="Username"
                            name="username"
                            rules={[{ required: true, message: 'Please input your username!' }]}
                        >
                            <Input size="large" placeholder="username" required/>
                        </Form.Item>
                        <Form.Item
                            label="Password"
                            name="password"
                            rules={[{ required: true, message: 'Please input your password!' }]}
                        >
                            <Input.Password size="large" placeholder="password" required/>
                        </Form.Item>
                        <Form.Item>
                            {loading ? 
                                <p>
                                    Loading...
                                </p>:
                                <Button type="primary" htmlType="submit">
                                    login
                                </Button>
                            }
                        </Form.Item>
                    </Form>
                    {error && <p> Invalid username or password</p>}
                </Col>
            </Row>
        </LayoutWithHeader>
    );
}

export default Login;