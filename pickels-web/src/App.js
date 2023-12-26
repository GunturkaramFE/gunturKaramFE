import './App.css';
import { BrowserRouter, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Landing_page from './components/landingPage';
function App() {
 
  
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
