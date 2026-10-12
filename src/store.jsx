import React,{createContext,useContext,useEffect,useState} from 'react';
import {initialHotspots,initialReports,initialAlerts} from './data';
const Store=createContext(null);
function read(key,fallback){try{const v=localStorage.getItem(key);return v?JSON.parse(v):fallback}catch{return fallback}}
export function StoreProvider({children}){
 const [hotspots,setHotspots]=useState(()=>read('jr_hotspots',initialHotspots));
 const [reports,setReports]=useState(()=>read('jr_reports',initialReports));
 const [alerts,setAlerts]=useState(initialAlerts);
 useEffect(()=>localStorage.setItem('jr_hotspots',JSON.stringify(hotspots)),[hotspots]);
 useEffect(()=>localStorage.setItem('jr_reports',JSON.stringify(reports)),[reports]);
 const addReport=(report)=>{setReports(prev=>[{...report,id:`JR-${Math.floor(1000+Math.random()*9000)}`,createdAt:Date.now(),status:'Submitted'},...prev]);setAlerts(prev=>[{level:'INFO',title:'New citizen report submitted',time:'Just now',text:`${report.hazard} · ${report.location}`},...prev].slice(0,8))};
 const schedule=(id)=>{const target=hotspots.find(h=>h.id===id);setHotspots(prev=>prev.map(h=>h.id===id?{...h,status:'Under Maintenance'}:h));setAlerts(prev=>[{level:'MEDIUM',title:`Preventive action scheduled: ${target?.name||id}`,time:'Just now',text:'Hotspot status changed to Under Maintenance'},...prev].slice(0,8))};
 const resolveReport=(id)=>setReports(prev=>prev.map(r=>r.id===id?{...r,status:r.status==='Resolved'?'Under Review':'Resolved'}:r));
 return <Store.Provider value={{hotspots,reports,alerts,addReport,schedule,resolveReport}}>{children}</Store.Provider>
}
export const useStore=()=>useContext(Store);