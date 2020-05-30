import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | clinician', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:clinician');
    assert.ok(route);
  });
});
