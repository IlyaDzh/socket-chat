import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import format from 'date-fns/format';

import { convertCurrentTime } from 'helpers';
import waveSvg from 'assets/wave.svg';
import waveMeSvg from 'assets/wave-me.svg';
import playSvg from 'assets/play.svg';
import playMeSvg from 'assets/play-me.svg';
import pauseSvg from 'assets/pause.svg';
import pauseMeSvg from 'assets/pause-me.svg';
import './Message.scss';

const getAvatar = avatar => {
    if (avatar)
        return avatar;
}

const getMessageTime = date => {
    return format(Date.parse(date), 'HH:mm');
}

const AudioMessage = ({ audioSrc, isMe }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const audioRef = useRef(null);

    useEffect(() => {
        audioRef.current.addEventListener('playing', () => setIsPlaying(true), false);
        audioRef.current.addEventListener('ended', () => {
            setIsPlaying(false);
            setProgress(0);
            setCurrentTime(0);
        }, false);
        audioRef.current.addEventListener('pause', () => setIsPlaying(false), false);
        audioRef.current.addEventListener('timeupdate', () => {
            const duration = (audioRef.current && audioRef.current.duration) || 0;
            setCurrentTime(audioRef.current.currentTime);
            setProgress(((audioRef.current.currentTime / duration) * 100) + (duration * 0.5));
        }, false);
    }, [])

    const togglePlaying = () => {
        setIsPlaying(!isPlaying);
        if (isPlaying)
            audioRef.current.pause();
        else
            audioRef.current.play();
    }

    return (
        <div className='message-content__bubble message-audio'>
            <audio ref={audioRef} src={audioSrc} preload='auto' />
            <div className='message-audio__progress' style={{ width: progress + '%' }}></div>
            <div className='message-audio__info' >
                <div className='message-audio__info-btn'>
                    <button onClick={togglePlaying}>
                        {
                            isPlaying
                                ? <img src={isMe ? pauseMeSvg : pauseSvg} alt='Pause svg' />
                                : <img src={isMe ? playMeSvg : playSvg} alt='Play svg' />
                        }
                    </button>
                </div>
                <div className='message-audio__info-wave'>
                    <img src={isMe ? waveMeSvg : waveSvg} alt='Wave svg' />
                </div>
                <span className='message-audio__info-duration'>{convertCurrentTime(currentTime)}</span>
            </div>
        </div>
    );
}

const Message = ({ avatar, user, text, audioSrc, attachments, date, isMe }) => {
    return (
        <div className={classNames('message', {
            'message--me': isMe,
            'message--image': !text && attachments && attachments.length === 1,
            'message--audio': audioSrc
        })}>
            <div className='message-inner'>
                <div className='message-user'>
                    <div className='message-user__avatar'>
                        <img src={getAvatar(avatar)} alt={`Avatar ${user}`} />
                    </div>
                    <div className='message-user__date'>
                        {getMessageTime(date)}
                    </div>
                </div>
                <div className='message-content'>
                    <div className='message-content__name'>
                        {user}
                    </div>
                    {text && <div className='message-content__bubble'><p>{text}</p></div>}
                    {audioSrc && <AudioMessage audioSrc={audioSrc} isMe={isMe} />}
                    {
                        attachments && (
                            <div className='message-content__attachments'>
                                {
                                    attachments.map((item, index) => (
                                        <div className='message-content__attachments-item' key={index}>
                                            <img src={item.url} alt={item.filename} />
                                        </div>
                                    ))
                                }
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

Message.propTypes = {
    avatar: PropTypes.string,
    user: PropTypes.string,
    text: PropTypes.string,
    audioSrc: PropTypes.string,
    attachments: PropTypes.array,
    date: PropTypes.string,
    isMe: PropTypes.bool
}

export default Message
