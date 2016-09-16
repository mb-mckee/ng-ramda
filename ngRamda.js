import Ramda from 'ramda';

angular.module('ngRamda', [])
  .factory('ngRamda', NgRamda);

function NgRamda () {
  return Ramda;
}
