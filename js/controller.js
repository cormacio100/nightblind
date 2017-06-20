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
SectionControllers.controller('ContactController',function($scope,$location,PricesAndAvailabilityFactory){

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
        console.log('dateFree:'+dateFree);

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
        console.log('day of week:'+dayOfWeek);
        if(dateFree){
            $.each(priceListArr,function(index,value){
                //	Compare the day of week and set length to the pricelist
                if(value.dayOfWeek == dayOfWeek){
                	console.log('setLength is '+setLength);
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
            availability = 'You have requested the band to play on <br><span class="nb_red">'+dateString+'</span>. <br>Unfortunately, the band is <span class="nb_red"><strong>NOT AVAILABLE</strong></span> on that date'
		}
		console.log('availability is:'+availability);
        //$scope.availability = availability;
        $('#quote_string').html(availability);
        if(dateFree){
        	console.log('the band is free on that date');
        	$('#action_buttons').show();
		}
		//	remove the spinner
        $('#spinning').slideToggle('slow');
        //	add the quote
        $('#quote').slideToggle('slow');
    };

	$scope.contactQuote = function(){
        $scope.enquiry = {};
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

		//	replace the form with a loading/searching spinner
        //$('#contact_quote_form').replaceWith('<div id="spinning"><i class="fa fa-spinner fa-spin loading_spinner" ></i></div>');
        $('#contact_quote_form').slideToggle('slow');
        $('#spinning').slideToggle('slow');

        //	Wait 2 seconds before showing result
        setTimeout(function(){wait(requestedDate,setLength,dateFree)},2000);

        //	When the potential booking is displayed to the user they can choose to confirm or cancel the booking
        $('#confirm_booking').on('click',function(){
        	console.log('confirm');
            var success = PricesAndAvailabilityFactory.setBooking(dateString,specialRequirements);
            if(success){
            	console.log('success');
                // then confirm what's in the array now
				//var bookings = PricesAndAvailabilityFactory.getDatesBooked();
				//$.each(bookings,function(index,value){
				//	console.log('date:'+value.date+' S.R.:'+value.specialRequirements);
				//});
                $('#confirmation').slideToggle('slow');
                $('#confirmed').html('The gig has been <span class="nb_red">CONFIRMED</span>');
                $('#booked').slideToggle('slow');
			}
		});
        $('#cancel_booking_request').on('click',function(){
            $('#confirmation').slideToggle('slow');
            $('#contact-info').slideToggle('slow');
		});

        /*
        *	TO DO
        * 	display the response section AND ASK USER TO CONFIRM THE BOOKING
        */
		/*********
		 * TO DO
		 * COMPARE THE DATE AGAINST THE SET OF DATES ALREADY BOOKED
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

	//	HIDE DOM ELEMENTS ON PAGE LOAD
	$('#contact_quote_form').hide();
    $('#spinning').hide();
    $('#quote').hide();
    $('#action_buttons').hide();
    $('#booked').hide();

    //	On each click the form should be cleared
    var clearForm = function(){
        $('#contact_quote_form').find("input[type=text],input[type=email],input[type=date],select, textarea").val("");
	};

    $('#email-request').on('click',function(){
		//	Is the form being displayed at the time of clicking?
		//	If it is we want to clear the form and also remove the contact-info
        if($('#contact_quote_form').is(':visible')){
			console.log('form is visible');
            $('#contact-info').slideToggle('slow');
		}else{
            console.log('form is NOT visible');
            $('#contact-info').slideUp('slow');
            clearForm();
		}
        $('#spinning').hide();
        $('#quote').hide();
        $('#booked').hide();
        $('#contact_quote_form').slideToggle('slow');
	});
});