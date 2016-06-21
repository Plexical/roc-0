import {createStore, combineReducers} from 'redux';

export function storeFrom (reducer) {
  return createStore(reducer);
}
