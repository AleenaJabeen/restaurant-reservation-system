import About from './components/HomeComponents/About';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Reserve from './components/ReservationComponents/reserve'
import Home from './components/HomeComponents/Home';
import CheckHistory from './components/ReservationsHistoryComponents/checkHistory';
import Layout from './components/Layout';
function App() {
  return(
  <BrowserRouter>
  <Layout>
  <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/#about" element={<About/>} />
      <Route path="/checkHistory" element={<CheckHistory />} />
      <Route path="/reserve" element={<Reserve/>} />

  </Routes>
  </Layout>
</BrowserRouter>
  );
}

export default App;
