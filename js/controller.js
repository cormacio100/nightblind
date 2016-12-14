// define the CONTROLLERS for a specific module

// Parameters
//	-	$scope - default
//	-	$location - used for routing

// allow for anchor links on the page
angular.module('AnchorLinkControllers',[])
	.controller('AnchorController',function($scope,$location,$anchorScroll){
		$scope.scrollTo = function(id){

			console.log('scrolling');

			$location.hash(id);
			$anchorScroll;
		}
	});


angular.module('SectionControllers',[])
	.controller('NavController',function($scope,$location){
		$scope.links = [
			{title:'Home',href:'#home'},
			{title:'About',href:'#about'},
			{title:'Members',href:'#member'},
			{title:'Gallery',href:'#gallery'},
			{title:'Music',href:'#music'},
			{title:'Video',href:'#video'},
			{title:'Contact',href:'#contact'},
		];
	});




angular.module('RouteControllers',[])

	.controller('HomeController',function($scope,$location){

	})
	.controller('AboutController',function($scope,$location){

	})
	.controller('MemberController',function($scope,$location){
		
	})
	.controller('GalleryController',function($scope,$location){
		
	})
	.controller('MusicController',function($scope,$location){
		
	})
	.controller('VideoController',function($scope,$location){
		
	})
	.controller('ContactController-+',function($scope,$location){
		
	});