import { Component, OnInit } from '@angular/core';
import { Item } from '../entities/item';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  items: Item[] = [];

  constructor() { }

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
