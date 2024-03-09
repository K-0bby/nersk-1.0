import './index.css';
import Index from './pages/index'
import Services from './components/Services'
import Software from './components/software'
import Ai from './components/Ai'
import Footer from './components/footer'

function App() {
  return (
    <div className="App">
      <Index />
      {/* <br /> */}
      <Services />
      <Software />
      <Ai />
      <Footer /> 
    </div>
  );
}

export default App;
