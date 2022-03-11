import Route from '@ember/routing/route';
import { action } from '@ember/object';
import { service } from '@ember/service';

export default class CategoriesContactsAddRoute extends Route {
  @service store;
  @service router;

  model() {
    let cat = this.modelFor('categories.contacts');
    return { category: cat };
  }

  setupController(controller) {
    controller.set('save', this.save);
  }

  @action save(contact) {
    let c = this.store.createRecord('contact', contact);
    c.save().then(() => {
      this.router.transitionTo('categories.contacts');
    });
  }
}
