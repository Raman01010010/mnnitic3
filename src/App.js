import logo from './logo.svg';
import './App.css';
import data from './data/data'
import Corousel from './component/Corousel';
import NavBar from './component/NavBar';
import one from './1.jpg'
import Timeline from './component/Timeline';
import Speaker from './component/Speakers';
import About from './component/About';
import Footer from './component/Footer';
import Map from './component/Map';
import Contacts from './component/Contacts';
import Colaborators from './component/Colaborators';
import Publications from './component/Punlications';
import Sessions from './component/Sessions';
import Organisers from './component/Organisers';
import Advisory from './component/Advisory';
function App() {


  return (
    <div className="App">
      <NavBar/>
     <div>
      <Corousel/>
      <About/>
      <Advisory/>
      <Organisers/>
      <Sessions/>
      <Publications/>
      <Speaker/>
      <Timeline/>
      <Colaborators/>
      <Map/>
      <Contacts/>
    <Footer/>

      </div>

     
    </div>
  );
}

export default App;
