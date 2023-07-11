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
import Ct from './components/Confe'
import Attend from './components/Attend';
function App() {


  return (
    <div className="App">
      <NavBar/>
     <div>
      <Corousel/>
      <Ct/>
      <Attend/>
      <About/>
      
      <Speaker/>
      <Timeline/>
      <Map/>
    <Footer/>
      </div>

     
    </div>
  );
}

export default App;
