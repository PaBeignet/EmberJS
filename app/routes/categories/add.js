import Route from '@ember/routing/route';
import { action } from '@ember/object';
import { service } from '@ember/service';

export default class CategoriesAddRoute extends Route {
  @service store;
  @service router;

  model() {
    return {};
  }

  @action save(category) {
    let c = this.store.createRecord('categories', category);
    c.save().then(() => {
      this.router.transitionTo('categories');
    });
  }
}
