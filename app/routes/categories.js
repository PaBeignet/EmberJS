import Route from '@ember/routing/route';
import { service } from '@ember/service';
import Categories from '../classes/categories';

export default class CategoriesRoute extends Route {
  @service store;

  model() {
    return new Categories(this.store.findAll('categories'));
  }
}
