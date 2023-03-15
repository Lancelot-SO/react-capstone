import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Details from './components/Details';
import Home from './components/Home';
import Navbar from './components/Navbar';

function App() {
  return (

    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail" element={<Details />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
