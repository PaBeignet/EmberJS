import { helper } from '@ember/component/helper';

export default helper(function arrayContains(params /*, hash*/) {
  const [items, value, prop] = params; //On sépare les données du params en plusieurs variable
  let id = prop || 'id'; // On affecte id à prop si il existe, 'id' sinon
  return items.filterBy(id, value[id]).length > 0; //On retourne un booléen --> Si le nombre d'items trié par id est > 0
});
