import { helper } from '@ember/component/helper';

export default helper(function formatCurrency(params /*, named*/) {
  let [value, symbol = '€'] = params;
  return value.toFixed(2) + ' ' + symbol;
});
