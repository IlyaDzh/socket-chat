const initialState = {
    items: [],
    isLoading: false
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case 'USERS:SET_ITEMS':
            return {
                ...state,
                items: payload,
                isLoading: false
            };
        case 'USERS:SET_IS_LOADING':
            return {
                ...state,
                isLoading: payload
            };
        default:
            return state;
    }
}