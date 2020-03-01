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
            <Users />
        </div>
    )
}

export default Sidebar;