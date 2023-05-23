import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Noteform from './components/Noteform';
import Notecreate from './components/Notecreate';
import Noteupdate from './components/Noteupdate';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route element={<Noteform/>} path='/'/>
        <Route element={<Notecreate/>} path='/notecreate'/>
        <Route element={<Noteupdate/>} path='/noteupdate/:id'/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
