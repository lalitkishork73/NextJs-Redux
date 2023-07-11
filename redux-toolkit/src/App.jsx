import Profile from "./components/profile";
import Navbar from './components/Navbar';
import { Routes, BrowserRouter, Route } from "react-router-dom";
import OnlineProf from './components/OnlineProf'

function App() {
  return (
    <>
      <BrowserRouter>
        <h1>Redux Toolkit</h1>
        <Navbar />
        <Routes>
          <Route path="/" element={<Profile />} />
          <Route path="/fetch" element={<OnlineProf />} />
        </Routes>
      </BrowserRouter>



    </>
  );
}

export default App;
