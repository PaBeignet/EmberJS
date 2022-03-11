import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';

export default class CategoriesContactsController extends Controller {
  @tracked datas;

  get contacts() {
    return this.datas.filterBy('isDeleted', false);
  }

  get deleteds() {
    return this.datas.filterBy('isDeleted', true);
  }

  get deletedsCount() {
    return this.deleteds.length;
  }
}
