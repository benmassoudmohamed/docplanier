import React from 'react';
import Navmenu from'./component/Navmenu';
import Section1 from './component/section1';
import Section2 from './component/section2';
import Section3 from './component/section3';
import Section4 from './component/section4';
import Section5 from './component/section5';
import Section6 from './component/section6';
import Coleur from './component/coleur';
import './App.css';
function App() {
  return (<div>
     <Navmenu/>
     <Section1/>
     <Section2/>
     <Coleur/>
     <Section3/>
     <Section4/>
     <Section5/>
     <Section6/>
   
  </div>
    
  );
}

export default App;
