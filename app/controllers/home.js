import Controller from '@ember/controller';

export default Controller.extend({

  actions: {

    name: function () {
      this.transitionToRoute('/list/1');
    }
  }

});
