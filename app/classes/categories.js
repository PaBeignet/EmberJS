import { set } from '@ember/object';

export default class Categories {
  data;

  constructor(data) {
    set(this, 'data', data);
  }

  get categories() {
    return this.data.filterBy('isDeleted', false);
  }

  get deleteds() {
    return this.data.filterBy('isDeleted', true);
  }

  get deletedsCount() {
    return this.deleteds.length;
  }
}
