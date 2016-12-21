// define the CONTROLLERS for a specific module

// Parameters
//	-	$scope - default
//	-	$location - used for routing

// allow for anchor links on the page
/** NOT WORKING YET **/
/*
angular.module('AnchorLinkControllers',[])
	.controller('AnchorController',function($scope,$location,$anchorScroll){
		$scope.scrollTo = function(id){

			console.log('scrolling');

			$location.hash(id);
			$anchorScroll;
		}
	});*/


// Controller to build the NAVIGATION
angular.module('SectionControllers',[])
	.controller('NavController',function($scope,$location,$anchorScroll){
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

			/*$('html body').animate({

				scrollTop: $($.attr(this,'href')).offset().top
			},500);*/

			$location.hash(id)

			$anchorScroll;
		};

	})
	.controller('MemberController',function($scope,$location,MemberAPIService){
		//console.log('Member Section loaded');	

		/**
		 * function HIDES details of band members
		 */
		var hideMembers = function(obj){
			var name = obj.name;
			var hideArr = [];

			// build the relavant array for hiding divs
			if('allMembers' == name){
				hideArr=['cormac','hugh','davy','freek'];
			}else if('cormac' == name){
				hideArr=['hugh','davy','freek'];
			}else if('hugh' == name){
				hideArr=['cormac','davy','freek'];
			}else if('davy' == name){
				hideArr=['cormac','hugh','freek'];
			}else if('freek' == name){
				hideArr=['cormac','hugh','davy'];
			}

			// hide divs
			$.each(hideArr,function(index,value){
				var hideDiv = '#'+value+'_details';
				$(hideDiv).hide();
			});
		};

		var makeAPICall = function(obj){
			// array to hold band members
			//$scope.bandMemberArr = [];

			// currently no API exists to pull data from
			var url = '';

			console.log('sending API request');

			var member = {};

			// pass URL and user obj that contains the requested name of band member
			//return MemberAPIService.retrieveMembers(url, obj);
			var member = MemberAPIService.retrieveMembers(url, obj);
			console.log('returned member name is '+member.name);
			return member;

			/*console.log('returned member name is '+member.name);

			$scope.title = member.title;
			$scope.name = member.title;
			$scope.instrument = member.title;
			$scope.gear = member.title;*/

			//console.log('member is '+member.name);

			/*MemberAPIService.retrieveMembers(url, obj).then(function(results){

				$scope.member = MemberAPIService.retrieveMembers(result);

				// display the data
				//$scope.member = results.data;
			}).catch(function(err){
				// display the error
				console.log(err);
			});*/
		};


		// by default all member divs are hidden
		var obj = {
			name:'allMembers'
		};
		hideMembers(obj);

		var memberToShow = {};

		$('#cormacThumb').click(function(){
			
			this.name='cormac';

			console.log('name clicked: '+this.name);
			// need to hide relevant divs for other members
			//hideMembers(this);
			//console.log('showing cormac div');
			//$('#cormac_details').slideToggle();
			memberToShow = makeAPICall(this);
			/*MemberAPIService.retrieveMembers(url, obj);

			console.log('returned member name is '+member.name);

			$scope.title = member.title;
			$scope.name = member.title;
			$scope.instrument = member.title;
			$scope.gear = member.title;*/
		});

		$('#hughThumb').click(function(){
			this.name='hugh';
			//hideMembers(this);
			//$('#hugh_details').slideToggle();
			memberToShow = makeAPICall(this);
		});
		$('#davyThumb').click(function(){
			this.name='davy';
			//hideMembers(this);
			//$('#davy_details').slideToggle();
			memberToShow = makeAPICall(this);
		});
		$('#freekThumb').click(function(){
			this.name='freek';
			//hideMembers(this);
			//$('#freek_details').slideToggle();
			memberToShow = makeAPICall(this);
		});

		console.log('returned member name is '+memberToShow.name);

		$scope.title = memberToShow.title;
		$scope.name = memberToShow.title;
		$scope.instrument = memberToShow.title;
		$scope.gear = memberToShow.title;



	})
	.controller('GalleryController',function($scope,$location){

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
angular.module('RouteControllers',[])

	.controller('HomeController',function($scope,$location){

	})
	.controller('AboutController',function($scope,$location){

	})
	.controller('MemberController',function($scope,$location){
		
	})
	.controller('GalleryController',function($scope,$location){


		
	})
	.controller('MusicController',function($scope,$location){
		
	})
	.controller('VideoController',function($scope,$location){
		
	})
	.controller('ContactController-+',function($scope,$location){
		
	});*/