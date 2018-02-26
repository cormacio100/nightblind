//  Factory for retrieving info on members of the band
SectionControllers.factory('MemberFactory',function($http){
    // create empty factory object
    var factory = {};
    factory.getMembers = function(){
        //return members;

        $http({method: 'GET', url: 'http://nightblind.herokuapp.com/band_members/'}).
            success(function(data, status, headers, config) {
                //set view model or do something.
                console.log("API Call Success");
                console.log('data is ');
                console.log(data);

                console.log('the number of items in the JSON array is ');
                console.log(data.length);

                console.log('Member 3 instrument is ');
                console.log(data[2].instrument);

                //return data;


                membersArr = []
                //data.forEach(function(element) { 
                  //  membersArr.push(element[1]);
                //});
                $.each(data,function(index,value){
                    membersArr.push(value);
                });

                console.log('Printing out MembersArr');
                for(var i=0; i<membersArr.length;i++){
                    console.log(membersArr[i]);
                }


                return membersArr;

                //var membersArr = [];
                //for(var i=0;i<data.length;i++){
                //   membersArr[i]=data[i];
                //}

                //console.log('the of items in the Members  Arr  is ');
                //console.log(membersArr.length);


                //console.log('Member 0 Name is ');
                //console.log(membersArr[0].name);
                /**
                 * CHECK DOES DATA NEED TO BE CONVERTED BEFORE IT CAN BE USED
                 *
                 */

                //var parsed = JSON.parse(data);
                
                //for(var x in parsed){
                  //  members.push(parsed[x]);
                //}

                //return membersArr;
            }).
            error(function(data, status, headers, config) {
                console.log("API Call Error");
                console.log("returning default Mmeber details");
                return members
            });
    };
    return factory;
});

//  Factory for retrieving info on gig prices and availability
SectionControllers.factory('PricesAndAvailabilityFactory',function(){
    var factory = {};
    factory.getPriceList = function(){
        return priceList;
    }
    factory.getDatesBooked = function(){
        return datesBooked;
    }
    factory.setBooking = function(date,request){
        var booking = {};
        booking.date = date;
        booking.specialRequirements = request;
        if(datesBooked.push(booking)){
            return true;
        }else{
            return false;
        }
    }
    return factory;
});

