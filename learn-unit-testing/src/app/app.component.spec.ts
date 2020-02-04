import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { TodoListHeaderComponent } from './todo-list-header/todo-list-header.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoListFooterComponent } from './todo-list-footer/todo-list-footer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { TodoListItemComponent } from './todo-list-item/todo-list-item.component';
import { MatListModule } from '@angular/material/list';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { TodoDataService } from './todo-data/todo-data.service';
import { Todo } from './todo/todo';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let app: AppComponent;
  let todoDataService: TodoDataService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        TodoListHeaderComponent,
        TodoListComponent,
        TodoListFooterComponent,
        TodoListItemComponent
      ],
      providers: [TodoDataService],
      imports: [
        ReactiveFormsModule,
        MatIconModule,
        MatFormFieldModule,
        MatListModule,
        MatCheckboxModule
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.debugElement.componentInstance;
    todoDataService = fixture.debugElement.injector.get(TodoDataService);
  });

  it('should create', () => {
    expect(app).toBeTruthy();
  });

  describe('#service methods', () => {
    it('should call addTodoItem() of TodoDataService', () => {
      spyOn(todoDataService, 'addTodoItem');
      app.onAddTodoItem(new Todo('item 1'));
      expect(todoDataService.addTodoItem).toHaveBeenCalled();
    });

    it('should call removeTodoItem() of TodoDataService', () => {
      spyOn(todoDataService, 'removeTodoItem');
      app.onRemoveTodoItem(0);
      expect(todoDataService.removeTodoItem).toHaveBeenCalled();
    });

    it('should call toggleCompletedStateOfTodoItem() of TodoDataService', () => {
      spyOn(todoDataService, 'toggleCompletedStateOfTodoItem');
      app.onToggleCompletedStateOfTodoItem(0);
      expect(todoDataService.toggleCompletedStateOfTodoItem).toHaveBeenCalled();
    });

    it('should call removeAllCompletedItems() of TodoDataService', () => {
      spyOn(todoDataService, 'removeAllCompletedItems');
      app.onRemoveCompletedItems();
      expect(todoDataService.removeAllCompletedItems).toHaveBeenCalled();
    });

    it('should call getTodoList() of TodoDataService', () => {
      spyOn(todoDataService, 'getTodoList');
      const todoList = app.todoList;
      expect(todoDataService.getTodoList).toHaveBeenCalled();
    });
  });

  describe('#todoListExists', () => {
    it('should return false if todo list length equals 0', () => {
      spyOn(todoDataService, 'getTodoList').and.returnValue([]);
      expect(app.todoListExists).toEqual(false);
    });

    it('should return true if todo list length > 0', () => {
      spyOn(todoDataService, 'getTodoList').and.returnValue([new Todo('item 1')]);
      expect(app.todoListExists).toEqual(true);
    });
  });
});
