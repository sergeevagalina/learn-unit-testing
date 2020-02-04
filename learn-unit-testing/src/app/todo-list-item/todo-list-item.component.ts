import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../todo/todo';

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.scss']
})
export class TodoListItemComponent {
  @Input()
  todo: Todo;

  @Output()
  remove: EventEmitter<number> = new EventEmitter<number>();

  @Output()
  toggleCompletedState: EventEmitter<number> = new EventEmitter<number>();

  removeTodoItem(): void {
    this.remove.emit(this.todo.id);
  }

  toggleCompletedStateOfTodoItem(): void {
    this.toggleCompletedState.emit(this.todo.id);
  }

}
