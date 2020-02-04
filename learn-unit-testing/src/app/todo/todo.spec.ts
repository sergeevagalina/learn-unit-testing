import { Todo } from './todo';

describe('Todo', () => {
  it('should create an instance', () => {
    expect(new Todo('item 1')).toBeTruthy();
  });

  it('isCompleted property should be false by default', () => {
    const todo = new Todo('item 1');
    expect(todo.isCompleted).toEqual(false);
  });
});
