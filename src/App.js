import Loading from './components/app/Loading';
import Nav from './components/navbar';
import Routing from './routes';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Loading />
      <Routing />
    </div>
  );
}

export default App;
