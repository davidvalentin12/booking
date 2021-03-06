(function(module) {
try {
  module = angular.module('dvm.templates');
} catch (e) {
  module = angular.module('dvm.templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('src/scripts/dvmBooking/dvmBooking.tpl.html',
    '<dvm-booking-header></dvm-booking-header><div ui-view=content id=container></div>');
}]);
})();

(function(module) {
try {
  module = angular.module('dvm.templates');
} catch (e) {
  module = angular.module('dvm.templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('src/scripts/dvmBookingHeader/dvmBookingHeader.tpl.html',
    '<nav class="navbar navbar-default"><div class=container><div class=navbar-header><a class=navbar-brand ui-sref=app.home>Hotel Booking</a></div><div class="collapse navbar-collapse" id=bs-example-navbar-collapse-1><ul class="nav navbar-nav"><li><a ui-sref=app.home>{{\'HOME\'|translate}}</a></li><li><a ui-sref=app.hotelList>{{\'HOTELS\'|translate}}</a></li><li class=dropdown><a class=dropdown-toggle data-toggle=dropdown role=button aria-haspopup=true aria-expanded=false>{{\'LANGUAGE\'|translate}} <span class=caret></span></a><ul class=dropdown-menu><li><a ng-click="dvmBookingHeaderCtrl.changeLanguage(\'en\')">{{\'ENGLISH\'|translate}}</a></li><li><a ng-click="dvmBookingHeaderCtrl.changeLanguage(\'es\')">{{\'SPANISH\'|translate}}</a></li></ul></li></ul></div></div></nav>');
}]);
})();

(function(module) {
try {
  module = angular.module('dvm.templates');
} catch (e) {
  module = angular.module('dvm.templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('src/scripts/dvmBookingHome/dvmBookingHome.tpl.html',
    '<div class=container><h2>{{\'HOME_TITLE\'|translate}}</h2><p>Phasellus faucibus quam quis sem gravida efficitur et eget dolor. Vestibulum bibendum pellentesque lacus, id vehicula nulla posuere sed. Proin congue aliquam velit, id egestas massa hendrerit vitae. Cras sit amet pulvinar enim. Sed nec gravida magna. Curabitur in justo et dui sodales sagittis eget at arcu. Mauris lobortis lobortis ex a blandit. Aliquam euismod efficitur augue tempus dignissim. Pellentesque placerat magna nec congue sagittis. Curabitur magna nisi, facilisis a dignissim nec, pretium eu metus. Praesent congue vitae orci at iaculis. Donec gravida, felis in volutpat malesuada, nisi orci aliquam tortor, nec rhoncus justo lorem quis diam. Etiam commodo nisl vel ex dapibus varius. Vestibulum tincidunt eleifend dignissim. Aliquam eu mi lobortis, scelerisque nisl in, commodo velit. Sed nec feugiat risus, non imperdiet nunc.</p></div>');
}]);
})();

(function(module) {
try {
  module = angular.module('dvm.templates');
} catch (e) {
  module = angular.module('dvm.templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('src/scripts/dvmBookingHotel/dvmBookingHotel.tpl.html',
    '<div class=container><div class="panel panel-default"><div class=panel-body><h3 ng-bind=dvmBookingHotelCtrl.hotel.name></h3><div class=img-wrapper><img ng-src=src/images/{{dvmBookingHotelCtrl.hotel.imgUrl}}.jpg class=img-responsive alt={{dvmBookingHotelCtrl.hotel.name}}></div><br><p ng-bind=dvmBookingHotelCtrl.hotel.big_description></p><ul class=list-group><li class=list-group-item>{{\'STARS\'|translate}}: {{dvmBookingHotelCtrl.hotel.stars}}</li><li class=list-group-item>{{\'COUNTRY\'|translate}}: {{dvmBookingHotelCtrl.hotel.country}}</li><li class=list-group-item>{{\'CITY\'|translate}}: {{dvmBookingHotelCtrl.hotel.city}}</li><li class=list-group-item>{{\'ADDRESS\'|translate}}: {{dvmBookingHotelCtrl.hotel.address}}</li></ul></div></div></div>');
}]);
})();

(function(module) {
try {
  module = angular.module('dvm.templates');
} catch (e) {
  module = angular.module('dvm.templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('src/scripts/dvmBookingHotelList/dvmBookingHotelList.tpl.html',
    '<div class=container><h3>{{\'HOTEL_LIST\'|translate}}</h3><div class=col-md-4 ng-repeat="hotel in dvmBookingHotelListCtrl.hotels track by $index"><div class="panel panel-default"><div class=panel-body><div class=img-wrapper><img ng-src=src/images/{{hotel.imgUrl}}.jpg class=img-responsive alt={{hotel.name}}></div><h3 ng-bind=hotel.name></h3><p ng-bind=hotel.small_description></p><button type=button class="pull-right btn btn-success" ui-sref="app.hotelList.hotel({hotelId: \'{{hotel.id}}\'})">{{\'DETAILS\'|translate}}</button></div></div></div></div>');
}]);
})();
