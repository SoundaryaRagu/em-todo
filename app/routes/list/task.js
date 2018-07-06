import Route from '@ember/routing/route';
import TodoList from '../utils/todo-ember';

export default Route.extend({

  setupController: function (controller, model) {
    let tasks = this.store.peekAll('task');
    controller.set('tasks', tasks);
    return this._super.apply(this, arguments);
    },

  model: function (data) {
    let taskId = data.tid, taskPost = this.store.peekRecord('task', data.tid);
    return taskPost;
  }
});
