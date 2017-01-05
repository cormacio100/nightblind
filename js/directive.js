
// directive for NavBar
angular.module('NavDirective',[]).directive('navPartial',function(){
	return{
		restrict: 'EA', 	// Can be called in template either way
		templateUrl: 'partials/directives/nav-partial.html'
	};
});

// directive for Home Section
angular.module('HomeDirective',[]).directive('homePartial',function(){
	return{
		restrict: 'EA', 	// Can be called in template either way
		scope: true,
		templateUrl: 'partials/directives/home-partial.html'
	};
});

// directive for About Section
angular.module('AboutDirective',[]).directive('aboutPartial',function(){
	return{
		restrict: 'EA', 	// Can be called in template either way
		scope: true,
		templateUrl: 'partials/directives/about-partial.html'
	};
});

// directive for Member Section
angular.module('MemberDirective',[]).directive('memberPartial',function(){
	return{
		restrict: 'EA', 	// Can be called in template either way
		scope: true,
		templateUrl: 'partials/directives/member-partial.html'
	};
});

// directive for Gallery Section
angular.module('GalleryDirective',[]).directive('galleryPartial',function(){
	return{
		restrict: 'EA', 	// Can be called in template either way
		scope: true,
		templateUrl: 'partials/directives/gallery-partial.html'
	};
});

// directive for Music Section
angular.module('MusicDirective',[]).directive('musicPartial',function(){
	return{
		restrict: 'EA', 	// Can be called in template either way
		scope: true,
		templateUrl: 'partials/directives/music-partial.html'
	};
});

// directive for Video Section
angular.module('VideoDirective',[]).directive('videoPartial',function(){
	return{
		restrict: 'EA', 	// Can be called in template either way
		scope: true,
		templateUrl: 'partials/directives/video-partial.html'
	};
});

// directive for Contact Section
angular.module('ContactDirective',[]).directive('contactPartial',function(){
	return{
		restrict: 'EA', 	// Can be called in template either way
		scope: true,
		templateUrl: 'partials/directives/contact-partial.html'
	};
});