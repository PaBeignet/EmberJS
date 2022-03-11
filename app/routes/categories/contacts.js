import Route from '@ember/routing/route';
import { service } from '@ember/service';
import { action } from '@ember/object';

export default class CategoriesContactsRoute extends Route {
  @service store;

  model(params) {
    return this.store.findRecord('category', params.category_id);
  }

  setupController(controller, model) {
    controller.set('category', model.category);
    controller.set('datas', model.contacts);
  }

  willTransition() {
    this.model().reload();
  }

  @action delete(contact) {
    contact.deleteRecord();
  }

  @action cancelDeletion(contacts) {
    contacts.forEach((c) => {
      //Annulation de toutes les modifs dont la supp
      c.rollbackAttributes();
    });
  }

  @action confirmDeletion(contacts) {
    contacts.forEach((c) => {
      c.save();
    });
  }

  /*@action update(category, contact){

  }*/
}
