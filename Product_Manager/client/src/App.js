import './App.css';
import{BrowserRouter, Routes, Route} from'react-router-dom';
import Main from './views/Main';
import Detail from './views/Detail';
import Update from './components/Update';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<Main/>} path="/" default/>
          <Route element={<Detail/>} path="/detail/:id"/>
          <Route element={<Update/>} path="/update/:id"/>
        </Routes>
      </BrowserRouter>
    </div>
  ) 
}

export default App;
