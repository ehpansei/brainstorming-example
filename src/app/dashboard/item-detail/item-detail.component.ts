import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Item } from '../../entities/item';
import { switchMap } from 'rxjs/operators';
import { TodoItemService } from '../../services/todo/todo-item.service';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {

  // the id of the item
  id: number;

  // the item to view
  item: Item;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private todoService: TodoItemService) {
  }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');

    this.todoService.view(this.id).subscribe( response => {
      this.item = response;
    });
  }

  back() {
    console.log('back');
  }
}
