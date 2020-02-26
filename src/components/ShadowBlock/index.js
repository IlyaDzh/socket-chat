import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './ShadowBlock.scss';

const ShadowBlock = ({ children, className }) => (
    <div className={classNames('block', className)}>{children}</div>
);

ShadowBlock.propTypes = {
    className: PropTypes.string
}

export default ShadowBlock