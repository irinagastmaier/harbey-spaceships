import { Route, Routes } from 'react-router-dom';
import Home from './components/app/Home';
import NotFound from './components/app/NotFound';

function App() {
  return (
    <div className="App">
      <h1>Harbey Spacehips</h1>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
