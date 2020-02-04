import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoListFooterComponent } from './todo-list-footer.component';
import { MatButtonModule } from '@angular/material/button';

describe('TodoListFooterComponent', () => {
  let component: TodoListFooterComponent;
  let fixture: ComponentFixture<TodoListFooterComponent>;
  let nativeEl: Element | HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoListFooterComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoListFooterComponent);
    component = fixture.componentInstance;
    nativeEl = fixture.debugElement.nativeElement;
    component.todoListExists = true;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('click on the remove completed button should call removeCompletedItems()', async(() => {
    spyOn(component, 'removeCompletedItems');
    const button = nativeEl.querySelector('button');
    button.click();

    fixture.whenStable().then(() => {
      expect(component.removeCompletedItems).toHaveBeenCalled();
    });
  }));
});
