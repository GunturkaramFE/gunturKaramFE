import './App.css';
import { BrowserRouter, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Landing_page from './components/landingPage';
import { useEffect } from 'react';
import Verifydiv from './Authorization/Verifydiv';
import ProductsContainer from './ProductStore/ProductsContainer';
function App() {
 
return (
<>
      <BrowserRouter>
      <Routes>
        <Route  path="/" element={<Landing_page/>}/>    

        <Route path='/verification' element={<Verifydiv/>} />
        <Route path='/Products' element={<ProductsContainer/>} />
//          <Route path='/verify' element={<Verifydiv/>} />

      </Routes>
      </BrowserRouter>                 
</>
  );
}

export default App;
