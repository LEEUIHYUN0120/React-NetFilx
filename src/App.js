import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieDetail from './pages/MovieDetail';

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/movies/:id' element={<MovieDetail/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
