import Home from './Components/Home';
import './Global.scss';
import './Responsive.scss';

function App() {
  return (
    <div className="App">
      <Home />
      <Routes>
        <Route path='/' element={ <Home /> }/>
        <Route path='/federation' element={ <Federation /> }/>
        <Route path='/team' element={<OurTeam />}/>
        <Route path='/contacts' element={<Contacts/>}/>
      </Routes>
    </div>
  );
}

export default App;
