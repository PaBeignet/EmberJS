import Route from '@ember/routing/route';
import { service } from '@ember/service';
import { action, set } from '@ember/object';

export default class OrderRoute extends Route {
  @service store;

  model(params) {
    return this.store.findRecord('order', params.order_id, {
      include: 'user,orderdetails,orderdetails.product',
    });
  }

  setupController(controller, model) {
    controller.set('order', model);
  }

  @action
  save(idOrder, montant) {
    this.store.findRecord('order', idOrder).then((order) => {
      order.toPay = montant;
      order.status = 'prepared';
      order.save().then(() => {
        this.transitionTo('board');
      });
    });
  }
}
