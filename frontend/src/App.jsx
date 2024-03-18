import "./App.css";
import { Routes, Route } from "react-router-dom";
import BuchungForm from '../pages/BuchungForm';
import NewCar from '../pages/newCar';
import LandingPage from '../pages/LandingPage';

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} /> {/* Startseite */}
        <Route path="/buchungen" element={<BuchungForm />} /> {/* Buchungen */}
        <Route path="/buchungen/:id" element={""} /> {/* Buchunge Details */}
        <Route path="/autos" element={""} /> {/* Autos */}
        <Route path="/autos/:id" element={""} /> {/* Auto Details */}
        <Route path='/autos/neu' element={<NewCar />} /> {/* Auto Details */}
      </Routes>
    </>
  );
}

export default App;
