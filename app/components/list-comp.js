import Component from '@ember/component';
import {observer} from '@ember/object';
import TodoList from '../utils/todo-ember';

export default Component.extend({
  store: Ember.inject.service(),

  isEdited: false,

  newName: observer('list.title', function () {
    let updatedValue = this.get('list.title'),
      updatedId = this.get('list.id'),
      updatedListId = this.get('list.list.id'),
      newlists = {
        id: updatedId,
        type: 'list',
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

      TodoList.updateList(updatedId, newlists);
      $('#inputBox').remove();
      $('#cl').remove();
  }),

  actions: {
    editList: function () {
      this.set('isEdited', 'true');
    },

    deleteList: function () {

      let listKeyId = this.get('list.id'),
        store = this.get('store');

      TodoList.deleteLists(listKeyId);

      store.findRecord('list', listKeyId).then(function (list) {
        store.unloadRecord(list);
      });
    }
  }
});
