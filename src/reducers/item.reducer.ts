import { Action } from '@ngrx/store'
import { Item } from './../models/item.model'
import * as ItemActions from './../actions/item.action'

const initialState = [
  { name: 'League of Legends', rank: 2},
  { name: 'FIFA 18', rank: 9},
  { name: 'Mortal Kombat 3 Ultimate', rank: 8},
  { name: 'The King of Fighters', rank: 6},
  { name: 'Super Mario World', rank: 7},
  { name: 'Donkey Kong Country 3', rank: 5},
  { name: 'Sonic e Tails', rank: 4},
  { name: 'Street Fighter Alpha 2', rank: 1},
  { name: 'Top Gear 2000', rank: 10},
  { name: 'Pokemon Omega Ruby', rank: 3}
]

export function reducer(state = initialState, action: ItemActions.Actions) {
  switch(action.type) {
    case ItemActions.ADD_ITEM:
      return [...state, action.payload]

    case ItemActions.REMOVE_ITEM:
      state.splice(action.payload, 1)
      return state;

    case ItemActions.UPDATE_ITEM:
      state[action.payload.index].rank = action.payload.rank;
      return state.sort(function compare(a,b){if(a.rank > b.rank)return-1; if(a.rank < b.rank)return 1;});

    default:
      return state.sort(function compare(a,b){if(a.rank > b.rank)return-1; if(a.rank < b.rank)return 1;});
  }
}
