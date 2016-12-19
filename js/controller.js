// define the CONTROLLERS for a specific module

// Parameters
//	-	$scope - default
//	-	$location - used for routing

// allow for anchor links on the page
/** NOT WORKING YET **/
angular.module('AnchorLinkControllers',[])
	.controller('AnchorController',function($scope,$location,$anchorScroll){
		$scope.scrollTo = function(id){

			console.log('scrolling');

			$location.hash(id);
			$anchorScroll;
		}
	});


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
	.controller('MemberController',function($scope,$location){
		//console.log('Member Section loaded');	

		// function hides details of band members
		var hideMembers = function(obj){

			//console.log('object name is '+obj.name);

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

				//console.log('hide div '+hideDiv);

				$(hideDiv).hide();
			});
		};

		var obj = {
			name:'allMembers'
		};
		hideMembers(obj);

		$('#cormacThumb').click(function(){

			console.log('cormac clicked')
			this.name='cormac';
			// need to hide relevant divs for other members
			hideMembers(this);

			console.log('showing');
			$('#cormac_details').slideToggle();
		});

		$('#hughThumb').click(function(){
			this.name='hugh';
			hideMembers(this);
			$('#hugh_details').slideToggle();
		});
		$('#davyThumb').click(function(){
			this.name='davy';
			hideMembers(this);
			$('#davy_details').slideToggle();
		});
		$('#freekThumb').click(function(){
			this.name='freek';
			hideMembers(this);
			$('#freek_details').slideToggle();
		});
	})
	.controller('GalleryController',function($scope,$location){

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