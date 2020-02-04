import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoListItemComponent } from './todo-list-item.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { Todo } from '../todo/todo';


describe('TodoListItemComponent', () => {
  let fixture: ComponentFixture<TodoListItemComponent>;
  let component: TodoListItemComponent;
  let nativeEl: Element | HTMLElement;
  let todo: Todo;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoListItemComponent ],
      imports: [
        MatCheckboxModule,
        MatIconModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoListItemComponent);
    component = fixture.componentInstance;
    nativeEl = fixture.debugElement.nativeElement;
    todo = new Todo('item 1');
    component.todo = todo;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('raises the remove event', () => {
    component.remove.subscribe((todoId: number) => expect(todoId).toBe(todo.id));
    component.removeTodoItem();
  });

  it('click on the delete button should call removeTodoItem()', async(() => {
    spyOn(component, 'removeTodoItem');
    const button = nativeEl.querySelector('button');
    button.click();

    fixture.whenStable().then(() => {
      expect(component.removeTodoItem).toHaveBeenCalled();
    });
  }));

  it('raises the toggleCompletedState event', () => {
    component.toggleCompletedState.subscribe((todoId: number) => expect(todoId).toBe(todo.id));
    component.toggleCompletedStateOfTodoItem();
  });

  it('click on the checkbox should call toggleCompletedStateOfTodoItem()', async(() => {
    spyOn(component, 'toggleCompletedStateOfTodoItem');
    const input = nativeEl.querySelector('mat-checkbox input') as HTMLInputElement;
    input.click();

    fixture.whenStable().then(() => {
      expect(component.toggleCompletedStateOfTodoItem).toHaveBeenCalled();
    });
  }));

  it('should display todo text', () => {
    expect(nativeEl.textContent).toContain(todo.text);
  });
});
