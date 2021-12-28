import { useEffect } from 'react';
import Footer from './components/app/Footer';
import Nav from './components/app/navbar';
import Routing from './routes';

function App() {
  //  useEffect(() => {
  //    localStorage.clear();
  //  }, []);

  return (
    <div className="App">
      <Nav />
      <Routing />
      <Footer />
    </div>
  );
}

export default App;
