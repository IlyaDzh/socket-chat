import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';

import { messagesActions } from 'actions';
import { Messages as BaseMessages } from 'components';

const Messages = ({ fetchMessages, items, isLoading }) => {
    const messagesRef = useRef(null);

    useEffect(() => {
        if (!items.length) {
            fetchMessages();
        }
    }, [items]);

    useEffect(() => {
        messagesRef.current.parentNode.scrollTo(0, 999999);
    }, [items]);

    return (
        <BaseMessages
            messagesRef={messagesRef}
            items={items}
            isLoading={isLoading}
        />
    );
};

export default connect(
    ({ messages }) => ({
        items: messages.items,
        isLoading: messages.isLoading
    }),
    messagesActions
)(Messages);