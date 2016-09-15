# ngRamda

### Ramda module for Angular 1.x

``` npm install ng-ramda --save ```

Import ngRamda as a service. The other Angular Ramda module puts everything in the root scope, which is an Angular antipattern for obvious reason. If you like using the Angular injection pattern, as you should, this may serve your purposes better!

Here's a little sample..

```javascript
angular.module('myApp', ['ngRamda'])
  .service('myService', function myService (ngRamda) {
    var myOtherFunction = (something, someNumber) => something.id + someNumber;
    var myFunction = ngRamda.curry(myOtherFunction);
    return myFunction;
  });
```
