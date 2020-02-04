import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoListComponent } from './todo-list.component';
import { MatListModule } from '@angular/material/list';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { Component, Input } from '@angular/core';
import { TodoListItemComponent } from '../todo-list-item/todo-list-item.component';
import { Todo } from '../todo/todo';

@Component({selector: 'app-todo-list-item', template: ''})
class TodoListItemStubComponent implements Partial<TodoListItemComponent> {
  @Input() todo: Todo;
}

describe('TodoListComponent', () => {
  let component: TodoListComponent;
  let fixture: ComponentFixture<TodoListComponent>;
  let todoList: Todo[];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TodoListComponent,
        TodoListItemStubComponent
      ],
      imports: [
        MatListModule,
        MatCheckboxModule,
        MatIconModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoListComponent);
    component = fixture.componentInstance;
    todoList = [new Todo('item 1'), new Todo('item 2')];
    component.todoList = todoList;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('raises the remove event', () => {
    component.remove.subscribe((todoId: number) => expect(todoId).toBe(0));
    component.onRemoveTodoItem(0);
  });

  it('raises the toggleCompletedState event', () => {
    component.toggleCompletedState.subscribe((todoId: number) => expect(todoId).toBe(0));
    component.onToggleCompletedStateOfTodoItem(0);
  });
});
