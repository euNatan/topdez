import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { Item } from './../models/item.model';
import { AppState } from './../app.state';
import { interval } from 'rxjs';
import * as ItemActions from './../../actions/item.action'



@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {

  items: Observable<Item[]>;
  selectedItem: Item;
  index = 0;

  onSelect(item: Item, index: index): void {
    this.selectedItem = item;
    this.index = index;
  }

  constructor(private store: Store<AppState>) {
    this.items = store.select('item')
    this.items
  }
  //REMOVE ITEM DA LISTA
  delItem(index) {
    this.store.dispatch(new ItemActions.RemoveItem(index))
  }

  //RECLASSIFICA ITEM
  updateItem(index, rank) {
    this.store.dispatch(new ItemActions.UpdateItem({index: index, rank: rank}))
  }

  ngOnInit() {
    //ATUALIZA RANK DE UM ITEM ALEATORIO A CADA 10 SEGUNDOS
    const secondsCounter = interval(10000);
    secondsCounter.subscribe(n =>

      var i = Math.floor(Math.random() * this.store.source._value.item.length)
      this.store.source._value.item[i].rank = Math.floor(Math.random() * 10);
      this.store.source._value.item.sort(function compare(a,b){
            if(a.rank > b.rank)return-1;
            if(a.rank < b.rank)return 1;
      });
    );
  }

}
