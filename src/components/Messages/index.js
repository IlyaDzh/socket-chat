import React from 'react';
import PropTypes from 'prop-types';
import { Empty, Spin } from 'antd';
import classNames from 'classnames'

import { Message } from 'components';
import './Messages.scss';

const Messages = ({ isLoading, messagesRef, items }) => {
    return (
        <div ref={messagesRef} className={classNames('messages', { 'messages--loading': isLoading })}>
            {
                isLoading &&
                    !items.length ? (
                        <Spin size='large' />
                    ) : items.length
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
            }
        </div>
    );
};

Messages.propTypes = {
    items: PropTypes.array
}

export default Messages;