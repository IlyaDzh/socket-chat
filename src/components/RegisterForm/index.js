import React from "react";
import { Link } from "react-router-dom";
import { Form, Input } from "antd";
import { MailOutlined, UserOutlined, LockOutlined } from "@ant-design/icons";

import { ShadowBlock, Button } from "components";
import { validateField } from "utils/helpers";

const RegisterForm = ({
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    isValid,
    isSubmitting
}) => (
    <>
        <div className="auth-content__header">
            <h2>Войти в чат</h2>
            <p>Для входа в чат необходимо зарегистрироваться</p>
        </div>
        <ShadowBlock>
            <Form onSubmit={handleSubmit} className="register-form">
                <Form.Item
                    validateStatus={validateField("email", touched, errors)}
                    help={!touched.email ? null : errors.email}
                    hasFeedback
                >
                    <Input
                        name="email"
                        prefix={
                            <MailOutlined style={{ color: "rgba(0,0,0,.25)" }} />
                        }
                        size="large"
                        placeholder="E-Mail"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                </Form.Item>
                <Form.Item
                    validateStatus={validateField("fullname", touched, errors)}
                    help={!touched.fullname ? null : errors.fullname}
                    hasFeedback
                >
                    <Input
                        name="fullname"
                        prefix={
                            <UserOutlined style={{ color: "rgba(0,0,0,.25)" }} />
                        }
                        size="large"
                        placeholder="Ваше имя и фамилия"
                        value={values.fullname}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                </Form.Item>
                <Form.Item
                    validateStatus={validateField("password", touched, errors)}
                    help={!touched.password ? null : errors.password}
                    hasFeedback
                >
                    <Input
                        name="password"
                        prefix={
                            <LockOutlined style={{ color: "rgba(0,0,0,.25)" }} />
                        }
                        size="large"
                        type="password"
                        placeholder="Повторите пароль"
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                </Form.Item>
                <Form.Item
                    validateStatus={validateField("password_2", touched, errors)}
                    help={!touched.password_2 ? null : errors.password_2}
                    hasFeedback
                >
                    <Input
                        name="password_2"
                        prefix={
                            <LockOutlined style={{ color: "rgba(0,0,0,.25)" }} />
                        }
                        size="large"
                        type="password"
                        placeholder="Пароль"
                        value={values.password_2}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                </Form.Item>
                <Form.Item>
                    {isSubmitting && !isValid && <span>Ошибка!</span>}
                    <Button
                        disabled={isSubmitting}
                        onClick={handleSubmit}
                        type="primary"
                        size="large"
                    >
                        Зарегистрироваться
                    </Button>
                </Form.Item>
                <Link className="auth__register-link" to="/signin">
                    Войти в аккаунт
                </Link>
            </Form>
        </ShadowBlock>
    </>
);

export default RegisterForm;
