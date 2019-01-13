import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import title from './title';
import search from './search';

export default history =>
  combineReducers({
    router: connectRouter(history),
    title,
    search,
  });
