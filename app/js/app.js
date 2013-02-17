'use strict';


// Declare app level module which depends on filters, and services
var myApp = angular.module('myApp', [
    'myApp.content',
    'myApp.directives',
    'myApp.faq',
    'myApp.filters',
    'myApp.handler',
    'myApp.services',
    'ui.bootstrap'
]);

myApp.config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/page/:id', {templateUrl: 'partials/page.html', controller: PageCtrl});
        $routeProvider.when('/about', {redirectTo: '/page/2'});
        $routeProvider.when('/faq', {templateUrl: 'partials/faq.html', controller: FaqCtrl});
        $routeProvider.when('/faq/edit/:faqId', {templateUrl: 'partials/faq-detail.html', controller: FaqCtrlEdit});
        $routeProvider.when('/faq/new', {templateUrl: 'partials/faq-detail.html', controller: FaqCtrlNew});
        $routeProvider.otherwise({redirectTo: '/page/1'});
    }]);
