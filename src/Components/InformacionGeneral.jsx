import React from "react";
import { CustomBox, CustomContainer, CustomTypografy } from "./SharedStyles"; // Asegúrate de que la importación tenga el nombre correcto

import logoImg from "../media/logonuevo.png";
import manosChicoImg from "../media/hermanosJugandoImg.jpg";

const InformacionGeneral = () => {
    return (
        <CustomBox img={manosChicoImg}>
            <CustomContainer>
                <img src={logoImg} alt="logo" />
                <CustomTypografy variant="body2" sx={{ mb: 10, mt: 5 }}>
                        Metabolom brinda un servicio multidisciplinario bioquímico-médico-nutricionista para la investigación y diagnóstico de Enfermedades Metabólicas Congénitas y Adquiridas en pacientes neonatos, niños y adultos.<br></br>
                        En Metabolom trabajamos en equipo para mejorar la calidad de vida.<br></br>
                        Mediante el estudio de análisis específicos personalizados y la integración con el control clínico, investigamos hasta llegar al Diagnóstico de la condición o patología.<br></br>
                        Los encuentros se realizan mediante una plataforma de comunicación virtual."
                </CustomTypografy>
            </CustomContainer>
        </CustomBox>
    );
};

export default InformacionGeneral;
