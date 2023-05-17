import React from 'react';
import Hero from './Components/Hero';
import Guide from './Components/Guide';
import Services from './Components/Services/Services';
import Profesionales from './Components/profesionales/Profesionales';
import Esquema from './Components/Esquema';
import Companies from './Components/Companies';
import FAQ from './Components/FAQ';
import Formulario from './Components/formulario/Formulario';
import Footer from './Components/Footer';

const LandingPage = () => {
    return (
        <>
            <Hero />
            <Guide />
            <Services />
            <Profesionales  />
            <Esquema />
            <Companies />
            <FAQ />
            <Formulario />
            <Footer />
        </>
    );
};

export default LandingPage;
