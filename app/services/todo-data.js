import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

// Todo object class
class Todo {
  @tracked text = '';
  @tracked isCompleted = false;

  constructor(text) {
    this.text = text;
  }
}

// @tracked is like react state hooks, tracks state changes
export default class TodoDataService extends Service {
  @tracked todos = [];

  get all() {
    return this.todos;
  }

  get incomplete() {
    return this.todos.filter((todo) => !todo.isCompleted);
  }

  get todoCountIsOne() {
    return this.incomplete.length === 1;
  }

  get completed() {
    return this.todos.filter((todo) => todo.isCompleted);
  }

  @action
  add(text) {
    let newTodo = new Todo(text); // Instantiate and add to todos list

    this.todos = [...this.todos, newTodo];
  }

  @action
  clearCompleted() {
    this.todos = this.incomplete;
  }

  @action
  toggleCompletion(todo) {
    todo.isCompleted = !todo.isCompleted;
  }
}
