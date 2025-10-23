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

const RobotAppTechBroadcastPage: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [expandedCards, setExpandedCards] = useState<Record<string, boolean>>({});
  const navigate = useNavigate();
  
  // 比赛链接数据
  const matchLinks = [
    {
      title: '服务机器人应用技术员赛项开幕式',
      description: '山东省“技能兴鲁”职业技能大赛——服务机器人应用技术员技能竞赛开幕式直播',
      url: 'https://meeting.tencent.com/dm/7R2X1Zik5cEF',
      group:"1"
    },
    {
      title: '职工（教师）组A区',
      description: '山东省“技能兴鲁”职业技能大赛——服务机器人应用技术员技能竞赛职工（教师）组A区比赛直播',
      url: 'https://meeting.tencent.com/dm/KVmFQ6oKUEiX',
      group:"2"
    },
    {
      title: '职工（教师）组B区',
      description: '山东省“技能兴鲁”职业技能大赛——服务机器人应用技术员技能竞赛职工（教师）组B区比赛直播',
      url: 'https://meeting.tencent.com/dm/UYUPgi4X0jEq',
      group:"2"
    },
    {
      title: '职工（教师）组C区',
      description: '山东省“技能兴鲁”职业技能大赛——服务机器人应用技术员技能竞赛职工（教师）组C区比赛直播',
      url: 'https://meeting.tencent.com/dm/2b9U7Bpm5DaT',
      group:"2"
    },
    {
      title: '学生组A区',
      description: '山东省“技能兴鲁”职业技能大赛——服务机器人应用技术员技能竞赛学生组A区比赛直播',
      url: 'https://meeting.tencent.com/dm/RlQF4eOullQE',
      group:"3"
    },
    {
      title: '学生组B区',
      description: '山东省“技能兴鲁”职业技能大赛——服务机器人应用技术员技能竞赛学生组B区比赛直播',
      url: 'https://meeting.tencent.com/dm/h153QXYgNCZr',
      group:"3"
    },
    {
      title: '学生组C区',
      description: '山东省“技能兴鲁”职业技能大赛——服务机器人应用技术员技能竞赛学生组C区比赛直播',
      url: 'https://meeting.tencent.com/dm/63K0QLkP6gQE',
      group:"3"
    },
    {
      title: '竞赛裁判现场',
      description: '山东省“技能兴鲁”职业技能大赛——服务机器人应用技术员技能竞赛裁判现场',
      url: 'https://meeting.tencent.com/dm/IHOPpPHWvsL8',
      group:"4"
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
              label: '比赛直播',
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
                <span style={{ marginLeft: 8 }}>管理员</span>
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
          <h2 style={{ fontSize: '24px', marginBottom: '24px', color: '#1890ff' }}>山东省“技能兴鲁”职业技能大赛——服务机器人应用技术员技能竞赛直播</h2>
          {['1', '2', '3', '4'].map((group) => {
            const groupLinks = matchLinks.filter(link => link.group === group);
            if (groupLinks.length === 0) return null;
            let groupTitle = '';
            switch (group) {
              case '1':
                groupTitle = '开幕式';
                break;
              case '2':
                groupTitle = '职工（教师）组';
                break;
              case '3':
                groupTitle = '学生组';
                break;
              case '4':
                groupTitle = '裁判现场';
                break;
              default:
                break;
              }

            return (
              <div key={group} style={{ marginBottom: '32px' }}>
                <div style={{ 
                  display: 'grid', 
                  gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', 
                  gap: 24,
                  padding: '0 8px'
                }}>
                  <h3 style={{ gridColumn: '1 / -1', color: '#333', marginBottom: '16px' }}>{groupTitle}</h3>
                  {groupLinks.map((link) => (
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
                        width: group === "1" ? '430px' : '100%',
                        borderRadius: '8px',
                        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                        transition: 'all 0.3s ease',
                        height: expandedCards[link.url] ? '250px' : '180px',
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
                          <Button 
                            type="primary" 
                            onClick={(e) => {
                              e.stopPropagation();
                              window.open(link.url, '_blank');
                            }}
                            style={{ 
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
              </div>
            )})}
        </Content>
      </Layout>
    </Layout>
  );
};

export default RobotAppTechBroadcastPage;