import "./App.css";
import { Routes, Route } from "react-router-dom";
import BuchungForm from '../pages/BuchungForm';
import NewCar from '../pages/NewCar';
import LandingPage from '../pages/LandingPage';
import SideBar from "../components/SideBar";
import Cars from "../pages/Cars";

function App() {

  return (
    <>
    <aside>
      <SideBar />
    </aside>
      <Routes>
        <Route path="/" element={<LandingPage />} /> {/* Startseite */}
        <Route path="/buchungen" element={<BuchungForm />} /> {/* Buchungen */}
        <Route path="/buchungen/:id" element={""} /> {/* Buchunge Details */}
        <Route path="/autos" element={<Cars />} /> {/* Autos */}
        <Route path="/autos/:id" element={""} /> {/* Auto Details */}
        <Route path='/autos/neu' element={<NewCar />} /> {/* Auto Details */}
      </Routes>
    </>
  );
}

export default App;
