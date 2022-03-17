import Model, { attr } from '@ember-data/model';

export default class ProductModel extends Model {
  @attr('string') name;
  @attr('string') comments;
  @attr('int') stock;
  @attr('string') image;
  @attr('float') price;
  @attr('float') promotion;
}
