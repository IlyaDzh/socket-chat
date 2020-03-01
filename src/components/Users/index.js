import React from 'react';
import PropTypes from 'prop-types';
import { Input, Empty } from 'antd';

import { UsersItem } from 'components';
import './Users.scss';

const Users = ({ items, onSearch, inputValue }) => {
    return (
        <div className='users'>
            <div className='users__search'>
                <Input.Search
                    placeholder="Поиск среди пользователей"
                    onChange={e => onSearch(e.target.value)}
                    value={inputValue}
                />
            </div>
            <div className='users__items'>
                {
                    items.length
                        ? items.map(item => (
                            <UsersItem key={item.id} fullname={item.fullname} />
                        ))
                        : <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description="Никого нет в сети" />
                }
            </div>
        </div>
    )
}

Users.propTypes = {
    items: PropTypes.array,
    onSearch: PropTypes.func,
    value: PropTypes.string
}

export default Users;