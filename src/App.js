// import Home from "./pages/Home";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Team from "./pages/Team";
import TeamMember from "./components/Team/TeamMember";
import PracticeArea from "./pages/PracticeAreas";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Error from "./pages/Error";

function App() {
  return (
    <div className="App">
      <div className="">
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/team" element={<Team />} />
            <Route exact path="/team/:id" element={<TeamMember />} />
            <Route exact path="/practice-areas" element={<PracticeArea />} />
            <Route exact path="/about-us" element={<AboutUs />} />
            <Route exact path="/contact-us" element={<ContactUs />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
