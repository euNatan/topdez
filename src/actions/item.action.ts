import { Injectable  } from '@angular/core'
import { Action } from '@ngrx/store'
import { Item } from './../models/item.model'

export const ADD_ITEM      = '[ITEM] Add'
export const REMOVE_ITEM   = '[ITEM] Remove'
export const UPDATE_ITEM   = '[ITEM] Update'

export class AddItem implements Action {
  readonly type = ADD_ITEM

  constructor(public payload: Item) {}
}

export class RemoveItem implements Action {
  readonly type = REMOVE_ITEM

  constructor(public payload: number) {}
}

export class UpdateItem implements Action {
  readonly type = UPDATE_ITEM

  constructor(public payload: Item) {}
}

export type Actions = AddItem | RemoveItem
