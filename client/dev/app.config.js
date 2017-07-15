;(function(ng) {
  "use strict";

  ng.module("hosonto")
    .config([
      "$locationProvider",
      function($locationProvider) {
        
        $locationProvider
          .html5Mode(true)
          .hashPrefix('*');
        
      }
    ]);
}(window.angular));
