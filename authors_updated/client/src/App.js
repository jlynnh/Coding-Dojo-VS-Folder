import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Authorform from './components/Authorform';
import Authorcreate from './components/Authorcreate';
import Authorupdate from './components/Authorupdate';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route element={<Authorform/>} path="/" default/>
        <Route element={<Authorcreate/>} path="/create" default/>
        <Route element={<Authorupdate/>} path="/update/:id" default/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
