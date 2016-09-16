# ngMonet

### Monet module for Angular 1.x

``` npm install ng-monet --save ```

Import ngMonet as an Angular service.

First add the script in your HTML file.
```html
<body>
  <!-- Import angular first -->
  <script src='/node_modules/angular/angular.min.js'></script>
  <!-- Import ng-ramda second -->
  <script src='/node_modules/ng-monet/ngMonet.min.js'></script>
</body>
```

OR import via JavaScript

```javascript
import 'ng-monet';

// or

require('ng-monet');
```

Then just inject the module and service.

```javascript

angular.module('myApp', ['ngMonet'])
  .service('myService', function myService (ngMonet, $http) {
    var getPost = ngMonet.IO(postId => $http.get(`/API/posts/${postId}`));
    var updatePost = postId => ngMonet.IO(postBody => $http.post('/API/posts', { id: postId, body: postBody }));
    return {
      getPost,
      updatePost,
    };
  });
```
