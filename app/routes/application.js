import Route from '@ember/routing/route';

export default Route.extend({
  beforeModel() {

    this.store.push({
      data: JSON.parse(localStorage.getItem('lists'))
    });

    this.store.push({
      data: JSON.parse(localStorage.getItem('tasks'))
    });

  }
});
