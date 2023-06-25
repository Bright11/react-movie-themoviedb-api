import './App.css';
import MyHistory from "./componets/History";
import Movie from './componets/Movie';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import MovieDtails from './componets/MovieDtails';
import Navbar from './componets/Navbar';
function App() {
  return (
    <div className="App">
      {/* <MyHistory /> */}
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Movie />} />
          <Route path='details/:details' element={<MovieDtails/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
