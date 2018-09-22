import { Injectable  } from '@angular/core'
import { Action } from '@ngrx/store'
import { Item } from './../models/item.model'

export const ADD_ITEM      = '[ITEM] Add'
export const REMOVE_ITEM   = '[ITEM] Remove'

export class AddItem implements Action {
  readonly type = ADD_ITEM

  constructor(public payload: Tutorial) {}
}

export class RemoveItem implements Action {
  readonly type = REMOVE_ITEM

  constructor(public payload: number) {}
}

export type Actions = AddItem | RemoveItem
