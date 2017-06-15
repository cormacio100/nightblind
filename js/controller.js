// define the CONTROLLERS for a specific module. 
//	IN THIS CASE THE MODULE IS CALLED "nightBlindApp"

// Parameters
//	-	$scope - default
//	-	$location - used for routing
//  -   using this example I am setting variables globally
//  	- 	https://jsfiddle.net/brettdewoody/y65G5/

//	ADD A CONTROLLER TO THE ARRAY
SectionControllers.controller('MainController',function($scope,$location,$anchorScroll,$routeParams){
	var vm = this;
});

SectionControllers.controller('NavController',['$scope','$http',function($scope,$location,$anchorScroll){

	console.log('this is the NavController');

	// this is a NESTED Controller
	//var vm = this;
	$scope.links = [
			{title:'Home',href:'home'},
			{title:'About',href:'home?scrollTo=about'},
			{title:'Members',href:'home?scrollTo=member'},
			{title:'Gallery',href:'home?scrollTo=gallery'},
			{title:'Music',href:'home?scrollTo=music'},
			{title:'Video',href:'home?scrollTo=video'},
			{title:'Contact',href:'home?scrollTo=contact'},
		];
}]);

/**
*	THIS IS THE CONTROLLER THAT DOESN'T FULLY WORK
*	WHICH SERVICE DOES IT NEED TO CALL
*/
SectionControllers.controller('MemberController',function($scope,$http,MemberFactory){

	var retrieveData = function(shortname){
		var memberArr= [];
		memberArr = MemberFactory.getMembers();
        console.log('memberArr is: ');
		console.log(memberArr);
		$.each(memberArr,function(index,value){
	    	if(value.shortname==shortname){

	    		console.log('name is '+value.name);
	    		console.log('instrument is '+value.instrument);
	    		console.log('gear is '+value.gear);
	    		$scope.name = value.name;
	    		$scope.instrument = value.instrument;
	    		$scope.gear = value.gear;
	    	}	
	    })
	}

	// wait for a band member name to be clicked before sending request to API Service
	$('#cormacThumb').click(function(){
		retrieveData('Cormac_Liston');
	});
	$('#hughThumb').click(function(){
		retrieveData('Hugh_OConnor');
	});
	$('#davyThumb').click(function(){
		retrieveData('Davy_Dwyer');
	});
	$('#freekThumb').click(function(){
		retrieveData('Freek_Vermeer');
	});
});


SectionControllers.controller('GalleryController',function($scope,$location){

		$scope.showModal = false;


		$scope.open = function() {
			console.log('open clicked');
		  $scope.showModal = true;
		};

		$scope.ok = function() {
		  $scope.showModal = false;
		};

		$scope.cancel = function() {
		  $scope.showModal = false;
		};
	
	});
/*
SectionControllers.controller('NavController',['$scope','$http',function($scope,$location,$anchorScroll){
		$scope.links = [
			{title:'Home',href:'home'},
			{title:'About',href:'about'},
			{title:'Members',href:'member'},
			{title:'Gallery',href:'gallery'},
			{title:'Music',href:'music'},
			{title:'Video',href:'video'},
			{title:'Contact',href:'contact'},
		];

		// allows for scrolling to anchor links  
		$scope.scrollTo = function(id){

			
			// NEED TO PUT IN ANIMATION TO SLOW DOWN THE SCROLLING
		
			//$('html body').animate({

			//	scrollTop: $($.attr(this,'href')).offset().top
			//},500);

			$location.hash(id)

			$anchorScroll;
		};

	}]);*/

/*
SectionControllers.controller('MemberController',function($scope,$http,MemberAPIService){

		// function retrieves data from service
		var retrieveData = function(url,shortname){

			// call to API service
			// pass the url. No params passed
			MemberAPIService.retrieveMembers(url).then(function(results) {
				var memberArr = results.data;
				// loop
			    $.each(memberArr,function(index,value){
			    	if(value.shortname==shortname){
			    		$scope.name = value.name;
			    		$scope.instrument = value.instrument;
			    		$scope.gear = value.gear;
			    	}	
			    })

			});
		}
		// location of data to be retrieved
		var url='js/data.json';
		// wait for a band member name to be clicked before sending request to API Service
		$('#cormacThumb').click(function(){
			retrieveData(url,'Cormac_Liston');
		});
		$('#hughThumb').click(function(){
			retrieveData(url,'Hugh_OConnor');
		});
		$('#davyThumb').click(function(){
			retrieveData(url,'Davy_Dwyer');
		});
		$('#freekThumb').click(function(){
			retrieveData(url,'Freek_Vermeer');
		});
	});
SectionControllers.controller('GalleryController',function($scope,$location){

		$scope.showModal = false;


		$scope.open = function() {
			console.log('open clicked');
		  $scope.showModal = true;
		};

		$scope.ok = function() {
		  $scope.showModal = false;
		};

		$scope.cancel = function() {
		  $scope.showModal = false;
		};
	
	});
*/