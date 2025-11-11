import React, { useState } from 'react';
import { Card, Button, Divider } from 'antd';
import { LinkOutlined, VideoCameraOutlined } from '@ant-design/icons';
import NavigationLayout from '../components/NavigationLayout';
import { Link } from 'react-router-dom';

const RobotAppTechBroadcastPage: React.FC = () => {
  const [expandedCards, setExpandedCards] = useState<Record<string, boolean>>({});
  
  // 比赛链接数据
  const matchLinks = [
    {
      title: '服务机器人应用技术员项目开幕式',
      description: '山东省“技能兴鲁”职业技能大赛',
      description1:'山东省人工智能技术创新应用职业技能竞赛—服务机器人应用技术员项目开幕式直播',
      url: 'https://meeting.tencent.com/dm/UA9GDPfRTFfS',
      group:"1"
    },
    {
      title: '职工（教师）组A区',
      description: '山东省“技能兴鲁”职业技能大赛',
      description1:'山东省人工智能技术创新应用职业技能竞赛—服务机器人应用技术员项目职工（教师）组A区比赛直播',
      url: 'https://meeting.tencent.com/dm/397VyqJaBtcb',
      group:"2"
    },
    {
      title: '职工（教师）组B区',
      description: '山东省“技能兴鲁”职业技能大赛',
      description1:'山东省人工智能技术创新应用职业技能竞赛—服务机器人应用技术员项目职工（教师）组B区比赛直播',
      url: 'https://meeting.tencent.com/dm/SuvLVZORyVD3',
      group:"2"
    },
    {
      title: '职工（教师）组C区',
      description: '山东省“技能兴鲁”职业技能大赛',
      description1:'山东省人工智能技术创新应用职业技能竞赛—服务机器人应用技术员项目职工（教师）组C区比赛直播',
      url: 'https://meeting.tencent.com/dm/b9ljXCQ77uIP',
      group:"2"
    },
    {
      title: '学生组A区',
      description: '山东省“技能兴鲁”职业技能大赛',
      description1:'山东省人工智能技术创新应用职业技能竞赛—服务机器人应用技术员项目学生组A区比赛直播',
      url: 'https://meeting.tencent.com/dm/sCLLhg3Y71MC',
      group:"3"
    },
    {
      title: '学生组B区',
      description: '山东省“技能兴鲁”职业技能大赛',
      description1:'山东省人工智能技术创新应用职业技能竞赛—服务机器人应用技术员项目学生组B区比赛直播',
      url: 'https://meeting.tencent.com/dm/mk4ICC3wVELY',
      group:"3"
    },
    {
      title: '学生组C区',
      description: '山东省“技能兴鲁”职业技能大赛',
      description1:'山东省人工智能技术创新应用职业技能竞赛—服务机器人应用技术员项目学生组C区比赛直播',
      url: 'https://meeting.tencent.com/dm/bqVDxX81KdWZ',
      group:"3"
    },
    {
      title: '裁判现场',
      description: '山东省“技能兴鲁”职业技能大赛',
      description1:'山东省人工智能技术创新应用职业技能竞赛—服务机器人应用技术员项目裁判现场',
      url: 'https://meeting.tencent.com/dm/m0bskaBxzyF9',
      group:"4"
    }
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
          label: <Link to='/robotapptechbroadcast'>比赛直播</Link>,
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
          <h2 style={{ fontSize: '24px', marginBottom: '24px', color: '#1890ff' }}>山东省“技能兴鲁”职业技能大赛</h2>
          <h2 style={{ fontSize: '24px', marginBottom: '24px', color: '#1890ff' }}>山东省人工智能技术创新应用职业技能竞赛—服务机器人应用技术员项目</h2>
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
                groupTitle = '裁判组';
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
                        width: group === "1" ? '430px' : '100%',
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
                            前往观看
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

export default RobotAppTechBroadcastPage;