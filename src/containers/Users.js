import React, { useState } from 'react';

import { Users as BaseUsers } from 'components';

const Users = ({ items }) => {
    const [inputValue, setInputValue] = useState('');
    const [filtred, setFiltredItems] = useState(Array.from(items));

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

export default Users;