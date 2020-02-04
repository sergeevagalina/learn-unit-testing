import { TestBed } from '@angular/core/testing';

import { TodoDataService } from './todo-data.service';
import { Todo } from '../todo/todo';

describe('TodoDataService', () => {
  let service: TodoDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.get(TodoDataService);
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });

  describe('#getTodoList', () => {
    it('should return an empty array by default', () => {
      expect(service.getTodoList()).toEqual([]);
    });

    it('should return whole todo list', () => {
      const todo1 = new Todo('item 1');
      const todo2 = new Todo('item 2');
      service.addTodoItem(todo1);
      service.addTodoItem(todo2);
      expect(service.getTodoList()).toEqual([todo1, todo2]);
    });
  });

  describe('#addTodoItem', () => {
    it('should add todo item', () => {
      const todo1 = new Todo('item 1');
      service.addTodoItem(todo1);
      expect(service.getTodoList()).toEqual([todo1]);
    });

    it('should add correct id to an added item', () => {
      const todo1 = new Todo('item 1');
      const todo2 = new Todo('item 2');
      service.addTodoItem(todo1);
      service.addTodoItem(todo2);
      expect(service.getTodoItemById(0)).toEqual(todo1);
      expect(service.getTodoItemById(1)).toEqual(todo2);
    });
  });

  describe('#removeTodoItem', () => {
    it('should remove todo by corresponding id', () => {
      const todo1 = new Todo('item 1');
      const todo2 = new Todo('item 2', true);
      service.addTodoItem(todo1);
      service.addTodoItem(todo2);
      expect(service.getTodoList()).toEqual([todo1, todo2]);
      service.removeTodoItem(0);
      expect(service.getTodoList()).toEqual([todo2]);
      service.removeTodoItem(1);
      expect(service.getTodoList()).toEqual([]);
    });

    it('should not remove anything if todo with corresponding id is not found', () => {
      const todo1 = new Todo('item 1');
      const todo2 = new Todo('item 2', true);
      service.addTodoItem(todo1);
      service.addTodoItem(todo2);
      expect(service.getTodoList()).toEqual([todo1, todo2]);
      service.removeTodoItem(2);
      expect(service.getTodoList()).toEqual([todo1, todo2]);
    });
  });

  describe('#removeAllCompletedItems', () => {
    it('should remove all completed items', () => {
      const todo1 = new Todo('item 1', true);
      const todo2 = new Todo('item 2', false);
      const todo3 = new Todo('item 3', true);
      const todo4 = new Todo('item 4');
      const todoList = [todo1, todo2, todo3, todo4];
      todoList.forEach((todo: Todo) => service.addTodoItem(todo));
      service.removeAllCompletedItems();
      expect(service.getTodoList()).toEqual([todo2, todo4]);
    });

    it('should not remove anything if all items are not completed', () => {
      const todo1 = new Todo('item 1');
      const todo2 = new Todo('item 2');
      const todo3 = new Todo('item 3');
      const todoList = [todo1, todo2, todo3];
      todoList.forEach((todo: Todo) => service.addTodoItem(todo));
      service.removeAllCompletedItems();
      expect(service.getTodoList()).toEqual(todoList);
    });
  });

  describe('#toggleCompletedStateOfTodoItem', () => {
    it('should change completed state of item to opposite', () => {
      const todo = new Todo('item1');
      service.addTodoItem(todo);
      service.toggleCompletedStateOfTodoItem(0);
      expect(service.getTodoItemById(0).isCompleted).toEqual(true);
      service.toggleCompletedStateOfTodoItem(0);
      expect(service.getTodoItemById(0).isCompleted).toEqual(false);
    });
  });
});
