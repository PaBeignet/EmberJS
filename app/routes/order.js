import Route from '@ember/routing/route';
import { service } from '@ember/service';
import { action } from '@ember/object';

export default class OrderRoute extends Route {
  @service store;

  model(params) {
    return this.store.findRecord('order', params.order_id, {
      include: 'user,orderdetails,orderdetails.product',
    });
  }

  @action
  save(idOrder, montant) {
    this.store.findRecord('order', idOrder).then(function (order) {
      order.toPay = montant;
      order.status = 'prepared';
      order.save();
    });
    this.transitionTo('board');
  }
}
