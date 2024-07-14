//引入antd的组件库
import { Form, Input,Checkbox, Button,Typography } from "antd";
import { useHistory } from 'react-router-dom';
//引入useState勾子函数
import React, { useState } from "react";

const { Title } = Typography;

const Login = () => {
  //定义useState的state变量
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);

  const history = useHistory();
  //定义登录函数
  const handleSubmit = (values) => {
    values.preventDefault();
    console.log('Username:', username,'Password:', password);
   
  };
  const goToRegister = () => {
    history.push('/logout');
  };
  return (
    <div style={{ display: 'flex', justifyContent: 'center', height: '100vh', alignItems: 'center' }}>
      <Form onSubmit={handleSubmit} style={{ width: 300 }}>
        <Title level={3} style={{ textAlign: 'center', marginBottom: 20 }}>登录</Title>
        <Form.Item>
          <Input
            prefix={<i className="anticon anticon-user" />}
            placeholder="用户名"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Item>
        <Form.Item>
          <Input
            prefix={<i className="anticon anticon-lock" />}
            type="password"
            placeholder="密码"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Item>
        <Form.Item>
          <Checkbox checked={remember} onChange={(e) => setRemember(e.target.checked)}>
            记住我
          </Checkbox>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" block>
            登录
          </Button>
        </Form.Item>
        <Form.Item>
        <Button type="primary" onClick={goToRegister} block>
            没有账号，点击注册
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
 
export default Login;