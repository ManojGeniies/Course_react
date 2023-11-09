import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./Pages/LandingPage/LandingPage";
import { useState } from "react";
import Sidebar from "./Components/Sidebar/Sidebar";
import Navbar from "./Components/Navbar/Navbar";
import Introduction from "./Pages/Introduction/Introduction";
import LearningObjectives from "./Pages/LearningObjectives/LearningObjectives";
import Types from "./Pages/Types/Types";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const w3_open = () => {
    setSidebarOpen(true);
  };

  const w3_close = () => {
    setSidebarOpen(false);
  };

  return (
    <>
      <BrowserRouter>
        <Sidebar sidebarOpen={sidebarOpen} />

        <div style={{ marginLeft: sidebarOpen ? "25%" : "0" }}>
          <Navbar
            w3_open={w3_open}
            sidebarOpen={sidebarOpen}
            w3_close={w3_close}
          />

          <div className="Player-container">
            <div className="player-content-division">
              <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="introduction" element={<Introduction />} />
                <Route
                  path="learningObjectives"
                  element={<LearningObjectives />}
                />
                <Route path="types" element={<Types />} />
              </Routes>
            </div>
            <div className="Player-btns-container">
              <i class="fa-solid fa-backward"></i>
              <i class="fa-solid fa-play"></i>
              <i class="fa-solid fa-forward"></i>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
