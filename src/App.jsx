import Contact from "./pages/Contact";
import Experiencias from "./pages/Experiencias";
import Header from "../src/pages/Header";
import Projetos from "./pages/Projetos";
import Sobre from "./pages/Sobre";
import Tecnologias from "./pages/Tecnologias";
import Footer from "./pages/Footer";
import Formacao from "./pages/Formacao";

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
