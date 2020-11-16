import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css'],
})
export class AddTodoComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  @Output() addTodo = new EventEmitter();
  title = '';

  onAddTodo() {
    this.addTodo.emit(this.title);
  }
}
