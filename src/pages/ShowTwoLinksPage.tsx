import React, { useState } from 'react';
import { Card, Button, Divider } from 'antd';
import { LinkOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import NavigationLayout from '../components/NavigationLayout';

const ShowTwoLinksPage: React.FC = () => {
  const [expandedCards, setExpandedCards] = useState<Record<string, boolean>>({});
  
  // 比赛链接数据
  const matchLinks = [
    {
      title: '课程一',
      description: '添加课程名描述',
      description1:'添加第二行课程描述',
      url: 'www.baidu.com',
      group:"1"
    },
    {
      title: '课程二',
      description: '添加课程名描述',
      description1:'添加第二行课程描述',
      url: 'www.google.com',
      group:"2"
    },
  ];

  const handleLinkClick = (url: string) => {
    const newState: Record<string, boolean> = {};
    newState[url] = !expandedCards[url];
    setExpandedCards(newState);
  };

  return (
    <NavigationLayout
      menuItems={[
        {
          key: '1',
          icon: <VideoCameraOutlined />,
          label: <Link to='/rmsbroadcast'>课程目录</Link>,
        },
      ]}
      defaultSelectedKey="1"
    >
      <div 
        style={{ 
          margin: '24px 16px', 
          padding: '24px', 
          background: '#fff',
          borderRadius: '8px',
          boxShadow: '0 1px 4px rgba(0, 0, 0, 0.1)'
        }}
      >
          <h2 style={{ fontSize: '24px', marginBottom: '24px', color: '#1890ff' }}>课程选择中继页面</h2>
          {['1', '2'].map((group) => {
            const groupLinks = matchLinks.filter(link => link.group === group);
            if (groupLinks.length === 0) return null;
            let groupTitle = '';
            switch (group) {
              case '1':
                groupTitle = '课程类型一';
                break;
              case '2':
                groupTitle = '课程类型二';
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
                  <Divider 
                    style={{ gridColumn: '1 / -1', color: '#333', marginBottom: '0px' }}
                    orientation="left"
                  >
                    {groupTitle}
                  </Divider>
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
                        width: group === "1" ? '420px' : '100%',
                        borderRadius: '8px',
                        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                        transition: 'all 0.3s ease',
                        height: expandedCards[link.url] ? '265px' : '180px',
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
                          marginTop: '0px',
                          marginBottom: '0px',
                          display: '-webkit-box',
                          WebkitLineClamp: 3,
                          WebkitBoxOrient: 'vertical',
                          overflow: 'hidden'
                        }}>{link.description}</p>
                        <p style={{ 
                          color: '#666',
                          marginTop: '0px',
                          display: '-webkit-box',
                          WebkitLineClamp: 3,
                          WebkitBoxOrient: 'vertical',
                          overflow: 'hidden'
                        }}>{link.description1}</p>
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
                            前往学习
                          </Button>
                        </div>
                      )}
                    </Card>
                  ))}
                </div>
              </div>
            )})}
      </div>
    </NavigationLayout>
  );
};

export default ShowTwoLinksPage;