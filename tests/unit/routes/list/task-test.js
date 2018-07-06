import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | list/task', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:list/task');
    assert.ok(route);
  });
});
