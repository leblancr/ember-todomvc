import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class Header extends Component {
  @service('todo-data') todos; // services/todo-data.js
  @action
  onKeyDown({ target, key }) {
    let text = target.value.trim();
    console.log(text);
    let hasValue = Boolean(text);

    if (key === 'Enter' && hasValue) {
      this.todos.add(text); // Instantiate Todo and add to todos list
      console.log(this.todos);
      target.value = '';
    }
  }
}
