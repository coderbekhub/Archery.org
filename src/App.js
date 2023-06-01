import './Global.scss';
import './Responsive.scss';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Federation from './Pages/Federation';
import Gallary from './Pages/Gallary';
import Musobaqa from './Pages/Musobaqa';
import News from './Pages/News';
import Contact from './Pages/Contact';
// import ErrorPage from './Pages/ErrorPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/federation' element={<Federation />}/>
        <Route path='/gallary' element={<Gallary />}/>
        <Route path='/musobaqa' element={<Musobaqa />}/>
        <Route path='/news' element={<News />}/>
        <Route path='/contact' element={<Contact />}/>
        {/* <Route path='*' element={<ErrorPage />}/> */}
      </Routes>
    </div>
  );
}

export default App;
