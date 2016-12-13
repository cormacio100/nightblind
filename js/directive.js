
// create a new directive called "todoTable"
angular.module('MenuDirective',[]).directive('navMenu',function(){
	return{
		//restrict: 'A',	// A -> attribute 
							// can be called in template as 
							// <div todo-table></div>

		//restrict: 'E',	// E -> element
							// can be called in template as 
							// <todo-table></todo-table>

		restrict: 'EA', 	// Can be called in template either way
		templateUrl: 'templates/directives/navMenu.html'
	};
});

