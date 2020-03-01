import React, { useState } from 'react';
import { Button, Drawer } from 'antd';
import { TeamOutlined, SettingOutlined } from '@ant-design/icons';

import { Users } from 'containers';
import './Sidebar.scss';

const Sidebar = () => {
    const [visible, setVisible] = useState(false);

    return (
        <div className='chat-sidebar'>
            <div className='chat-sidebar__header'>
                <div>
                    <TeamOutlined style={{ fontSize: '16px' }} />
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
                    id: '6456357',
                    fullname: 'ilyadzh'
                },
                {
                    id: '9876951',
                    fullname: 'kristina367'
                },
                {
                    id: '312316437',
                    fullname: 'taya_s99'
                },
                {
                    id: '568842',
                    fullname: 'maksimiva1'
                },
                {
                    id: '7502103',
                    fullname: 'ilyadzh'
                },
                {
                    id: '90876037',
                    fullname: 'kristina367'
                },
                {
                    id: '620345201',
                    fullname: 'taya_s99'
                },
                {
                    id: '324623452',
                    fullname: 'maksimiva1'
                },
                {
                    id: '206456917',
                    fullname: 'ilyadzh'
                },
                {
                    id: '98788951',
                    fullname: 'kristina367'
                },
                {
                    id: '302236447',
                    fullname: 'taya_s99'
                }
            ]} />
        </div>
    )
}

export default Sidebar;