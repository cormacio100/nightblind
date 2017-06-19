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

var datesBooked = [
    {date:'2017-06-30',specialRequirements:'Play the Beatles'},
    {date:'2017-07-01',specialRequirements:'Jimi Hendrix'},
    {date:'2017-07-12',specialRequirements:'No Jazz'},
    {date:'2017-07-22',specialRequirements:'Plenty of Rock'},
    {date:'2017-07-28',specialRequirements:'Disco'},
    {date:'2017-08-08',specialRequirements:'Folk and Country'},
    {date:'2017-08-17',specialRequirements:'Tuxedos required'},
    {date:'2017-08-18',specialRequirements:'None'},
    {date:'2017-12-31',specialRequirements:'None'}
];

var priceList =[
    {dayOfWeek: 'Sunday',price:700, setLength:1},
    {dayOfWeek: 'Sunday',price:1000, setLength:2},
    {dayOfWeek: 'Sunday',price:1500, setLength:3},
    {dayOfWeek: 'Monday',price:400, setLength:1},
    {dayOfWeek: 'Monday',price:500, setLength:2},
    {dayOfWeek: 'Monday',price:800, setLength:3},
    {dayOfWeek: 'Tuesday',price:400, setLength:1},
    {dayOfWeek: 'Tuesday',price:500, setLength:2},
    {dayOfWeek: 'Tuesday',price:800, setLength:3},
    {dayOfWeek: 'Wednesday',price:400, setLength:1},
    {dayOfWeek: 'Wednesday',price:500, setLength:2},
    {dayOfWeek: 'Wednesday',price:800, setLength:3},
    {dayOfWeek: 'Thursday',price:500, setLength:1},
    {dayOfWeek: 'Thursday',price:700, setLength:2},
    {dayOfWeek: 'Thursday',price:1000, setLength:3},
    {dayOfWeek: 'Friday',price:1000, setLength:1},
    {dayOfWeek: 'Friday',price:1500, setLength:2},
    {dayOfWeek: 'Friday',price:2000, setLength:3},
    {dayOfWeek: 'Saturday',price:1100, setLength:1},
    {dayOfWeek: 'Saturday',price:1600, setLength:2},
    {dayOfWeek: 'Saturday',price:2500, setLength:3},
];

var weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]

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