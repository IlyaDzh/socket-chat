import React from 'react';
import { Button, Input } from 'antd';
import { PaperClipOutlined, AudioOutlined, SendOutlined, SmileOutlined } from '@ant-design/icons';

import './ChatInput.scss';

const ChatInput = () => {
    return (
        <div className='chat-input'>
            <Button
                type="link"
                size="large"
                icon={<PaperClipOutlined style={{ fontSize: '22px' }} />}>
            </Button>
            <Button
                type="link"
                size="large"
                icon={<AudioOutlined style={{ fontSize: '22px' }} />}>
            </Button>
            <Input
                style={{ marginLeft: '5px' }}
                size="large"
                placeholder="Введите текст сообщения..."
                suffix={<SmileOutlined className='chat-input__suffix-icon' />}
            />
            <div className='chat-input__send'>
                <SendOutlined className='chat-input__send-icon' />
            </div>
        </div>
    )
}

export default ChatInput;