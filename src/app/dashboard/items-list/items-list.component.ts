import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

// Entities
import { Item } from 'src/app/entities/item';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css']
})
export class ItemsListComponent implements OnInit {

  @Input() items: Item[];

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  view(item: Item) {
    this.router.navigate(['item-detail', item.id]);
  }
}
