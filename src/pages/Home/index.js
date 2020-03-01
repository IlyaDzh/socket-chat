import React from 'react';
import { Button, Input } from 'antd';
import { SoundOutlined, PaperClipOutlined } from '@ant-design/icons';

import { Sidebar, Messages, ChatInput } from 'components';
import './Home.scss';
import MessagesJSON from 'MessagesJSON.json';

const Home = () => {
    return (
        <section className='home'>
            <div className='chat'>
                <Sidebar />
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
                        <Messages items={MessagesJSON} />
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