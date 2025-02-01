import React from "react";
import Contact from "./Pages/Contact";
import Experiencias from "./Pages/Experiencias";
import Header from "./Pages/Header";
import Projetos from "./Pages/Projetos";
import Sobre from "./Pages/Sobre";
import Tecnologias from "./Pages/Tecnologias";
import MovingRays from "./components/MovingRays";
import Footer from "./Pages/Footer";

function App() {
    return (
        <div style={{ position: "relative", overflow: "hidden", minHeight: "100vh" }}>
            <MovingRays/>
            <div style={{ position: "relative", zIndex: 1 }}>
                <Header />
                <Sobre />
                <Experiencias />
                <Tecnologias />
                <Projetos />
                <Contact />
                <Footer />
            </div>
        </div>
    );
}

export default App;
