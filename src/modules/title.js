import { RSAA } from 'redux-api-middleware';
import { createReducer } from 'helpers/reducer';
import { LOCATION_CHANGE } from 'connected-react-router';
import { List } from 'immutable';
import { API } from 'const/api';

export const getShowEpisodes = id => {
  return (dispatch, getState) => {
    return dispatch({
      [RSAA]: {
        endpoint: `${API}shows/${id}/episodes`,
        method: 'GET',
        types: ['REQUEST_EPISODES', 'SUCCESS_EPISODES', 'FAILURE_EPISODES'],
      },
    });
  };
};

const initialState = {
  loading: false,
  items: new List(),
};

export const actions = {
  getShowEpisodes,
};

const reducers = {
  REQUEST_EPISODES: state => ({
    ...initialState,
    loading: true,
  }),
  SUCCESS_EPISODES: (state, payload) => ({
    ...state,
    items: new List(payload),
    loading: false,
  }),
  FAILURE_EPISODES: state => ({
    ...initialState,
    items: new List(),
    loading: false,
  }),
  [LOCATION_CHANGE]: state => initialState,
};

export default createReducer(initialState, reducers);
