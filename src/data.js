// Synthetic Bengaluru demo dataset. These are not official measurements or predictions.
export const initialHotspots = [
 {id:'H-001',name:'Majestic Bus Station',area:'Gandhi Nagar',lat:12.9767,lng:77.5713,risk:87,rain:82,elevation:'Low',cause:'Blocked drain + low elevation + heavy rainfall scenario',status:'Monitoring',history:'Frequent waterlogging (demo)',ward:'Chickpet'},
 {id:'H-002',name:'Silk Board Junction',area:'BTM / HSR Link',lat:12.9177,lng:77.6233,risk:93,rain:91,elevation:'Low',cause:'Underpass exposure + drainage capacity scenario',status:'Monitoring',history:'Recurring traffic disruption (demo)',ward:'Bilekahalli'},
 {id:'H-003',name:'Koramangala 80 Feet Road',area:'Koramangala',lat:12.9352,lng:77.6245,risk:74,rain:68,elevation:'Medium',cause:'Drain obstruction + intense rainfall scenario',status:'Monitoring',history:'Localized waterlogging (demo)',ward:'Jayanagar'},
 {id:'H-004',name:'Indiranagar 100 Feet Road',area:'Indiranagar',lat:12.9784,lng:77.6408,risk:38,rain:45,elevation:'Medium',cause:'Surface runoff scenario',status:'Monitoring',history:'No recent demo incident',ward:'Hoysala Nagar'},
 {id:'H-005',name:'KR Market',area:'Kalāsipālya',lat:12.9634,lng:77.5785,risk:81,rain:78,elevation:'Low',cause:'Dense catchment + drain capacity scenario',status:'Under Maintenance',history:'Water accumulation (demo)',ward:'Dharmaraya Swamy Temple'},
 {id:'H-006',name:'Whitefield Main Road',area:'Whitefield',lat:12.9698,lng:77.7499,risk:29,rain:35,elevation:'Medium',cause:'Moderate runoff scenario',status:'Monitoring',history:'No recent demo incident',ward:'Whitefield'},
 {id:'H-007',name:'Hebbal Flyover',area:'Hebbal',lat:13.0358,lng:77.5970,risk:66,rain:72,elevation:'Low',cause:'Road depression + rainfall scenario',status:'Monitoring',history:'Roadside waterlogging (demo)',ward:'Hebbal'},
 {id:'H-008',name:'Yelahanka New Town',area:'Yelahanka',lat:13.1007,lng:77.5963,risk:21,rain:26,elevation:'High',cause:'Lower simulated runoff exposure',status:'Monitoring',history:'No recent demo incident',ward:'Yelahanka'}
];
export const initialReports = [
 {id:'JR-1042',name:'Anonymous citizen',hazard:'Waterlogging',location:'Silk Board Junction',description:'Demo report: water accumulating near the service road.',status:'Under Review',createdAt:Date.now()-1000*60*24},
 {id:'JR-1041',name:'Resident',hazard:'Clogged drain',location:'Koramangala 80 Feet Road',description:'Demo report: drain cover appears blocked by debris.',status:'Submitted',createdAt:Date.now()-1000*60*90},
 {id:'JR-1039',name:'Anonymous citizen',hazard:'Broken infrastructure',location:'KR Market',description:'Demo report: damaged roadside drain cover.',status:'Resolved',createdAt:Date.now()-1000*60*60*20}
];
export const initialAlerts = [
 {level:'HIGH',title:'Elevated demo risk scenario near Silk Board',time:'Just now',text:'Risk score 93/100 · simulated rainfall scenario'},
 {level:'HIGH',title:'Majestic hotspot requires preventive inspection',time:'8 min ago',text:'Risk score 87/100 · low-elevation factor'},
 {level:'MEDIUM',title:'Koramangala drain inspection recommended',time:'21 min ago',text:'Risk score 74/100 · demo maintenance signal'},
 {level:'INFO',title:'KR Market preventive task in progress',time:'35 min ago',text:'Status updated to Under Maintenance'}
];