
// create a new directive called "todoTable"
angular.module('SectionDirective',[]).directive('navPartial',function(){
	return{
		restrict: 'EA', 	// Can be called in template either way
		templateUrl: 'partials/directives/nav-partial.html'
	};
});
