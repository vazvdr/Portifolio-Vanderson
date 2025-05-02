import React from "react";
import Contact from "./Pages/Contact";
import Experiencias from "./Pages/Experiencias";
import Header from "./Pages/Header";
import Projetos from "./Pages/Projetos";
import Sobre from "./Pages/Sobre";
import Tecnologias from "./Pages/Tecnologias";
import Footer from "./Pages/Footer";
import Formacao from "./Pages/Formacao";

function App() {
    return (
        <div style={{ position: "relative", overflow: "hidden", minHeight: "100vh" }}>
            <Header />
            <Sobre />
            <Formacao />
            <Experiencias />
            <Tecnologias />
            <Projetos />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;
