import Route from '@ember/routing/route';
import { action } from '@ember/object';
import { service } from '@ember/service';

export default class CategoriesAddRoute extends Route {
  @service store;
  @service router;

  model() {
    return {};
  }

  setupController(controller) {
    controller.set('save', this.save);
  }

  @action save(category) {
    let c = this.store.createRecord('category', category);
    c.save().then(() => {
      this.router.transitionTo('categories');
    });
  }
}
