

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
});