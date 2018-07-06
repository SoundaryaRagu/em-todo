import Ember from 'ember';

export default Ember.Namespace.extend({

  setList: function (lists) {
    // localStorage.setItem('tasks', JSON.stringify(tasks));
    let listItems = JSON.parse(localStorage.getItem('lists'));
    listItems.pushObject(lists);
    localStorage.setItem('lists', JSON.stringify(listItems));
  },

  setTask: function (tasks) {
    // localStorage.setItem('tasks', JSON.stringify(tasks));
    let taskItems = JSON.parse(localStorage.getItem('tasks'));
    taskItems.pushObject(tasks);
    localStorage.setItem('tasks', JSON.stringify(taskItems));
  },

  deleteTasks: function (taskKeyId) {
    let taskItems = JSON.parse(localStorage.getItem('tasks')),
      tasks = JSON.parse(localStorage.tasks), index;

    for (index = 0; index < taskItems.length; index++) {

      if ((tasks[index].id) == taskKeyId) {
        tasks.splice(index, 1);
        localStorage.setItem('tasks', JSON.stringify(tasks));
        break;
      }

    }
    localStorage.setItem('tasks', JSON.stringify(tasks));
  },

  deleteLists: function (listKeyId) {
    let listItems = JSON.parse(localStorage.getItem('lists')),
      lists = JSON.parse(localStorage.lists), index;

    for (index = 0; index < listItems.length; index++) {

      if ((lists[index].id) == listKeyId) {
        lists.splice(index, 1);
        localStorage.setItem('lists', JSON.stringify(lists));
        break;
      }

    }
    localStorage.setItem('lists', JSON.stringify(lists));
  },

  updateTask: function (updatedId, newtasks) {
    let taskItems = JSON.parse(localStorage.getItem('tasks')),
      tasks = JSON.parse(localStorage.tasks), index;

    for (index = 0; index < taskItems.length; index++) {

      if ((tasks[index].id) == updatedId) {
        tasks[index] = newtasks;
        localStorage.setItem('tasks', JSON.stringify(tasks));
        break;
      }

    }
  },

  updateList: function (updatedId, newlists) {
    let listItems = JSON.parse(localStorage.getItem('lists')),
      lists = JSON.parse(localStorage.lists), index;

    for (index = 0; index < listItems.length; index++) {

      if ((lists[index].id) == updatedId) {
        lists[index] = newlists;
        localStorage.setItem('lists', JSON.stringify(lists));
        break;
      }

    }
  }

}).create();
