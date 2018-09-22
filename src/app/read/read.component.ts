import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { Item } from './../models/item.model';
import { AppState } from './../app.state';
import * as ItemActions from './../../actions/item.action'



@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {

  items: Observable<Item[]>;

  constructor(private store: Store<AppState>) {
    this.items = store.select('item')
  }

  delItem(index) {
    this.store.dispatch(new ItemActions.RemoveItem(index))
  }

  ngOnInit() {
  }

}
