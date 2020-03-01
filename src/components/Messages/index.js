import React from 'react';
import PropTypes from 'prop-types';
import { Empty } from 'antd';

import { Message } from 'components';
import './Messages.scss';

const Messages = ({ items }) => {
    return (
        items.length
            ? items.map((item, index) => (
                <Message
                    key={index}
                    avatar={item.avatar}
                    user={item.user}
                    text={item.text}
                    audioSrc={item.audioSrc}
                    attachments={item.attachments}
                    date={item.date}
                    isMe={item.isMe}
                />
            ))
            : <Empty description='Нет сообщений' />
    );
};

Messages.propTypes = {
    items: PropTypes.array
}

export default Messages;