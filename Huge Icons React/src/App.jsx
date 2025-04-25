import React from 'react'
import { Home01Icon,UserIcon,Search01Icon,BoatIcon} from "hugeicons-react";
import { MarketingIcon,Motorbike01Icon,BatteryEmptyIcon } from "hugeicons-react";
const App = () => {
  return (
    <div style={{ padding: '40px', textAlign: 'center' }}>
    <h2>HugeIcons React Demo</h2>
    <div style={{ fontSize: '48px', display: 'flex', justifyContent: 'center', gap: '30px', marginTop: '20px' }}>
      <Home01Icon color="#4f46e5" />
      <UserIcon color="#059669" />
      <Search01Icon color="#f59e0b" />
      <MarketingIcon color="pink" size={50} /> 
      <Motorbike01Icon color="red" /> 
      <BoatIcon color="yellow" size={20} /> 
      <BatteryEmptyIcon color="black" size={20} /> 
    </div>
  </div>
  )
}

export default App