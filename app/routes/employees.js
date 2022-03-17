import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class EmployeesRoute extends Route {
  @service store;
  model() {
    return this.store.findAll('employee');
  }
}
