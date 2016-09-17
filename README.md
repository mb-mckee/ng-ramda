# ngRamda

### Ramda module for Angular 1.x

``` npm install ng-ramda --save ```

Import ngRamda as a service. The other Angular Ramda module puts everything in the root scope, which is an Angular antipattern for obvious reason. If you like using the Angular injection pattern, as you should, this may serve your purposes better!

First add the script in your HTML file.
```html
<body>
  <!-- Import angular first -->
  <script src='/node_modules/angular/angular.min.js'></script>
  <!-- Import ng-ramda second -->
  <script src='/node_modules/ng-ramda/ngRamda.min.js'></script>
</body>
```

OR import via JavaScript

```javascript
import 'ng-ramda';

// or

require('ng-ramda');
```

Then just inject the module and service.

```javascript

angular.module('myApp', ['ngRamda'])
  .service('myService', function myService (ngRamda) {
    var myOtherFunction = (something, someNumber) => something.id + someNumber;
    var myFunction = ngRamda.curry(myOtherFunction);
    return myFunction;
  });
```

Ramda docs can be found here: http://ramdajs.com/0.22.1/index.html
