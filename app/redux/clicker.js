import {Map} from 'immutable';

const initialState = Map({sum: 0})

const CLICKED = 'CLICKED';

export default function clicker(state = initialState, action = { increment: 1 }) {
  if (action.type === CLICKED) {
    return state.merge({sum: state.get('sum') + action.increment})
  }

  return state;
}

export function click(increment) {
  return { type: CLICKED, increment };
}
