import Controller from '@ember/controller';

export default Controller.extend({

  actions: {

    home: function () {
      this.transitionToRoute('/home');
    }
  }

});
