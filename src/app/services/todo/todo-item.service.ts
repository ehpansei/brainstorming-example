import { Injectable } from '@angular/core';
import { Item } from '../../entities/item';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoItemService {

  items: Item[] = [
    {
      id: 1,
      name: 'ITEM 1',
      description: 'item 1 description',
      done: false
    },
    {
      id: 2,
      name: 'ITEM 2',
      description: 'item 2 description',
      done: false
    },
    {
      id: 3,
      name: 'ITEM 3',
      description: 'item 3 description',
      done: false
    }
  ];

  constructor() {
  }

  create(item: Item) {
    // check last id and increment it
    item.id = this.items[this.items.length - 1].id + 1;

    this.items.push(item);
  }

  get(): Observable<Item[]> {
    return of(this.items);
  }

  view(id: number) {
    return of(this.items[id - 1]);
  }

  delete(id: number) {

  }
}
