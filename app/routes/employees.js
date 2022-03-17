import { service } from '@ember/service';
import Abstractroute from './abstractroute';

export default class EmployeesRoute extends Abstractroute {
  @service store;
  model() {
    return this.store.findAll('employee');
  }
}
