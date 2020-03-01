import { usersApi } from 'utils/api';

const actions = {
    setUsers: items => ({
        type: 'USERS:SET_ITEMS',
        payload: items
    }),
    fetchUsers: () => dispatch => {
        usersApi.getAll().then(({ data }) => {
            dispatch(actions.setUsers(data));
        });
    }
}

export default actions;