import { Routes, Route } from 'react-router-dom';
import './App.css';

// pages
import { Home, Blogs } from './pages';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<Home />}/>
        <Route path='blogs' element={<Blogs/>} />
      </Routes>
    </div>
  );
}

export default App;
