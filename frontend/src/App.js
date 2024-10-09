import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Admin from './admin/Admin';
import Newcourse from './admin/Newcourse';
import Course from './pages/Course';
import Coursechapter from './admin/Coursechapter';
import Coursetopic from './admin/Coursetopic';
import Chapterupdate from './admin/Chapterupdate';
import Topicupdate from './admin/Topicupdate';

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
          <Route path='/coursechapter' element={<Coursechapter />} />
          <Route path='/coursetopic' element={<Coursetopic />} />
          <Route path='/chapterupdate/:id' element={<Chapterupdate />} loader={({params}) => fetch(`http://localhost:5000/chapterupdate/${params.id}`)}/>
          <Route path='/topicupdate/:id' element={<Topicupdate />} loader={({params}) => fetch(`http://localhost:5000/topicupdate/${params.id}`)}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
