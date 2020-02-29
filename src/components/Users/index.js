import React from 'react';
import PropTypes from 'prop-types';
import { Empty } from 'antd';

import { UsersItem } from 'components';

const Users = ({ items }) => {
    return (
        <div>
            {
                items.length
                    ? items.map(item => (
                        <UsersItem key={item.id} fullname={item.fullname} />
                    ))
                    : <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description="Никого нет в сети" />
            }
        </div>
    )
}

Users.propTypes = {
    items: PropTypes.array
}

export default Users;