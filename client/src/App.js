import { Routes, Route } from 'react-router-dom';
import './App.css';

// pages
import { Home, Blogs, Teams } from './pages';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<Home />}/>
        <Route path='blogs' element={<Blogs/>} />
        <Route path='team' element={<Teams/>}/>
      </Routes>
    </div>
  );
}

export default App;
