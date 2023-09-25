import { Button, Form, Input } from 'antd'
import React, { useCallback } from 'react'
import styles from './Login.module.scss';
import { isEmpty } from 'lodash';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { SET_USER } from './Login.reducer';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onFinish = useCallback((values) => {
    if (!isEmpty(values.username) && !isEmpty(values.password)) {
      dispatch({ type: SET_USER, payload: true, data: values })
      return navigate('/');
    }
  }, []);

  const onFinishFailed = useCallback(() => {
    dispatch({ type: SET_USER, payload: false })
  }, []);

  return (
    <div className={styles.container}>
      <h1>Please Login to continue</h1>
      <Form
        className={styles.form}
        layout='vertical'
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: 'Please input your username!',
            },
          ]}
        >
          <Input type='email' />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
        >
          <Button type="primary" htmlType="submit">
            Login
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default Login