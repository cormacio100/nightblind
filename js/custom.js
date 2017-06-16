

var hideMemberDivs = function(whichMember){
	console.log('hiding members');
    var hideArr=['cormac','hugh','davy','freek'];
    // hide divs

        console.log('hiding all');


    console.log('hidden all');

};


// function hides details of band members
var hideMembers = function(obj){

	console.log('object name is '+obj.name);

	var name = obj.name;

	var hideArr = [];

	// build the relavant array for hiding divs
	if('allMembers' == name){
		console.log('all hidden');
		hideArr=['cormac','hugh','davy','freek'];
	}else if('cormac' == name){
        console.log('show cormac');
		hideArr=['hugh','davy','freek'];
	}else if('hugh' == name){
        console.log('show hugh');
		hideArr=['cormac','davy','freek'];
	}else if('davy' == name){
        console.log('show davy');
		hideArr=['cormac','hugh','freek'];
	}else if('freek' == name){
        console.log('show freek');
		hideArr=['cormac','hugh','davy'];
	}

	// hide divs
	$.each(hideArr,function(index,value){

		var hideDiv = value+'_details';

		console.log('hide div '+hideDiv);

		$('#'+hideDiv).hide();
	});
};

// on page load
$(document).ready(function(){
	console.log('page loaded');


    //$('#member_details').hide();

    //hideMemberDivs('all');
    //$('#cormac_details').hide();
    //$('#hugh_details').hide();
    //$('#davy_details').hide();
    //$('#freek_details').hide();

    //$( "#accordion" ).accordion();

   /* $('#cormacThumb').click(function(){

        console.log('cormac clicked')
        //this.name='cormac';

        // need to hide relevant divs for other members
        //hideMembers(this);
        //$('#cormac').slideToggle();
        $('#cormac').hide();
    });*/


	/*
	* When page loads - hide all members
	* When a thumb is clicked display details for that member.
	* 	-	Add the member name to an array or variable
	* When another thumb is clicked check the variable and hide the old member. Show the new.
		* When thumb is clicked again, toggle the members visibility
	*
	*
	* */

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
	/*var obj = {
		name:'allMembers'
	};*/


	/*$('#members').click(function{
		this.name='allMembers';
		hideMembers(this);
		$('#cormac').slideToggle();
	});*/

	/*
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
*/
});