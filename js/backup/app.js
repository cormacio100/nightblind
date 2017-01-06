// create new MODULE
// We are declarng the module that the HTML states it will use with the statement
//	-	<html ng-app="nightBlindApp">
// Uses Dependency Injection
// 	- 	ngRoute allows us to route by using $routeProvider module
//	-	RouteControllers are the controllers we call when we hit a specific URL 
console.log('initialising ');
var nightBlindApp = angular.module('nightBlindApp',[
	'ngRoute',
	//'RouteControllers',
	'SectionControllers',
	//'AnchorLinkControllers',
	'NavDirective',
	'HomeDirective',
	'AboutDirective',
	'MemberDirective',
	'GalleryDirective',
	'MusicDirective',
	'VideoDirective',
	'ContactDirective',
	'ui.bootstrap.modal',
	'MemberService'
	]);

console.log('initialising 2');

// ROUTES NOT IN USE YET

nightBlindApp.config(['$routeProvider', function($routeProvider) {
	console.log('initialising 3');
	$routeProvider
	.when('/',{
		templateUrl: 'partials/main.html',
		controller: 'HomeController'
	})
	.when('/gallery_live',{
		templateUrl: 'partials/gallery_live.html',
		controller: 'MusicController'
	}).otherwise({
		redirectTo: '/'
	});
}]);


// ***********
//	- NEED TO INCLUDE ng-view DIV in index page for templating
//	- NEED TO BUILD MEMBERS TEMPLATE
//	- NEED TO BUILD MEMBERCONTROLLER
//	- NEED TO BUILD DIRECTIVES THAT CAN BE USED FOR MEMBERS SECTION