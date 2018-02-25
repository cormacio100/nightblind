// define the CONTROLLERS for a specific module. 
//	IN THIS CASE THE MODULE IS CALLED "nightBlindApp"

// Parameters
//	-	$scope - default
//	-	$location - used for routing
//	-	PricesAndAvailabilityFactory - used for retrieving stored data
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

    console.log('memberArr is ');
    console.log(memberArr);

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
SectionControllers.controller('ContactController',function($scope,$location,PricesAndAvailabilityFactory){
    /**
	 STEPS IN THE BOOKING PROCESS:
	 STEP 1
	 -	When page loads hide DOM element e.g.
		-	hide "quote_string"
		-	hide action_buttons
	 	-	show "contact-info"
	 STEP 2
	 -	When EMAIL button is clicked
	 	-	Need to  make sure all elements are hidden again in case this is not the first time the button has been clicked
		-	Toggle "contact_quote_form" to show
		-	Toggle "contact-info string" to hide
	 STEP 3
	 -	When SEND button is clicked
	 	-	Toggle "contact_quote_form" to hide
	 	-	Toggle "spinning" to show
	 STEP 4
	 	-	If date is AVAILABLE
			-	Toggle or SlideUp the "quote_string" to show
			-	Toggle or SlideUp the "action_buttons" to show
			STEP 5
	 		-	If CONFIRM button is clicked
				-	Toggle booking request "confirmation" to hide
				-	Toggle "booked" to show
			-	IF CANCEL button is clicked
				-	Toggle booking request "confirmation" to hide
				-	Toggle "contact-info" to show
		-	If date is UNAVAILABLE
			-	Toggle or SlideUp the "quote_string" to show
     */
    // STEP 1 - INITIALLY HIDE RELEVANT DOM ELEMENTS TO RESTART THE BOOKING PROCESS
    var step1 = function(){
            //	console.log('STEP 1');
            //	Hide Form
            //	Hide Spinner
            //	Hide quote with string and buttons
            //	Hide booking confirmation
            $('#contact_quote_form').hide();
            $('#spinning').hide();
            $('#quote').hide();
            $('#quote_string').hide();
            $('#quote_action_buttons').hide();
            $('#booked').hide();
        };
    //	STEP 2 - REMOVE THE CONTACT MESSAGE AND DISPLAY THE CONTACT FORM
    var step2 = function(visibility){
            //	console.log('STEP 2');
            if('visible'==visibility){
                $('#contact_info').slideToggle('slow');
            }else if('invisible'==visibility){
                $('#contact_info').slideUp('slow');
                clearForm();
            }
            $('#contact_quote_form').slideToggle('slow');
        };
    //	STEP 3 - REPLACE THE FORM WITH A LOADING/SEARCHING SPINNER
    var step3 = function(){
            //	console.log('STEP 3');
            $('#contact_quote_form').slideToggle('slow');	//	hide
            $('#spinning').slideToggle('slow');				//	show
        };
    //	STEP 4 - REMOVES THE SPINNER AND DISPLAYS THE QUOTE AND ACTION BUTTONS DEPENDING ON AVAILABILITY
    var step4 = function(dateFree,availability){
    	//	console.log('STEP 4');
        //	remove the spinner
        $('#spinning').slideToggle('slow');
        //	Display availability
        $('#quote_string').html(availability);

        if(dateFree){
        	//	If the band is AVAILABLE on that date
			//	Display the message
			//	Display the action buttons
            $('#quote_string').show();
            $('#quote_action_buttons').show();
        }else{
            //	If the band is NOT AVAILABLE on that date
            //	Display the message
            //	DO NOT display the action buttons
            $('#quote_string').show();
            $('#quote_action_buttons').hide();
        }
        //	DISPLAY THE DIV THAT CONTAINS BOTH THE QUOTE_STRING AND THE BUTTONS
        $('#quote').slideToggle('slow');	//	show
	};
    //	STEP 5	-  REMOVES QUOTE AND EITHER CONFIRM BOOKING OF PUT BACK CONTACT STATEMENT , DEPENDING ON BUTTON CLICKED
    var step5 = function(buttonClicked,success){
    	//	console.log('STEP 5');
        if('confirm'==buttonClicked){
            if(success){
                $('#quote').slideUp('slow');			//	hide
                $('#booking_confirmed').html('The gig has been <span class="nb_red">CONFIRMED</span>');
                $('#booked').slideDown('slow');			//	show
            }
        }else if('cancel'==buttonClicked){
            $('#quote').slideUp('slow');			//	hide
            $('#contact_info').slideDown('slow');			//	show
        }
    }
    //	On each click of the EMAIL button the form should be cleared
    var clearForm = function(){
        $('#contact_quote_form').find("input[type=text],input[type=email],input[type=date],select, textarea").val("");
    };

    //	set delay for 2 seconds to show that the app is searching
    var wait = function(requestedDate,setLength,dateFree){
        var datesBookedArr= [];
        datesBookedArr = PricesAndAvailabilityFactory.getDatesBooked();
        $.each(datesBookedArr,function(index,value){
            var bookingDate = new Date(value.date);
            //	Check if the date entered by the user has already been taken
            if(+bookingDate === +requestedDate){
                dateFree = false;
            }
        });
        Date.locale = {
            en: {
                month_names: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
                month_names_short: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
            }
        };
        var priceListArr= [];
        priceListArr = PricesAndAvailabilityFactory.getPriceList();
        var availability = '';
        var day = requestedDate.getDate();
        var month = Date.locale['en'].month_names[requestedDate.getMonth()];
        var year = requestedDate.getFullYear();
        var dayOfWeek = weekday[requestedDate.getDay()];
        var dateString = dayOfWeek+' '+day+'-'+month+'-'+year;
        if(dateFree){
            $.each(priceListArr,function(index,value){
                //	Compare the day of week and set length to the pricelist
                if(value.dayOfWeek == dayOfWeek){
                	//console.log('setLength is '+setLength);
                    if(value.setLength==setLength){
                        if(1==setLength){
                            setLength = setLength+' Hour';
                        }else{
                            setLength = setLength+' Hours';
                        }
                        availability = 'You have requested the band to play on <br><span class="nb_red">'+dateString+'</span> for <span class="nb_red">'+setLength+'</span>. <br>The band is <span class="nb_red"><STRONG>AVAILABLE</STRONG></span> on that date. <br>The price for the gig is <span class="nb_red">€'+value.price+'</span>';
                    }
                }
            });
        }else{
            availability = 'You have requested the band to play on <br><span class="nb_red">'+dateString+'</span>. <br>Unfortunately, the band is <span class="nb_red"><strong>NOT AVAILABLE</strong></span> on that date.'
		}
		step4(dateFree,availability);
    };

    //	THIS IS THE ACTION FOR THE FORM AND ALSO THE ACTION FOR THE BUTTONS
	$scope.contactQuote = function(){
        var name = '';
        var email = '';
        var requestedDate = null;
        var dateString = '';
        var setLength = 0;
        var specialRequirements = '';
        var dateFree = true;
		if($scope.contact_quote_form.$valid){
			name = $scope.name;
            email = $scope.email;
            dateString = $scope.requestedDate;
            requestedDate = new Date(dateString);
            setLength = $scope.setLength;
            specialRequirements = $scope.specialRequirements;
		}
		step3();
		//	Wait 2 seconds before showing result
        setTimeout(function(){wait(requestedDate,setLength,dateFree)},2000);
        /**
		 * STEP 5
         */
        //	When the potential booking is displayed to the user they can choose to confirm or cancel the booking
        $('#confirm_booking').on('click',function(){
            var success = PricesAndAvailabilityFactory.setBooking(dateString,specialRequirements);
            step5('confirm',success);
		});
        $('#cancel_booking_request').on('click',function(){
            step5('cancel',null);
		});
    };
	//	MUST HIDE DOM ELEMENTS ON PAGE LOAD
    step1();
    $('#email-request').on('click',function(){
        // REPEAT STEP 1 ANY TIME THE BUTTON IS CLICKED
        step1();
		//	Is the form being displayed at the time of clicking?
		//	If it is we want to clear the form and also remove the contact-info
        if($('#contact_quote_form').is(':visible')){
			step2('visible');
		}else{
            step2('invisible');
            clearForm();
		}
	});
});