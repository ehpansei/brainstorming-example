import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-item',
  templateUrl: './create-item.component.html',
  styleUrls: ['./create-item.component.css']
})
export class CreateItemComponent implements OnInit {
  // The form
  todoItemForm: FormGroup;


  // Name control


  // Description control

  constructor(private fb: FormBuilder) {
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
        '',
      ]
    });
  }

  prepareTodoItem() {

  }

}
