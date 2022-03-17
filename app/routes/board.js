import Abstractroute from './abstractroute';
import RSVP from 'rsvp';
import { service } from '@ember/service';

export default class BoardRoute extends Abstractroute {
  @service store;
  @service userAuth;
  model() {
    let user = this.userAuth.user;
    if (user) {
      return RSVP.hash({
        orders: this.store.query('order', {
          filter: { idEmployee: user.id },
          include: 'orderdetails',
        }),
        employee: user,
      });
    }
  }
}
