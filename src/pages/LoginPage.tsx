import React, { useState } from 'react';
import { Button, Form, Input, message } from 'antd';
import { useNavigate } from 'react-router-dom';

const LoginPage: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // 内置用户凭证
  const validCredentials = [
    { username: 'rmsadmin1', password: 'p@ssword123' },
    { username: 'ratadmin1', password: 'p@ssword456' },
    { username: 'admin1', password: 'admin123' },
    { username: 'admin2', password: 'admin456' }
  ];

  const onFinish = (values: { username: string; password: string }) => {
    setLoading(true);
    const { username, password } = values;
    let comModel = false;
    if(username === 'rmsadmin1' || username === 'admin1') {
          comModel = true;
        }else{
          comModel = false;
        }
    // 模拟登录验证
    setTimeout(() => {
      const isValid = validCredentials.some(
        cred => cred.username === username && cred.password === password
      );
      
      if (isValid && comModel) {
        message.success('登录成功!');
        navigate('/robotapptechbroadcast');
      } else if(isValid && !comModel){
          message.success('登录成功!');
          navigate('/rmsbroadcast');
      }else {
        message.error('用户名或密码错误');
      }
      setLoading(false);
    }, 500);
  };

  return (
    <div style={{ maxWidth: 400, margin: '100px auto', padding: 20 }}>
      <h1 style={{ textAlign: 'center', marginBottom: 24 }}>山东省“技能兴鲁”职业技能大赛</h1>
      <Form
        name="login"
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <Form.Item
          name="username"
          rules={[{ required: true, message: '请输入用户名!' }]}
        >
          <Input placeholder="用户名" />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[{ required: true, message: '请输入密码!' }]}
        >
          <Input.Password placeholder="密码" />
        </Form.Item>

        <Form.Item>
          <Button 
            type="primary" 
            htmlType="submit" 
            loading={loading}
            block
          >
            登录
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default LoginPage;