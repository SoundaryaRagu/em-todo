import Route from '@ember/routing/route';
import TodoList from '../utils/todo-ember';

export default Route.extend({

  setupController: function (controller, model) {
    let lists = this.store.peekAll('list');
    controller.set('lists', lists);
    return this._super.apply(this, arguments);
    },

  model: function (data) {
    let listId = data.lid, listPost = this.store.peekRecord('list', data.lid);
    return listPost;
  }
});
