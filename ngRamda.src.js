import Ramda from 'ramda';

angular.module('ngRamda', [])
  .service('ngRamda', NgRamda);

function NgRamda () {
  return Ramda;
}
