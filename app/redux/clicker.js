import * as IM from 'immutable';

const initialState = IM.Map({sum: 0})

const CLICKED = 'CLICKED';

export default function clicker(state = initialState, action = { increment: 1 }) {
  let result;
  if (action.type === CLICKED) {
    result = state.merge({sum: state.get('sum') + action.increment})
  } else {
    result = IM.Map.isMap(state) && state || IM.Map(state);
  }

  return result;
}

export function click(increment) {
  return { type: CLICKED, increment };
}
