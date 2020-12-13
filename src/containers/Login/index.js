import { useState } from 'react';
import { LayoutWithHeader } from '../Layout';
import './style.css';
import { Form, Row, Button, Input, Col } from 'antd';
import { fetchUserInformation } from '../../api';


function Login() {
    const [username, setUsername] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const onLogin = async event => {
        event.preventDefault(); 
        try{
            const userData = await fetchUserInformation({ username });
            console.log('fetching User ...', userData);
        } catch (error) {
            setErrorMessage(error.message);
        }

    }

    const onChangeUsername = event => setUsername(event.target.value);
    

    return(
        <LayoutWithHeader>
            <Row>
                <Col xs={{span: 20, offset: 2}} md={{span: 8, offset: 8}} >
                    <form onSubmit={onLogin} data-testid="login-form" className="login">
                        <h2>Your username:</h2>

                        {errorMessage && <p className={'error-message'}>{errorMessage}</p>}
                        <Form.Item>
                            <Input size="large" placeholder="user" value={username} onChange={onChangeUsername} required/>
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit">
                                Continue
                            </Button>
                        </Form.Item>
                        <Row>
                            
                        </Row>
                    </form>
                </Col>
            </Row>
        </LayoutWithHeader>
    );
}

export default Login;