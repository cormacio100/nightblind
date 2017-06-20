//  Factory for retrieving info on members of the band
SectionControllers.factory('MemberFactory',function(){
    // create empty factory object
    var factory = {};
    factory.getMembers = function(){
        return members;
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

