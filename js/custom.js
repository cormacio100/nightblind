
// function hides details of band members
var hideMembers = function defaultHide(obj){

	console.log('object name is '+obj.name);

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

		console.log('hide div '+hideDiv);

		$(hideDiv).hide();
	});
};

// on page load
$(function(){

	console.log('page loaded');

	/**
		LINK ANIMATION - NOT WORKING
	**/

	// crete nice slow effect for when links are clicked
	/*$('.anchorLink').on('click',function(event){
		event.preventDefault();
		console.log('anchorLink clicked');
		$('html body').animate({
			scrollTop: $($.attr(this,'href')).offset().top
		},500);
	});*/


/**
DISPLAY of MEMBERS
**/
	var obj = {
		name:'allMembers'
	};
	hideMembers(obj);

	/*$('#members').click(function{
		this.name='allMembers';
		hideMembers(this);
		$('#cormac').slideToggle();
	});*/

	$('#cormacThumb').click(function(){

		console.log('cormac clicked')
		this.name='cormac';

		// need to hide relevant divs for other members
		hideMembers(this);
		$('#cormac').slideToggle();
	});

	$('#hughThumb').click(function(){
		this.name='hugh';
		hideMembers(this);
		$('#hugh').slideToggle();
	});
	$('#davyThumb').click(function(){
		this.name='davy';
		hideMembers(this);
		$('#davy').slideToggle();
	});
	$('#freekThumb').click(function(){
		this.name='freek';
		hideMembers(this);
		$('#freek').slideToggle();
	});

});