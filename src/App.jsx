import Hero from "./Components/Hero";
import Companies from "./Components/Companies";
import Guide from "./Components/Guide";
import Services from "./Components/Services/Services";
import Esquema from "./Components/Esquema";

import FAQ from "./Components/FAQ";
import Formulario from "./Components/formulario/Formulario";
import Footer from "./Components/Footer";

function App() {
    return <>
        <Hero/>
        <Guide/>
        <Esquema/>
        <Companies/>
        <FAQ/>
        <Services/>
        <Formulario/>
        <Footer/>
    </>;
}

export default App;
