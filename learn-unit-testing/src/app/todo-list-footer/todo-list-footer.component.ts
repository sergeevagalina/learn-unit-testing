import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-todo-list-footer',
  templateUrl: './todo-list-footer.component.html',
  styleUrls: ['./todo-list-footer.component.scss']
})
export class TodoListFooterComponent {
  @Input()
  todoListExists = false;

  @Output()
  removeCompleted: EventEmitter<void> = new EventEmitter<void>();

  removeCompletedItems(): void {
    this.removeCompleted.emit();
  }
}
