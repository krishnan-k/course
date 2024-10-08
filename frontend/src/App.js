import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Admin from './admin/Admin';
import Newcourse from './admin/Newcourse';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/course' element={<Admin />} />
          <Route path='/newcourse' element={<Newcourse />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
