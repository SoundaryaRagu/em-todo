import Component from '@ember/component';
import {observer} from '@ember/object';
import TodoList from '../utils/todo-ember';

export default Component.extend({
  store: Ember.inject.service(),

  isEdited: false,

  newName: observer('task.title', function () {

    let updatedValue = this.get('task.title'),
      updatedId = this.get('task.id'),
      updatedListId = this.get('task.list.id'),
      newtasks = {
        id: updatedId,
        type: 'task',
        attributes: {
          title: updatedValue
        }, relationships: {
          list: {
            data: {
              id: updatedListId,
              type: 'list'
            }
          }
        }
      };

    TodoList.updateTask(updatedId, newtasks);
    $('#inputBox').remove();
    $('#cl').remove();
  }),

  actions: {

    editTask: function () {
      this.set('isEdited', 'true');
    },

    deleteTask: function () {
      let taskKeyId = this.get('task.id'),
        store = this.get('store');

      TodoList.deleteTasks(taskKeyId);

      store.findRecord('task', taskKeyId).then(function (task) {
        store.unloadRecord(task);
      });
    }
  }
});
