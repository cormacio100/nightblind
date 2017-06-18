// CREATE AN ARRAY to hold the CONTROLLERS for the module
var SectionControllers = angular.module('SectionControllers',[]);

var links = [
    {title:'Home',href:'home'},
    {title:'About',href:'home?scrollTo=about'},
    {title:'Members',href:'home?scrollTo=member'},
    {title:'Gallery',href:'home?scrollTo=gallery'},
    {title:'Music',href:'home?scrollTo=music'},
    {title:'Video',href:'home?scrollTo=video'},
    {title:'Contact',href:'home?scrollTo=contact'},
];

var priceList =[
    {dayOfWeek: 'Sunday',price:700, hourToPlay:1},
    {dayOfWeek: 'Sunday',price:1000, hourToPlay:2},
    {dayOfWeek: 'Sunday',price:1500, hourToPlay:3},
    {dayOfWeek: 'Monday',price:400, hourToPlay:1},
    {dayOfWeek: 'Monday',price:500, hourToPlay:2},
    {dayOfWeek: 'Monday',price:800, hourToPlay:3},
    {dayOfWeek: 'Tuesday',price:400, hourToPlay:1},
    {dayOfWeek: 'Tuesday',price:500, hourToPlay:2},
    {dayOfWeek: 'Tuesday',price:800, hourToPlay:3},
    {dayOfWeek: 'Wednesday',price:400, hourToPlay:1},
    {dayOfWeek: 'Wednesday',price:500, hourToPlay:2},
    {dayOfWeek: 'Wednesday',price:800, hourToPlay:3},
    {dayOfWeek: 'Thursday',price:500, hourToPlay:1},
    {dayOfWeek: 'Thursday',price:700, hourToPlay:2},
    {dayOfWeek: 'Thursday',price:1000, hourToPlay:3},
    {dayOfWeek: 'Friday',price:1000, hourToPlay:1},
    {dayOfWeek: 'Friday',price:1500, hourToPlay:2},
    {dayOfWeek: 'Friday',price:2000, hourToPlay:3},
    {dayOfWeek: 'Saturday',price:1100, hourToPlay:1},
    {dayOfWeek: 'Saturday',price:1600, hourToPlay:2},
    {dayOfWeek: 'Saturday',price:2500, hourToPlay:3},
];

var datesBooked = [

    {date:'30/06/2017'},
    {date:'01/07/2017'},
    {date:'12/07/2017'},
    {date:'22/07/2017'},
    {date:'28/07/2017'},
    {date:'08/08/2017'},
    {date:'17/08/2017'},
    {date:'18/08/2017'},
    {date:'31/12/2017'}
]



//  Data for the BAND MEMBERS section
var members = [
    {id:"cormac",shortname:"Cormac_Liston",
        name: "Cormac Liston",
        instrument: "Guitar / Vocals",
        gear: "Fender Blacktop Strat HH, Vox AC30 VR"
    },
    {
        id:"hugh",
        shortname:"Hugh_OConnor",
        name: "Hugh O'Connor",
        instrument: "Guitar / Vocals",
        gear: "Fender Strat, Vox AC30 VR"
    },
    {
        id:"davy",
        shortname:"Davy_Dwyer",
        name: "Davy Dwyer",
        instrument: "Drums",
        gear: "Peavy, Paiste Cymbols, Tama Drums"
    },
    {
        id:"freek",
        shortname:"Freek_Vermeer",
        name: "Freek Vermeer",
        instrument: "Bass",
        gear: "Fender Jazz Bass, Trace Elliot GP12"
    }
];