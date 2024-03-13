import './index.css';
import Home from './pages/Home'
import Services from './components/Services_Section/Services'
import Software from './components/Software_Section/software'
import Ai from './components/AI_Section/Ai'
import Footer from './components/Footer/footer'

function App() {
  return (
    <div className="App"> 
      <Home />
      <Services />
      <Software />
      <Ai />
      <Footer /> 
    </div>
  );
}

export default App;
