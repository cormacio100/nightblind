
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
		$('#'+value).hide();
	});


	/*$('#cormac').hide();
	$('#hugh').hide();
	$('#davy').hide();
	$('#freek').hide();*/
};

// on page load
$(function(){
	// crete nice slow effect for when links are clicked
	$('.anchorLink').on('click',function(event){
		event.preventDefault();

		$('html body').animate({
			scrollTop: $($.attr(this,'href')).offset().top
		},500);
	});

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
		this.name='cormac';
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