import { Route, Routes } from 'react-router-dom';
import Home from '../components/app/Home';
import NotFound from '../components/app/NotFound';
import Ship from '../components/ships/Ship';

const Routing = () => (
  <Routes>
    <Route exact path="/" element={<Home />} />
    <Route path="/ship/:name" element={<Ship />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
);

export default Routing;
