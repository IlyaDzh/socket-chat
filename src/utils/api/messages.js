import { axios } from 'core';

export default {
    getAll: () => axios.get('/messages')
};