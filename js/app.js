// CREATE NEW MODULE
// We are declaring the module that the HTML states it will use with the statement
//	-	<html ng-app="nightBlindApp">
// Uses Dependency Injection
// 	- 	ngRoute allows us to route by using $routeProvider module
//	-	RouteControllers are the controllers we call when we hit a specific URL 

//	DECLARE APP AND DECLARE MODULES
//	EACH MODULE WILL HAVE IT'S OWN CONTROLLERS
var nightBlindApp = angular.module('nightBlindApp',[
	//'ngRoute',
	'SectionControllers',
	//'NavDirective',
	//'HomeDirective',
	//'AboutDirective',
	//'MemberDirective',
	//'GalleryDirective',
	//'MusicDirective',
	//'VideoDirective',
	//'ContactDirective',
	//'ui.bootstrap.modal',
	//'MemberService'
	]);

// define Routes
nightBlindApp.config(function($routeProvider) {
	
	$routeProvider
	.when('/home',{
		controller: 'MainController',
		templateUrl: 'partials/main_page.html'
	})
	.when('/gallery',{
		controller: 'GalleryController',
		templateUrl: 'partials/gallery_main.html',
	})
	.otherwise({
		redirectTo: '/home'
	});
});

// define how anchorlinks should work
nightBlindApp.run(function($rootScope,$location,$anchorScroll,$routeParams){
	// detect route changes
	$rootScope.$on('$routeChangeSuccess',function(newRoute,oldRoute){
		// update the URL
		$location.hash($routeParams.scrollTo);
		// read from the URL and scroll to correct location
		$anchorScroll.yOffset = 20;
		$anchorScroll();
	});
});

// ***********
//	- NEED TO INCLUDE ng-view DIV in index page for templating
//	- NEED TO BUILD MEMBERS TEMPLATE
//	- NEED TO BUILD MEMBERCONTROLLER
//	- NEED TO BUILD DIRECTIVES THAT CAN BE USED FOR MEMBERS SECTION