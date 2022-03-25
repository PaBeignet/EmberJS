import Controller from '@ember/controller';

export default class OrderController extends Controller {

  get aPayer() {
    let sum = 0;
    this.order.orderdetails.forEach(function (detail) {
      if (detail.prepared) {
        sum += detail.amount;
      }
    });
    return sum;
  }

  get nbEstPrepare() {
    let sum = 0;
    this.order.orderdetails.forEach(function (detail) {
      if (detail.prepared) {
        sum += 1;
      }
    });
    return sum;
  }
}
