import { Component, EventEmitter, Output, Input } from '@angular/core';
import { Todo } from '../todo/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {
  @Input()
  todoList: Todo[];

  @Output()
  remove: EventEmitter<number> = new EventEmitter<number>();

  @Output()
  toggleCompletedState: EventEmitter<number> = new EventEmitter<number>();

  onRemoveTodoItem(id: number): void {
    this.remove.emit(id);
  }

  onToggleCompletedStateOfTodoItem(id: number): void {
    this.toggleCompletedState.emit(id);
  }
}
