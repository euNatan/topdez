import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Item } from './../models/item.model';
import { AppState } from './../app.state';
import * as ItemActions from './../../actions/item.action'

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private store: Store<AppState>) { }

  addItem(name, rank) {
    this.store.dispatch(new ItemActions.AddItem({name: name, rank: rank}))
  }

  ngOnInit() {
  }

}
