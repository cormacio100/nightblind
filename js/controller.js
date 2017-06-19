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

//	Controller to build the navigation of the site
SectionControllers.controller('NavController',['$scope','$http',function($scope,$location,$anchorScroll){
	$scope.links = links;
}]);

//	Controller to populate the band member section
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

//	Controller for the Gallery
SectionControllers.controller('GalleryController',function($scope,$location){

		$scope.showModal = false;

		$scope.open = function() {
		  $scope.showModal = true;
		};

		$scope.ok = function() {
		  $scope.showModal = false;
		};

		$scope.cancel = function() {
		  $scope.showModal = false;
		};
	
	});

//	Controller for the Contact section
SectionControllers.controller('ContactController',function($scope,$location){
	$scope.contactQuote = function(){
        $scope.enquiry = {};
		if($scope.contact_quote_form.$valid){
			$scope.enquiry.name = $scope.name;
            $scope.enquiry.email = $scope.email;
            $scope.enquiry.date = $scope.date;
            $scope.enquiry.set_length = $scope.set_length;
            $scope.enquiry.special_requirement = $scope.special_requirement;
            console.log('name is '+$scope.enquiry.name);
		}
        var priceListArr= [];
        var datesBooked= [];
        priceListArr = MemberFactory.getPriceList();
        datesBooked = MemberFactory.getDatesBooked();

        /*********
		 * TO DO
		 * COMPARE THE DATE AGAINST THE SET OF DATES ALREADY BOOKED
		 * IF NOT BOOKED
		 * -	CHECK THE DATE FOR WHICH DAY OF THE WEEK IT IS
		 * -	CHECK HOW MANY HOURS THE SET IS
		 * -	GET A PRICE
		 *
		 * CREATE ANOTHER DIV THAT IS INITIALLY HIDDEN
		 * THIS DIV WILL CONTAIN A THANK YOU FOR CONTACTING US SECTION
		 * IF BAND IS NOT ALREADY BOOKED
		 * -	PRICES WILL BE DISPLAYED IN THIS SECTION
		 * -	USER WILL BE ASKED IF THEY WANT TO CONFIRM
		 * -	IF YES
		 * 		-	SAVE DATE TO BOOKED DATES ARRAY
		 * 		-	ANOTHER DIV APPEARS SHOWING THAT DATE WAS BOOKED
		 * -	IN NO
		 * 		-	ANOTHER DIV WILL APPEAR WITH A THANK YOU MESSAGE
		 * ELSE
		 * -	A NOTICE WILL APPEAR TO SHOW THE BAND IS BOOKED ON THAT DATE.
         */



    };

	$('#contact_quote_form').hide();

    $('#email-request').on('click',function(){
     	$('#contact-info').slideToggle('slow');
        $('#contact_quote_form').slideToggle('slow');
	});
});