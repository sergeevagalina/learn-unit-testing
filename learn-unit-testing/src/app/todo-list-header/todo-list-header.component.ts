import { Component, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Todo } from '../todo/todo';

@Component({
  selector: 'app-todo-list-header',
  templateUrl: './todo-list-header.component.html',
  styleUrls: ['./todo-list-header.component.scss']
})
export class TodoListHeaderComponent {
  text = new FormControl('');

  @Output()
  add: EventEmitter<Todo> = new EventEmitter<Todo>();

  addTodoItem(): void {
    this.add.emit(new Todo(this.text.value));
    this.text.reset('');
  }

}
