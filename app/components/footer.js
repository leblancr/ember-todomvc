import Component from '@glimmer/component';
import { inject as service } from '@ember/service';

const foo = 'ff'

export default class FooterComponent extends Component {
  @service('todo-data') todos;
}
