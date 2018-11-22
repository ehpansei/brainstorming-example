import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { TodoItemService } from '../../services/todo/todo-item.service';
import { Item } from '../../entities/item';

@Component({
  selector: 'app-create-item',
  templateUrl: './create-item.component.html',
  styleUrls: ['./create-item.component.css']
})
export class CreateItemComponent implements OnInit {
  // The form
  todoItemForm: FormGroup;

  // the Item to store
  item: Item;

  // Name control


  // Description control

  constructor(private fb: FormBuilder, private todoService: TodoItemService) {
  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.todoItemForm = this.fb.group({
      name: [
        '',
        [
          Validators.required,
          Validators.minLength(4)
          // todo implement noSpacesValidator
        ]
      ],
      description: [
        ''
      ]
    });
  }

  onCreate() {
    // prepare the item to be stored
    this.item = this.prepareTodoItem();

    this.todoService.create(this.item);
  }

  prepareTodoItem(): Item {
    const form = this.todoItemForm.value;

    const itemModel: Item = {
      name: form.name,
      description: form.description,
      done: false
    };

    return itemModel;
  }
}
