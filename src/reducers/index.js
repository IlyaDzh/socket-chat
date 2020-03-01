import { combineReducers } from 'redux';

import messages from './messages';
import users from './users';

export default combineReducers({
    users,
    messages
});