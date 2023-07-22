
import './App.css';
import Home from './components/Home';
import View from './components/View';

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {


  return (
    <div className="App">
      <BrowserRouter>
        
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/viewPost/:id" element={<View />} />
        </Routes>

      </BrowserRouter>

    </div>
  );
}

export default App;
