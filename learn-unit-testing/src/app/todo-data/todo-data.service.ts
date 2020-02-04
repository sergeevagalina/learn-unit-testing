import { Injectable } from '@angular/core';
import { Todo } from '../todo/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {
  lastId = 0;
  todoList: Todo[] = [];

  getTodoList(): Todo[] {
    return this.todoList;
  }

  addTodoItem(todoToAdd: Todo): void {
    todoToAdd.id = this.lastId++;
    this.todoList.push(todoToAdd);
  }

  removeTodoItem(id: number): void {
    const index = this.todoList.findIndex((todo: Todo) => todo.id === id);
    if (index !== -1) {
      this.todoList.splice(index, 1);
    }
  }

  toggleCompletedStateOfTodoItem(id: number): void {
    const currentTodo = this.getTodoItemById(id);
    currentTodo.isCompleted = !currentTodo.isCompleted;
  }

  getTodoItemById(id: number): Todo {
    return this.todoList.find((todo: Todo) => todo.id === id);
  }

  removeAllCompletedItems(): void {
    this.todoList = this.todoList.filter((todo: Todo) => !todo.isCompleted);
  }
}
