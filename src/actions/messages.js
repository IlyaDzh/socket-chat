import { messagesApi } from 'utils/api';

const actions = {
    setMessages: items => ({
        type: 'MESSAGES:SET_ITEMS',
        payload: items
    }),
    addMessage: message => ({
        type: 'MESSAGES:ADD_MESSAGE',
        payload: message
    }),
    setIsLoading: bool => ({
        type: 'MESSAGES:SET_IS_LOADING',
        payload: bool
    }),
    fetchMessages: () => dispatch => {
        dispatch(actions.setIsLoading(true));
        messagesApi.getAll().then(({ data }) => {
            dispatch(actions.setMessages(data));
        }).catch(() => {
            dispatch(actions.setIsLoading(false));
        });
    }
}

export default actions;