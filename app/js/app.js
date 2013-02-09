'use strict';


// Declare app level module which depends on filters, and services
angular.module('addicaidApp',
        [
            'addicaidApp.filters', 'addicaidApp.services', 'addicaidApp.directives',
            'mobile-navigate'
//            'ui'
        ])

    .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
        $routeProvider
//            .when('/map', { templateUrl: 'views/map.html', controller: MapCtrl })
            .when('/meetinglist', { templateUrl: 'views/meeting-list.html', controller: MeetingListCtrl })
            .when("/", { templateUrl: 'views/meeting-list.html', controller: MeetingListCtrl })
            .otherwise({ redirectTo: "/" });
        $locationProvider.html5Mode(true);
    }])

    .run(function($rootScope) {
        $rootScope.views = {
            "header" : "views/partials/header.html",
            "footer" : "views/partials/footer.html",
            "meetingDetail" : "views/partials/meeting-detail.html"
        };
    });





//var App = angular.module('addicaid', ['mobile-navigate'/*, "leaflet-directive"*/, 'ui']);
//App.config(['$routeProvider', function($routeProvider) {
//    $routeProvider
//        .when('/meetings_map', { templateUrl: 'partials/meetings-map.html', controller: MeetingsMapCtrl })
//        .when('/meetings_list', { templateUrl: 'partials/meetings-list.html', controller: MeetingsListCtrl })
//        .when('/meetings_filter', { templateUrl: 'partials/meetings-filter.html', controller: MeetingsFilterCtrl })
//        .when('/feed', { templateUrl: 'partials/feed.html', controller: FeedCtrl })
//        .when('/dailydose', { templateUrl: 'partials/dailydose.html', controller: DailyDoseCtrl })
//        .when('/content', { templateUrl: 'partials/content.html', controller: ContentCtrl })
//        .when('/profile', { templateUrl: 'partials/profile.html', controller: ProfileCtrl })
//        .when('/connect', { templateUrl: 'partials/connect.html', controller: ConnectCtrl })
//        .when('/test', { templateUrl: 'partials/test.html', controller: TestCtrl })
//        .when('/meetings/:meetingID', { templateUrl: 'partials/meeting-detail.html', controller: MeetingDetailCtrl })
//        .when("/", { templateUrl: "partials/home.html", controller: HomeCtrl })
//        .otherwise({ redirectTo: "/" })
//    ;
//}]);