import React, { useState } from 'react';
import { Layout, Menu, Button, Avatar, Dropdown, message } from 'antd';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  VideoCameraOutlined,
  UserOutlined,
  LogoutOutlined
} from '@ant-design/icons';
import { useNavigate, Link } from 'react-router-dom';

const { Header, Sider } = Layout;

interface NavigationLayoutProps {
  children: React.ReactNode;
  menuItems?: Array<{
    key: string;
    icon: React.ReactNode;
    label: React.ReactNode;
  }>;
  defaultSelectedKey?: string;
}

const NavigationLayout: React.FC<NavigationLayoutProps> = ({
  children,
  menuItems = [
    {
      key: '1',
      icon: <VideoCameraOutlined />,
      label: <Link to='/'>比赛直播</Link>,
    }
  ],
  defaultSelectedKey = '1'
}) => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={[defaultSelectedKey]}
          items={menuItems}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: '#fff' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={toggleCollapsed}
              style={{ fontSize: '16px', width: 64, height: 64 }}
            />
            <Dropdown
              menu={{
                items: [
                  {
                    key: 'logout',
                    icon: <LogoutOutlined />,
                    label: '注销登录',
                    onClick: () => {
                      message.success('已成功退出系统');
                      navigate('/login');
                    }
                  }
                ]
              }}
              placement="bottomRight"
            >
              <div style={{ marginRight: 24, cursor: 'pointer' }}>
                <Avatar icon={<UserOutlined />} />
                <span style={{ marginLeft: 8 }}>管理员</span>
              </div>
            </Dropdown>
          </div>
        </Header>
        {children}
      </Layout>
    </Layout>
  );
};

export default NavigationLayout;