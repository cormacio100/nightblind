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
SectionControllers.factory('PricesAndAvailFactory',function(){
    var factory = {};
    factory.getPriceList = function(){
        return priceList;
    }
    factory.getDatesBooked = function(){
        return datesBooked;
    }
    return factory;
});

