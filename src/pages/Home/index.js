import React, { useState } from 'react';
import { Button, Input, Drawer } from 'antd';
import { TeamOutlined, SettingOutlined, SoundOutlined, PaperClipOutlined } from '@ant-design/icons';

import { Users, Message, ChatInput } from 'components';
import './Home.scss';

const Home = () => {
    const [visible, setVisible] = useState(false);

    return (
        <section className='home'>
            <div className='chat'>
                <div className='chat-sidebar'>
                    <div className='chat-sidebar__header'>
                        <div>
                            <TeamOutlined style={{ fontSize: '16px'}} />
                            <span>Список пользователей</span>
                        </div>
                        <Button
                            onClick={() => setVisible(true)}
                            type="link"
                            icon={<SettingOutlined style={{ fontSize: '16px' }} />}>
                        </Button>
                        <Drawer
                            title="Basic Drawer"
                            placement='left'
                            closable={false}
                            onClose={() => setVisible(false)}
                            visible={visible}
                        >
                            <p>Some contents...</p>
                            <p>Some contents...</p>
                            <p>Some contents...</p>
                        </Drawer>
                    </div>
                    <div className='chat-sidebar__search'>
                        <Input.Search
                            placeholder="Поиск среди пользователей"
                            onSearch={value => console.log(value)}
                        />
                    </div>
                    <div className='chat-sidebar__users'>
                        <Users items={[
                            {
                                id: '3123123123',
                                fullname: 'taya_s99'
                            },
                            {
                                id: '5686784',
                                fullname: 'maksimiva1'
                            },
                            {
                                id: '6456',
                                fullname: 'ilyadzh'
                            },
                            {
                                id: '9876',
                                fullname: 'kristina367'
                            }
                        ]} />
                    </div>
                </div>
                <div className='chat-messages'>
                    <div className='chat-messages__header'>
                        <Input.Search 
                            style={{marginRight: '5px'}} 
                            placeholder="Поиск по истории сообщений" 
                            onSearch={value => console.log(value)} 
                        />
                        <Button
                            type="link"
                            icon={<SoundOutlined style={{ fontSize: '20px' }} />}>
                        </Button>
                        <Button
                            type="link"
                            icon={<PaperClipOutlined style={{ fontSize: '20px' }} />}>
                        </Button>
                    </div>
                    <div className='chat-messages__content'>
                        <Message
                            avatar='https://source.unsplash.com/collection/190727/1600x900&rnd=1'
                            user='maksimiva1'
                            text='Lorem ipsum dolor sit.'
                            date={new Date()}
                        />
                        <Message
                            avatar='https://source.unsplash.com/collection/190727/1600x900&rnd=1'
                            user='maksimiva1'
                            text='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae facere.'
                            attachments={[
                                {
                                    filename: 'image.jpg',
                                    url: 'https://source.unsplash.com/collection/190727/1600x900&rnd=3'
                                },
                                {
                                    filename: 'image.jpg',
                                    url: 'https://source.unsplash.com/collection/190727/1600x900&rnd=4'
                                },
                                {
                                    filename: 'image.jpg',
                                    url: 'https://source.unsplash.com/collection/190727/1600x900&rnd=5'
                                }
                            ]}
                            date={new Date()}
                        />
                        <Message
                            avatar='https://source.unsplash.com/collection/190727/1600x900&rnd=2'
                            user='ilyadzh'
                            text='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae facere, nemo sapiente 
                            quas perspiciatis laudantium'
                            date={new Date()}
                            isMe
                        />
                        <Message
                            avatar='https://source.unsplash.com/collection/190727/1600x900&rnd=1'
                            user='maksimiva1'
                            attachments={[
                                {
                                    filename: 'image.jpg',
                                    url: 'https://source.unsplash.com/collection/190727/1600x900&rnd=9'
                                }
                            ]}
                            date={new Date()}
                        />
                        <Message
                            avatar='https://source.unsplash.com/collection/190727/1600x900&rnd=2'
                            user='ilyadzh'
                            text='Repudiandae facere, nemo sapiente quas perspiciatis laudantium'
                            attachments={[
                                {
                                    filename: 'image.jpg',
                                    url: 'https://source.unsplash.com/collection/190727/1600x900&rnd=91'
                                }
                            ]}
                            date={new Date()}
                            isMe
                        />
                        <Message
                            avatar='https://source.unsplash.com/collection/190727/1600x900&rnd=2'
                            user='ilyadzh'
                            text='Lorem ipsum dolor.'
                            date={new Date()}
                            isMe
                        />
                        <Message
                            avatar='https://source.unsplash.com/collection/190727/1600x900&rnd=1'
                            user='maksimiva1'
                            attachments={[
                                {
                                    filename: 'image.jpg',
                                    url: 'https://source.unsplash.com/collection/190727/1600x900&rnd=3'
                                },
                                {
                                    filename: 'image.jpg',
                                    url: 'https://source.unsplash.com/collection/190727/1600x900&rnd=46'
                                }
                            ]}
                            date={new Date()}
                        />
                    </div>
                    <div className='chat-messages__input'>
                        <ChatInput />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home;