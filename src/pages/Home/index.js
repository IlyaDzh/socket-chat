import React from 'react';

import { Message } from 'components';
import './Home.scss';

const Home = () => {
    return (
        <section className='home'>
            <Message
                avatar='https://source.unsplash.com/collection/190727/1600x900&rnd=1'
                user='Maxim Sergeevich'
                text='Lorem ipsum dolor sit.'
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
                user='Ilya Dolzhenko'
                text='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae facere, nemo sapiente 
                quas perspiciatis laudantium'
                date={new Date()}
                isMe
            />
            <Message
                avatar='https://source.unsplash.com/collection/190727/1600x900&rnd=1'
                user='Maxim Sergeevich'
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
                user='Ilya Dolzhenko'
                audioSrc="https://notificationsounds.com/soundfiles/b5b41fac0361d157d9673ecb926af5ae/file-sounds-727-good-morning.mp3"
                date={new Date()}
                isMe
            />
            <Message
                avatar='https://source.unsplash.com/collection/190727/1600x900&rnd=1'
                user='Maxim Sergeevich'
                audioSrc="https://notificationsounds.com/soundfiles/b5b41fac0361d157d9673ecb926af5ae/file-sounds-727-good-morning.mp3"
                date={new Date()}
            />
        </section>
    )
}

export default Home