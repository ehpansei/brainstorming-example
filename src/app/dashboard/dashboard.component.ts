import { Component, OnInit } from '@angular/core';
import { Item } from '../entities/item';
import { TodoItemService } from '../services/todo/todo-item.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  items: Item[];

  constructor(private todoService: TodoItemService) {
  }

  ngOnInit() {
    this.index();
  }

  index() {
    this.todoService.get().subscribe(response => {
      this.items = response;
    });
  }

}
