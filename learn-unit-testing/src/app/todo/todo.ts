export class Todo {
  id: number;
  text: string;
  isCompleted: boolean;

  constructor(text: string, isCompleted = false) {
    this.text = text;
    this.isCompleted = isCompleted;
  }
}
