import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { SidebarProvider } from "./context/SidebarContext";
import DetailsPage from "./pages/DetailsPage";
import LandingPage from "./pages/LandingPage";

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