import React from "react";
import { Link as ScrollLink } from "react-scroll";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import CustomButton from "./CustomButton";

// Importamos los estilos compartidos
import {
    GuideContainer,
    GuideBox,
    ImageContainer,
    GuidesBox,
} from "./SharedStyles";

import formIcon from "../media/formIcon.png";
import verifyIcon from "../media/verifyIcon.png";
import encuentroIcon from "../media/encuentroIcon.png";
import { Typography, Box } from "@mui/material";

const guideData = [
    {
        icon: formIcon,
        title: "Completar Solicitud de Consulta",
        linkText: "Ver Formulario de Consulta",
        linkTo: "Contacto",
    },
    {
        icon: verifyIcon,
        title: "Verificación de Datos Personales y Antecedentes Clínicos",
        linkText: "Ver Formulario de Consulta",
        linkTo: null,
    },
    {
        icon: encuentroIcon,
        title: "Primer Encuentro Virtual Bioquímico-Médico-Paciente",
        linkText: "Ver Formulario de Consulta",
        linkTo: null,
    },
];

const Guide = () => {
    const renderGuides = () => {
        return guideData.map((guide, index) => (
            <GuideBox key={index}>
                <ImageContainer>
                    <img src={guide.icon} alt="guideIcon" style={{ width: "100px" }} />
                </ImageContainer>
                <Typography variant="body2" sx={{ fontWeight: "500", fontSize: "20px", color: "#3B3c45", my: 1 }}>
                    {guide.title}
                </Typography>
                {guide.linkTo && (
                    <Box sx={{ cursor: "pointer", display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <ScrollLink to={guide.linkTo} smooth={true} duration={500}>
                            <Typography variant="body2" sx={{ fontWeight: "bold", fontSize: "14px", color: "#0689FF" }}>
                                {guide.linkText}
                            </Typography>
                        </ScrollLink>
                        <ArrowRightAltIcon style={{ color: "#0689FF" }} />
                    </Box>
                )}
            </GuideBox>
        ));
    };

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                mb: 2,
            }}
            id="Metodologia"
        >
            <div
                style={{
                    width: "5%",
                    height: "5px",
                    backgroundColor: "#000339",
                    margin: "0 auto",
                }}
            ></div>

            <Typography variant="h3" sx={{ fontSize: "35px", fontWeight: "bold", color: "#000339", textAlign: "center", my: 3 }}>
                ¿Cuáles son los pasos?
            </Typography>

            {/* Utilizamos el componente GuideContainer que hemos creado */}
            <GuideContainer>
                <Typography variant="body2" sx={{ fontSize: "16px", fontWeight: "500", color: "#5A6473", textAlign: "center" }}>
                    ¡Todo lo que necesitas saber para realizar una consulta virtual en Metabolom!
                </Typography>
            </GuideContainer>

            {/* Utilizamos el componente GuidesBox que hemos creado */}
            <GuidesBox>{renderGuides()}</GuidesBox>

            <ScrollLink to="Esquema" smooth={true} duration={500}>
                <CustomButton backgroundColor="#0F1B4C" color="#fff" buttonText="Ver Guia Completa" guideBtn={true} />
            </ScrollLink>
        </Box>
    );
};

export default Guide;
