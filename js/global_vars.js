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