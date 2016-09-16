import Monet from 'monet';

angular.module('ngMonet', [])
  .factory('ngMonet', ngMonet);

function ngMonet () {
  return Monet;
}
