import Controller from '@ember/controller';
import Ember from 'ember';
import TodoList from '../utils/todo-ember';

export default Controller.extend({

  tasks: Ember.computed.alias('model.tasks'),

  isEdited: false,

  actions: {

    addItem: function (type) {

      let newList = this.get('newList'),
        lists = this.get('lists'),
        listId = lists.length + 1,
        newTask = this.get('newTask'),
        tasks = this.get('tasks'),
        date = new Date().getTime();

      if (type == "list") {

        lists = {
          id: listId,
          type: 'list',
          attributes: {
            title: newList
          }
        };
        this.store.push({
          data: lists
        });
        TodoList.setList(lists);
        this.set('newList', null);

      } else {

        tasks = {
          id: date,
          type: 'task',
          attributes: {
            title: newTask
          }, relationships: {
            list: {
              data: {
                id: this.get('model.id'),
                type: 'list'
              }
            }
          }
        };
        this.store.push({
          data: tasks
        });
        TodoList.setTask(tasks);
        this.set('newTask', null);

      }
    },

    home: function () {
      this.transitionToRoute('/home');
    },

    insertNewline: function () {
      Ember.$('.ui.blue.button').click();
    }

  }
});
