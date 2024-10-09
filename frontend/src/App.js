import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Admin from './admin/Admin';
import Newcourse from './admin/Newcourse';
import Course from './pages/Course';
import Chapter from './admin/Chapter';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/admin' element={<Admin />} />
          <Route path='/newcourse' element={<Newcourse />} />
          <Route path='/course' element={<Course />} />
          <Route path='/chapter' element={<Chapter />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
