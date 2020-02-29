import React from 'react';
import { Form, Input } from 'antd';
import { UserOutlined } from '@ant-design/icons';

import { ShadowBlock, Button } from 'components';
import './Auth.scss';

const Auth = () => (
    <section className='auth'>
        <div className='auth-content'>
            <div className='auth-content__header'>
                <h2>Войти в чат</h2>
                <p>Пожалуйста, введите никнейм</p>
            </div>
            <ShadowBlock>
                <Form className="login-form">
                    <Form.Item>
                        <Input
                            prefix={<UserOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
                            size='large'
                            placeholder="Никнейм"
                        />
                    </Form.Item>
                    <Button type='primary' size='large'>Войти в чат</Button>
                </Form>
            </ShadowBlock>
        </div>
    </section>
);

export default Auth
