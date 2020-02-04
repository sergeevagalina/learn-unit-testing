import { Component } from '@angular/core';
import { TodoDataService } from './todo-data/todo-data.service';
import { Todo } from './todo/todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private todoDataService: TodoDataService) {}

  get todoListExists(): boolean {
    return this.todoList.length > 0;
  }

  get todoList(): Todo[] {
    return this.todoDataService.getTodoList();
  }

  onAddTodoItem(todo: Todo): void {
    this.todoDataService.addTodoItem(todo);
  }

  onRemoveTodoItem(id: number): void {
    this.todoDataService.removeTodoItem(id);
  }

  onToggleCompletedStateOfTodoItem(id: number): void {
    this.todoDataService.toggleCompletedStateOfTodoItem(id);
  }

  onRemoveCompletedItems(): void {
    this.todoDataService.removeAllCompletedItems();
  }
}
