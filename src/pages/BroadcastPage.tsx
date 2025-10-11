import React, { useState } from 'react';
import { Layout, Menu, Card, Button, Avatar, Dropdown, message } from 'antd';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  VideoCameraOutlined,
  LinkOutlined,
  UserOutlined,
  LogoutOutlined
} from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const { Header, Sider, Content } = Layout;

const BroadcastPage: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [expandedCards, setExpandedCards] = useState<Record<string, boolean>>({});
  const navigate = useNavigate();
  
  // 比赛链接数据
  const matchLinks = [
    {
      title: '风险管理师项目',
      description: '山东省“技能兴鲁”职业技能大赛—第七届“百家能工”职业技能竞赛-风险管理师项目',
      url: 'https://meeting.tencent.com/dm/wFJDU4Fi7FLJ'
    },
    {
      title: '比赛',
      description: '点击查看比赛直播',
      url: 'a'
    },
    {
      title: '比赛',
      description: '点击查看比赛直播',
      url: 'b'
    }
  ];

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const handleLinkClick = (url: string) => {
    const newState: Record<string, boolean> = {};
    newState[url] = !expandedCards[url];
    setExpandedCards(newState);
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: <VideoCameraOutlined />,
              label: '比赛转播',
            },
          ]}
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
                <span style={{ marginLeft: 8 }}>当前用户</span>
              </div>
            </Dropdown>
          </div>
        </Header>
        <Content 
          style={{ 
            margin: '24px 16px', 
            padding: '24px', 
            background: '#fff',
            borderRadius: '8px',
            boxShadow: '0 1px 4px rgba(0, 0, 0, 0.1)'
          }}
          >
          <h2 style={{ fontSize: '24px', marginBottom: '24px', color: '#1890ff' }}>比赛转播</h2>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', 
            gap: 24,
            padding: '0 8px'
          }}>
            {matchLinks.map((link) => (
              <Card
                key={link.url}
                title={<div style={{ 
                  fontSize: '18px',
                  fontWeight: 500,
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis'
                }}>{link.title}</div>}
                extra={
                  <Button 
                    type="link" 
                    icon={<LinkOutlined />} 
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(link.url, '_blank');
                    }}
                    style={{ color: '#1890ff' }}
                  >
                    直接打开
                  </Button>
                }
                style={{ 
                  width: '100%',
                  borderRadius: '8px',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                  transition: 'all 0.3s ease',
                  height: expandedCards[link.url] ? '320px' : '180px',
                  overflow: 'hidden'
                }}
                hoverable
                onClick={() => handleLinkClick(link.url)}
              >
                <div style={{ 
                  height: expandedCards[link.url] ? 'auto' : 'calc(100% - 56px)',
                  overflow: 'hidden'
                }}>
                  <p style={{ 
                    color: '#666',
                    marginBottom: '12px',
                    display: '-webkit-box',
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden'
                  }}>{link.description}</p>
                </div>
                {expandedCards[link.url] && (
                  <div style={{ 
                    marginTop: '16px', 
                    padding: '12px', 
                    background: '#f5f9ff', 
                    borderRadius: '6px',
                    border: '1px solid #e6f7ff'
                  }}>
                    <p style={{ 
                      color: '#1890ff',
                      wordBreak: 'break-all',
                      marginBottom: '12px'
                    }}>直播链接: {link.url}</p>
                    <Button 
                      type="primary" 
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(link.url, '_blank');
                      }}
                      style={{ 
                        marginTop: '8px',
                        width: '100%'
                      }}
                    >
                      前往观看
                    </Button>
                  </div>
                )}
              </Card>
            ))}
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default BroadcastPage;