import { messagesApi } from 'utils/api';

const actions = {
    setMessages: items => ({
        type: 'MESSAGES:SET_ITEMS',
        payload: items
    }),
    fetchMessages: () => dispatch => {
        messagesApi.getAll().then(({ data }) => {
            dispatch(actions.setMessages(data));
        });
    }
}

export default actions;