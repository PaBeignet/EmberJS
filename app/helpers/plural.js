import { helper } from '@ember/component/helper';

export default helper(function plural(params /*, named*/) {
  let [count, zero, un, plusieurs] = params; //On récupère tous les paramètres d'un coup
  switch (count) {
    case 0:
      return zero;
    case 1:
      return un;
    default:
      return 'Vous avez choisi ' + count + ' ' + plusieurs;
  }
});
