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

	var formString = '<form name="contact_quote_form">' +
        '<div class="row">' +
        '<div class="col-md-2 text-right" >'+
		'Name:' +
		'</div>' +
        '<div class="col-md-4 text-left" >'+
		'<input type="text" name="name" class="contact_form_element" ng-model="name" required>' +
		'</div>' +
        '<div class="col-md-2 text-right" >'+
        'Email:' +
        '</div>' +
        '<div class="col-md-4 text-left" >'+
		'<input type="email" name="email" class="contact_form_element" ng-model="email" required>' +
        '</div>' +
        '</div>' +
		//'<br><label ng-show="contact_quote_form.email.$pristine">Email Address invalid</label>' +
        '<div class="row">' +
        '<div class="col-md-2 text-right" >'+
        'Gig Date:' +
        '</div>' +
        '<div class="col-md-4 text-left" >'+
		'<input type="date" name="date" class="contact_form_element" ng-model="date" required>' +
        '</div>' +
        '<div class="col-md-2 text-right" >'+
        'Set Length:' +
        '</div>' +
        '<div class="col-md-4 text-left" >'+
		'<select name="event_type" class="contact_form_element" ng-model="event_type" required>' +
			'<option value=1>1 hour</option>' +
			'<option value=2>2 hours</option>' +
			'<option value=3>3 hours</option>' +
		'</select>' +
        '</div>' +
        '</div>' +
        '<div class="row">' +
        '<div class="col-md-2 text-right" >'+
        'Special Requirements' +
        '</div>' +
        '<div class="col-md-10 text-left" >' +
        '<textarea rows="4" cols="70" class="contact_form_element" ng-model="special_requirement"></textarea>' +
        '</div>' +
        '</div>' +
        '<div class="row">' +
        '<div class="col-md-12 text-center" >'+
		'<button id="contact_send_btn" class="btn" ng-disabled="contact_quote_form.$invalid">Send</button>' +
		'</div>' +
		'</div>' +
		'</form>' +
        '<p>The inputs valid state is:</p>' +
    	'<h1>$sce.trustAsHtml({{contact_quote_form.myInput.$invalid}})</h1>';

	$('#contact_quote_form').hide();

    $('#email-request').on('click',function(){
     	$('#contact-info').slideToggle('slow');
        $('#contact_quote_form').slideToggle('slow');
	});
});