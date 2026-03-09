import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { SidebarProvider } from "./context/SidebarContext";
import LandingPage from "./pages/LandingPage";
import DetailsPage from "./pages/DetailsPage";

function App() {
  return (
    <BrowserRouter>
      <SidebarProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/city/:id" element={<DetailsPage />} />
        </Routes>
      </SidebarProvider>
    </BrowserRouter>
  );
}

export default App;