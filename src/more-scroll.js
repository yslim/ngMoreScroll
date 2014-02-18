/**
 * User : yslim
 * Date : 2014. 2. 14.
 */

angular.module ('more-scroll', [])
  .directive ('moreScroll', [ '$rootScope', function ($rootScope) {

    return {

      link: function (scope, element, attrs) {
        var scrollDistance = 2;

        if (attrs.moreScrollDistance != null) {
          scrollDistance = parseInt (attrs.moreScrollDistance, 10);
        }

        angular.element (element).bind ("scroll", function () {
          var elem = element[0];

          if (elem.scrollTop + elem.offsetHeight * scrollDistance >= elem.scrollHeight) {
            if ($rootScope.$$phase) {
              return scope.$eval (attrs.moreScroll);
            } else {
              return scope.$apply (attrs.moreScroll);
            }
          }

        });
      }
    }
  }])
;
