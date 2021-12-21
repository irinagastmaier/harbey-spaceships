import { Route, Routes } from 'react-router-dom';
import Home from '../components/app/Home';
import NotFound from '../components/app/NotFound';

const Routing = () => (
  <Routes>
    <Route exact path="/" element={<Home />} />
    <Route element={<NotFound />} />
  </Routes>
);

export default Routing;
