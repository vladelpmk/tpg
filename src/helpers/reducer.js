export function createReducer(initialState, fnMap) {
  return (state, { type, payload }) => {
    const handler = fnMap[type];
    return handler
      ? handler(state || initialState, payload)
      : state || initialState;
  };
}
