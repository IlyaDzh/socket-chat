import { usersApi } from "utils/api";
import { openNotification } from "utils/helpers";

const actions = {
    setUsers: items => ({
        type: "USERS:SET_ITEMS",
        payload: items
    }),
    setIsAuth: bool => ({
        type: "USERS:SET_IS_AUTH",
        payload: bool
    }),
    setUserData: data => ({
        type: "USERS:SET_DATA",
        payload: data
    }),
    setIsLoading: bool => ({
        type: "USERS:SET_IS_LOADING",
        payload: bool
    }),
    fetchUsers: () => dispatch => {
        dispatch(actions.setIsLoading(true));
        usersApi
            .getAll()
            .then(({ data }) => {
                dispatch(actions.setUsers(data));
            })
            .catch(() => {
                dispatch(actions.setIsLoading(false));
            });
    },
    fetchUserData: () => dispatch => {
        usersApi
            .getMe()
            .then(({ data }) => {
                dispatch(actions.setUserData(data));
            })
            .catch(err => {
                if (err.response.status === 403) {
                    dispatch(actions.setIsAuth(false));
                    delete window.localStorage.token;
                }
            });
    },
    fetchUserSignIn: postData => dispatch => {
        return usersApi
            .signIn(postData)
            .then(({ data }) => {
                const { token } = data;
                openNotification({
                    title: "Отлично!",
                    text: "Авторизация прошла успешно!",
                    type: "success"
                });
                window.axios.defaults.headers.common["token"] = token;
                window.localStorage["token"] = token;
                dispatch(actions.fetchUserData());
                dispatch(actions.setIsAuth(true));
                return data;
            })
            .catch(err => {
                openNotification({
                    title: "Ошибка при авторизации",
                    text: "Неверный логин или пароль",
                    type: "error"
                });
            });
    }
};

export default actions;
