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
	$scope.links = links;
}]);

/**
*	THIS IS THE CONTROLLER THAT DOESN'T FULLY WORK
*	WHICH SERVICE DOES IT NEED TO CALL
*/
SectionControllers.controller('MemberController',function($scope,$http,MemberFactory){


		var memberArr= [];
		memberArr = MemberFactory.getMembers();

		$scope.memberArr = memberArr;


    /*var retrieveData = function(shortname){
    	console.log('short name:'+shortname);
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
	};*/

	//	initial counters
	var currentlyShown = 'none';
	var cormacClickCount = 0;
    var hughClickCount = 0;
    var davyClickCount = 0;
    var freekClickCount = 0;

	//	when the thumb is clicked
	//	check that the button's click counter is at 0
	//	If yes then:
		//	check if anything else is currently shown
		//	if no
			// 	then the div is displayed
			//	the currently shown var is updated
			//	Increment the counter for the div
		//	else if yes
		//	If something is currently being shown then it is toggled off

		//	Then the clicked button's div gets shown
		//
		//	Clear the counters for the other buttons
	//	If no then:
		//	nothing happens
		//	currentlyShown = none

	// wait for a band member name to be clicked before sending request to API Service
	$('#cormacThumb').on('click',function(){
		console.log('shown:'+currentlyShown + ' count:'+cormacClickCount);
        var details = '#cormac_details';
        if(cormacClickCount==0){
            console.log(currentlyShown);
            if('none'!=currentlyShown){
                $(currentlyShown).slideToggle();
            }
            $(details).slideToggle();
            currentlyShown = details;
            //	increment count for the div
            cormacClickCount++;
            // set the other counters back to zero
            hughClickCount = 0;
            davyClickCount = 0;
            freekClickCount = 0;
		}else{
            $(currentlyShown).slideToggle();
            cormacClickCount =0;
            currentlyShown = 'none';
		}
	});
	$('#hughThumb').click(function(){
        var details = '#hugh_details';
        console.log(currentlyShown);
        if(hughClickCount==0) {
            if ('none' != currentlyShown) {
                $(currentlyShown).slideToggle();
            }

            $(details).slideToggle();
            currentlyShown = details;
            hughClickCount++;
            cormacClickCount = 0;
            davyClickCount = 0;
            freekClickCount = 0;
        }else{
            $(currentlyShown).slideToggle();
            hughClickCount =0;
            currentlyShown = 'none';
		}
	});
	$('#davyThumb').click(function(){
        var details = '#davy_details';
        console.log(currentlyShown);
        if('none'!=currentlyShown){
            $(currentlyShown).slideToggle();
        }
        $(details).slideToggle();
        currentlyShown = details;
	});
	$('#freekThumb').click(function(){
        var details = '#freek_details';
        console.log(currentlyShown);
        if('none'!=currentlyShown){
            $(currentlyShown).slideToggle();
        }
        $(details).slideToggle();
        currentlyShown = details;
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