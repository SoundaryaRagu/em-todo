import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function () {
  this.route('home');
  this.route('list', {
    path: '/list/:lid'
  }, function() {
    this.route('task');
  });
});

export default Router;
