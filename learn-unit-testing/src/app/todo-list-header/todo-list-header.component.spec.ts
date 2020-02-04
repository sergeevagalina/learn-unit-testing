import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoListHeaderComponent } from './todo-list-header.component';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Todo } from '../todo/todo';

describe('TodoListHeaderComponent', () => {
  let component: TodoListHeaderComponent;
  let fixture: ComponentFixture<TodoListHeaderComponent>;
  let nativeEl: Element | HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoListHeaderComponent ],
      imports: [
        MatIconModule,
        MatInputModule,
        MatFormFieldModule,
        ReactiveFormsModule,
        BrowserAnimationsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoListHeaderComponent);
    component = fixture.componentInstance;
    nativeEl = fixture.debugElement.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('raises the add event', () => {
    component.text.setValue('item 1');
    component.add.subscribe((newTodo: Todo) => expect(newTodo).toEqual(new Todo('item 1')));
    component.addTodoItem();
  });

  it('addTodoItem() should reset input field', () => {
    component.text.setValue('item 1');
    component.addTodoItem();
    expect(component.text.value).toBe('');
  });

  it('click on the add button should call addTodoItem()', async(() => {
    spyOn(component, 'addTodoItem');
    const button = nativeEl.querySelector('button');
    button.click();

    fixture.whenStable().then(() => {
      expect(component.addTodoItem).toHaveBeenCalled();
    });
  }));
});
