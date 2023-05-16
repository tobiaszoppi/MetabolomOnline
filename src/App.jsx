import Hero from "./Components/Hero";
import Companies from "./Components/Companies";
import Guide from "./Components/Guide";
import Services from "./Components/Services/Services";
import Esquema from "./Components/Esquema";

import FAQ from "./Components/FAQ";
import Formulario from "./Components/formulario/Formulario";
import Footer from "./Components/Footer";
import Profesionales from "./Components/profesionales/Profesionales";

function App() {
    return <>
        <Hero/>
        <Guide/>
        <Services/>
        <Profesionales/>
        <Esquema/>
        <Companies/>
        <FAQ/>
        <Formulario/>
        <Footer/>
    </>;
}

export default App;
