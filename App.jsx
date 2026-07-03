import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Navbar";
import Footer from "./Footer";
import Home from "./Home";
import About from "./About";
import Search from "./Search";
import Hotels from "./Hotels";
import RoutePage from "./Route";
import Estimation from "./Estimation";
import Login from "./Login";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-[#eef1f6] text-[#1e2a3a] font-sans leading-relaxed">

        <Navbar />

        <main className="flex-1">
          <Routes>

            {}
            <Route path="/login" element={<Login />} />

            {}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/search" element={<Search />} />
            <Route path="/hotels" element={<Hotels />} />
            <Route path="/route" element={<RoutePage />} />
            <Route path="/estimation" element={<Estimation />} />

          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;