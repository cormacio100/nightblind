var MemberService = angular.module('MemberService',[]);

MemberService.factory('MemberAPIService',function($http){

			// object contains data retrieved from the JSON file
			var MemberAPIService = {
				// function submits a GET request and returns response data
				retrieveMembers: function(url){
					return $http.get(url);
				}
			};

			// data gets retunred to the calling function
			return MemberAPIService;
	});