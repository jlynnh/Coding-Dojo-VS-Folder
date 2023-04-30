import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './Components/Home';
import Everything from './Components/Everything';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/Home" element={<Home/>}/> 
        <Route path="/:word/:color/:bgCol" element={<Everything/>}/> 
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
