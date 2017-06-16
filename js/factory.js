SectionControllers.factory('MemberFactory',function($http){
    // location of data to be retrieved
    var url='js/data.json';
    // create empty factory object
    var factory = {};
    factory.getMembers = function(){
        return members;
    };
    return factory;
});
