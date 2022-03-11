import Route from '@ember/routing/route';
import { service } from '@ember/service';
import { action } from '@ember/object';
import Categories from "../classes/categories";

export default class CategoriesRoute extends Route {
  @service store;

  model() {
    return new Categories(this.store.findAll('category'));
  }

  /*afterModel(model, transition){
    this.store.findAll('contacts');
    transition.targetName==='categories.index';
  }*/

  @action add(name) {
    let c = this.store.createRecord('category', {
      nom: name,
    });
    c.save();
  }

  @action delete(category) {
    category.deleteRecord();
  }

  @action cancelDeletion(categories) {
    categories.forEach((c) => {
      //Annulation de toutes les modifs dont la supp
      c.rollbackAttributes();
    });
  }

  @action confirmDeletion(categories) {
    categories.forEach((c) => {
      c.save();
    });
  }
}
