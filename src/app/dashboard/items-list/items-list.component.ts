import { Component, OnInit } from '@angular/core';
import { Item } from '../../entities/item';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css']
})
export class ItemsListComponent implements OnInit {

  items: Item[] = [];

  constructor() {
  }

  ngOnInit() {
    this.items = [
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
  }

}
