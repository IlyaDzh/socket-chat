import { usersApi } from 'utils/api';

const actions = {
    setUsers: items => ({
        type: 'USERS:SET_ITEMS',
        payload: items
    }),
    setIsLoading: bool => ({
        type: 'USERS:SET_IS_LOADING',
        payload: bool
    }),
    fetchUsers: () => dispatch => {
        dispatch(actions.setIsLoading(true));
        usersApi.getAll().then(({ data }) => {
            dispatch(actions.setUsers(data));
        }).catch(() => {
            dispatch(actions.setIsLoading(false));
        });
    }
}

export default actions;