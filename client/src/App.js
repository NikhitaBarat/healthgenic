import { Routes, Route, useLocation } from 'react-router-dom';
import './App.css';

// pages
import { Home, Blogs, Dashboard } from './pages';

// components
import { Header,Headerlight } from './components';



function App() {

  const location = useLocation()

  return (
    <div className="App">
      {location.pathname === "/" ? <Header/> : <Headerlight/>}
      <Routes>
        <Route index element={<Home />}/>
        <Route path='blogs' element={<Blogs/>} />
        <Route path='dashboard' element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
