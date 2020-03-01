import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { usersActions } from 'actions';
import { Users as BaseUsers } from 'components';

const Users = ({ fetchUsers, items }) => {
    const [inputValue, setInputValue] = useState('');
    const [filtred, setFiltredItems] = useState(Array.from(items));

    useEffect(() => {
        if (!items.length) {
            fetchUsers();
        } else {
            setFiltredItems(items);
        }
    }, [items]);

    const onChangeInput = value => {
        setFiltredItems(
            items.filter(user => user.fullname.toLowerCase().indexOf(value.toLowerCase()) >= 0),
        );
        setInputValue(value);
    };

    return (
        <BaseUsers
            items={filtred}
            onSearch={onChangeInput}
            inputValue={inputValue}
        />
    );
};

export default connect(
    ({ users }) => users,
    usersActions
)(Users);