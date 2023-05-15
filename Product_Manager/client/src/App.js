import './App.css';
import{BrowserRouter, Routes, Route} from'react-router-dom';
import Main from './views/Main';
import Detail from './views/Detail';
function App() {
  return (
    <div>
      <Main/>
      <Detail/>
      <BrowserRouter>
        <Routes>
          <Route element={<Main/>} path="api/products/" default/>
          <Route element={<Detail/>} path="api/products/:id"/>
        </Routes>
      </BrowserRouter>
    </div>
  ) 
}

export default App;
