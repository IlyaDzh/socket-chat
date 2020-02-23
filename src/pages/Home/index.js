import React from 'react'

import { Message } from 'components';
import './Home.scss'

const Home = () => {
    return (
        <section className='home'>
            <Message
                avatar='https://source.unsplash.com/collection/190727/1600x900&rnd=1'
                user='Maxim Sergeevich'
                text='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae facere, nemo sapiente 
                quas perspiciatis laudantium tempora similique quibusdam? Non, vitae!'
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
                date='15:26 PM'
            />
            <Message
                avatar='https://source.unsplash.com/collection/190727/1600x900&rnd=2'
                user='Ilya Dolzhenko'
                text='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae facere, nemo sapiente 
                quas perspiciatis laudantium'
                date='16:08 PM'
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
                date='16:37 PM'
            />
        </section>
    )
}

export default Home