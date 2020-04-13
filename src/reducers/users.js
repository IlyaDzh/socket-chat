const initialState = {
    items: [],
    data: null,
    isAuth: window.localStorage.token ? true : false,
    isLoading: false
};

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case "USERS:SET_ITEMS":
            return {
                ...state,
                items: payload,
                isLoading: false
            };
        case "USERS:SET_DATA":
            return {
                ...state,
                data: payload,
                isAuth: true
            };
        case "USERS:SET_IS_AUTH":
            return {
                ...state,
                isAuth: payload
            };
        case "USERS:SET_IS_LOADING":
            return {
                ...state,
                isLoading: payload
            };
        default:
            return state;
    }
};
