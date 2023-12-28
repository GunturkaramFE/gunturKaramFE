import './App.css';
import { BrowserRouter, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Landing_page from './components/landingPage';
import { useEffect } from 'react';
function App() {
 
 useEffect(()=>console.log("app-loaded"),[])  
return (
<>
      <BrowserRouter>
      <Routes>
        <Route  path="/" element={<Landing_page/>}/>      
   
      </Routes>
      </BrowserRouter>     
            
</>
  );
}

export default App;
