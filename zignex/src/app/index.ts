import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { TodoListComponent } from './todo-list/todo-list.component';


// @dynamic
@NgModule({
  declarations: [AddTodoComponent, TodoListComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [AddTodoComponent, TodoListComponent],
})
export class SharedModule {}
