import Footer from './components/app/Footer';
import Loading from './components/common/Loading';
import Nav from './components/app/navbar';
import Routing from './routes';

function App() {
  return (
    <div className="App">
      <Nav />
      <Routing />
      <Footer />
    </div>
  );
}

export default App;
