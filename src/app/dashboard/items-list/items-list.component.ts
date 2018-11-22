import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

// Entities
import { Item } from 'src/app/entities/item';
import { TodoItemService } from '../../services/todo/todo-item.service';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css']
})
export class ItemsListComponent implements OnInit {

  @Input() items: Item[];

  constructor(private router: Router, private todoService: TodoItemService) {
  }

  ngOnInit() {
  }

  view(item: Item) {
    this.router.navigate(['item-detail', item.id]);
  }

  onChange(event: any, item: Item) {
    const checked = event.checked;
    this.todoService.patch(item, 'done', checked);
  }

  onDelete(item: Item) {
    this.todoService.delete(item.id);
  }
}
