// create new MODULE
// We are declarng the module that the HTML states it will use with the statement
//	-	<html ng-app="nightBlindApp">
// Uses Dependency Injection
// 	- 	ngRoute allows us to route by using $routeProvider module
//	-	RouteControllers are the controllers we call when we hit a specific URL
angular.module('nightBlindApp',[
	'ngRoute',
	'RouteControllers',
	'SectionControllers',
	'AnchorLinkControllers',
	'NavDirective',
	'HomeDirective',
	'AboutDirective',
	'MemberDirective',
	'GalleryDirective',
	'MusicDirective',
	'VideoDirective',
	'ContactDirective',
	]);



// ROUTES NOT IN USE YET
/*
angular.module('nightBlindApp').config(function($routeProvider){
	$routeProvider.when('/',{
		templateUrl: 'partials/home.html',
		controller: 'HomeController'
	}).when('/about',{
		templateUrl: 'partials/about.html',
		controller: 'AboutController'
	}).when('/member',{
		templateUrl: 'partials/member.html',
		controller: 'MemberController'
	}).when('/gallery',{
		templateUrl: 'partials/gallery.html',
		controller: 'GalleryController'
	}).when('/music',{
		templateUrl: 'partials/music.html',
		controller: 'MusicController'
	}).when('/video',{
		templateUrl: 'partials/video.html',
		controller: 'VideoController'
	}).when('/contact',{
		templateUrl: 'partials/contact.html',
		controller: 'ContactController'
	});
});
*/

// ***********
//	- NEED TO INCLUDE ng-view DIV in index page for templating
//	- NEED TO BUILD MEMBERS TEMPLATE
//	- NEED TO BUILD MEMBERCONTROLLER
//	- NEED TO BUILD DIRECTIVES THAT CAN BE USED FOR MEMBERS SECTION