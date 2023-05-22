import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Storeform from './components/Storeform';
import Storeupdate from './components/Storeupdate';
import Storecreate from './components/Storecreate';
import Storedetail from './components/Storedetail'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route element={<Storeform/>} path='/'/>
        <Route element={<Storedetail/>} path='/Storedetail/:id'/>
        <Route element={<Storecreate/>} path='/Storecreate'/>
        <Route element={<Storeupdate/>} path='/Storeupdate/:id'/>
      </Routes>      
      </BrowserRouter>
      
    </div>
  )
}

export default App;
