import Route from '@ember/routing/route';
import { service } from '@ember/service';
import { action, set } from '@ember/object';

export default class CategoriesUpdateRoute extends Route {
  @service store;
  @service router;

  model(params) {
    return this.store.findRecord('category', params.category_id);
  }

  setupController(controller, model) {
    set(controller, 'route', this);
    let contact = JSON.parse(JSON.stringify(model));
    set(controller, 'category', contact);
  }

  @action save(c) {
    let model = this.modelFor(this.routeName);
    Object.assign(model, c);
    model.save().then(() => {
      this.router.transitionTo('categories');
    });
  }
}
