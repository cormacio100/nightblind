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
	//	all band members data loaded. They will initially be hidden
	$scope.memberArr = memberArr;

	//	initial counters
	var currentlyShown = 'none';
	var cormacClickCount = 0;
    var hughClickCount = 0;
    var davyClickCount = 0;
    var freekClickCount = 0;

	//	function resets the click counters
	var setCounters = function(details){
        if('#cormac_details' == details){
            cormacClickCount++;
            hughClickCount = 0;
            davyClickCount = 0;
            freekClickCount = 0;
        }else if('#hugh_details' == details){
            cormacClickCount = 0;
            hughClickCount++;
            davyClickCount = 0;
            freekClickCount = 0;
        }else if('#davy_details' == details){
            cormacClickCount = 0;
            hughClickCount = 0;
            davyClickCount++;
            freekClickCount = 0;
        }else if('#freek_details' == details){
            cormacClickCount = 0;
            hughClickCount = 0;
            davyClickCount = 0;
            freekClickCount++;
        }
	}
	//	Function will toggle the relevant div depending on band member clicked
	var toggleFunc = function(details){
		var currentClickCount = 0;
		if('#cormac_details' == details){
            currentClickCount = cormacClickCount
		}else if('#hugh_details' == details){
            currentClickCount = hughClickCount
        }else if('#davy_details' == details){
            currentClickCount = davyClickCount
        }else if('#freek_details' == details){
            currentClickCount = freekClickCount
        }
        if(currentClickCount == 0){
            console.log(currentlyShown);
            if('none'!=currentlyShown){
                $(currentlyShown).slideToggle();
            }
            $(details).slideToggle();
            currentlyShown = details;
            //	increment count for the div
			setCounters(details);

        }else{
            $(currentlyShown).slideToggle();
            if('#cormac_details' == details){
            	cormacClickCount = 0;
            }else if('#hugh_details' == details){
                hughClickCount = 0;
            }else if('#davy_details' == details){
                davyClickCount = 0;
            }else if('#freek_details' == details){
                freekClickCount = 0;
            }
            currentlyShown = 'none';
        }
	}
	// wait for a band member name to be clicked
	$('#cormacThumb').on('click',function(){
        var details = '#cormac_details';
        toggleFunc(details);
	});
	$('#hughThumb').click(function(){
        var details = '#hugh_details';
        toggleFunc(details);
	});
	$('#davyThumb').click(function(){
        var details = '#davy_details';
        toggleFunc(details);
	});
	$('#freekThumb').click(function(){
        var details = '#freek_details';
        toggleFunc(details);
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