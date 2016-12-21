angular.module('MemberService',[])
	.factory('MemberAPIService',function($http){

			// no API currently exists so will pass back 
			// array of band member objects 
			var cormacObj = {
				title: 'cormacObj',
				name: 'Cormac Liston',
				instrument: 'Guitar / Vocals',
				gear: 'Fender Blacktop Stratocaster HH, Epiphone Les Paul - Zakk Wylde Custom, Vox AC30 VR'
			};
			var hughObj = {
				title: 'hughObj',
				name: "Hugh O'Connor",
				instrument: 'Guitar / Vocals',
				gear: 'Fender Stratocaster, Vox AC30 VR'
			};
			var davyObj = {
				title: 'davyObj',
				name: 'Davy Dwyer',
				instrument: 'Drums',
				gear: 'Peavy, Paiste - Nicko McBrain Custom'
			};
			var freekObj = {
				title: 'freekObj',
				name: 'Freek Vermeer',
				instrument: 'Bass',
				gear: 'Fender Jazz Bass, Trace Elliot GP12'
			};

			MemberAPIService = {
					retrieveMembers: function(url,data){

					console.log('data name passed to API is '+data.name);

					var name = data.name;

					if('cormac'==name){
						return cormacObj;
					}else if('hugh'==name){
						return hughObj;
					}else if('davy'==name){
						return davyObj;
					}else if('freek'==name){
						return freekObj;
					}

					// convert object to json
					//return JSON.stringify(cormacObj);

					
				}
			};

			return MemberAPIService;
	});