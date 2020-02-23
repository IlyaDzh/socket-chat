import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames';

import './Message.scss';

const Message = ({ avatar, user, text, attachments, date, isMe }) => {
    return (
        <div className={classNames('message', { 'message--me': isMe, 'message--image': attachments && attachments.length === 1 })}>
            <div className='message-inner'>
                <div className='message-user'>
                    <div className='message-user__avatar'>
                        <img src={avatar} alt={`Avatar ${user}`} />
                    </div>
                    <div className='message-user__date'>{date}</div>
                </div>
                <div className='message-content'>
                    <div className='message-content__name'>
                        {user}
                    </div>
                    {text && <div className='message-content__bubble'><p>{text}</p></div>}
                    <div className='message-content__attachments'>
                        {
                            attachments && attachments.map((item, index) => (
                                <div className='message-content__attachments-item' key={index}>
                                    <img src={item.url} alt={item.filename} />
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

Message.propTypes = {
    avatar: PropTypes.string,
    user: PropTypes.string,
    text: PropTypes.string,
    attachments: PropTypes.array,
    date: PropTypes.string,
    isMe: PropTypes.bool
}

export default Message
