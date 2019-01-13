import { RSAA } from 'redux-api-middleware';
import { createReducer } from 'helpers/reducer';
import { LOCATION_CHANGE } from 'connected-react-router';
import { List } from 'immutable';
import { API } from 'const/api';

export const searchShow = term => {
  return (dispatch, getState) => {
    return dispatch({
      [RSAA]: {
        endpoint: `${API}/search/shows?q=${term}`,
        method: 'GET',
        types: ['REQUEST_SEARCH', 'SUCCESS_SEARCH', 'FAILURE_SEARCH'],
      },
    });
  };
};

const initialState = {
  loading: false,
  initialLoad: true,
  items: new List(),
};

export const actions = {
  searchShow,
};

const reducers = {
  REQUEST_SEARCH: state => ({
    ...state,
    initialLoad: false,
    items: new List(),
    loading: true,
  }),
  SUCCESS_SEARCH: (state, payload) => ({
    ...state,
    items: new List(payload),
    loading: false,
  }),
  FAILURE_SEARCH: state => ({
    ...state,
    items: new List(),
    loading: false,
  }),
  [LOCATION_CHANGE]: state => initialState,
};

export default createReducer(initialState, reducers);
