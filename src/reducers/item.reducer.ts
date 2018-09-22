import { Action } from '@ngrx/store'
import { Item } from './../models/item.model'
import * as ItemActions from './../actions/item.action'

const initialState: Item = {
  name: 'Naruto',
  rank: 0
}

export function reducer(state: Item[] = [initialState], action: ItemActions.Actions) {
  switch(action.type) {
    case ItemActions.ADD_ITEM:
      return [...state, action.payload];

    case ItemActions.REMOVE_ITEM:
      state.splice(action.payload, 1)
      return state;

    default:
      return state;
  }
}
