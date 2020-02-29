import React from 'react';
import PropTypes from 'prop-types';

import './UsersItem.scss';

const UsersItem = ({ fullname }) => {
    return (
        <div className='users-item'>
            <p>{fullname}</p>
        </div>
    )
}

UsersItem.propTypes = {
    fullname: PropTypes.string
}

export default UsersItem;