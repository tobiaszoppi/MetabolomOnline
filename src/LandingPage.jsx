import React from 'react';
import Hero from './Components/Hero';
import Guide from './Components/Guide';
import Services from './Components/Services/Services';
import Profesionales from './Components/profesionales/Profesionales';
import Esquema from './Components/Esquema';
import InformacionGeneral from './Components/InformacionGeneral';
import FAQ from './Components/FAQ';
import Formulario from './Components/formulario/Formulario';
import Especializaciones from "./Components/Services/Especializaciones";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

const LandingPage = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <Guide />
            <Profesionales  />
            <Services />
            <Esquema />
            <InformacionGeneral />
            <Especializaciones />
            <Formulario />
            <FAQ />
            <Footer/>
        </>
    );
};

export default LandingPage;
