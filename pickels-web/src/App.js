import './App.css';
import { BrowserRouter, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Landing_page from './components/landingPage';
import { useEffect } from 'react';
import Verifydiv from './Authorization/Verifydiv';
function App() {
 
return (
<>
      <BrowserRouter>
      <Routes>
        <Route  path="/" element={<Landing_page/>}/>    
        <Route path='/verify' element={<Verifydiv/>} />
      </Routes>
      </BrowserRouter>                 
</>
  );
}

export default App;
