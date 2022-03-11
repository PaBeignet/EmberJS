import Route from '@ember/routing/route';
import { action, set } from '@ember/object';
import { service } from '@ember/service';

export default class CategoriesContactsUpdateRoute extends Route {
  @service store;
  @service router;

  model(params) {
    return this.store.findRecord('contact', params.contact_id);
  }

  setupController(controller, model) {
    set(controller, 'route', this);
    let contact = JSON.parse(JSON.stringify(model));
    set(controller, 'contact', contact);
  }

  @action save(c) {
    let model = this.modelFor(this.routeName);
    Object.assign(model, c);
    model.save().then(() => {
      this.router.transitionTo('categories.contacts', model.get('category')); //TODO LA TRANSITION ELLE EST PAS BIEN
    });
  }
}
