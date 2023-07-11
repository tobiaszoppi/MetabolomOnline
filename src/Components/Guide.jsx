import { Box, Typography } from "@mui/material";
import React from "react";
import { Link as ScrollLink } from 'react-scroll';

import formIcon from "../media/formIcon.png";
import verifyIcon from "../media/verifyIcon.png";
import encuentroIcon from "../media/encuentroIcon.png";

import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import CustomButton from "./CustomButton";
import styled from "@mui/material/styles/styled";

const CustomBox = styled(Box)(({ theme }) => ({
    width: "30%",
    [theme.breakpoints.down("md")]: {
        width: "85%",
    },
}));

const GuidesBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-around",
    textAlign: "center",
    width: "80%",
    margin: theme.spacing(5, "auto"),
    [theme.breakpoints.down("md")]: {
        width: "100%",
    },
    [theme.breakpoints.down("sm")]: {
        flexDirection: "column",
    },
}));

const GuideBox = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "10px",
    maxWidth: "300px",
    marginTop: theme.spacing(5),
    [theme.breakpoints.down("sm")]: {
        margin: theme.spacing(2, 0),
        maxWidth: "100%",
    },
}));

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
        linkTo: "Contacto",
    },
    {
        icon: encuentroIcon,
        title: "Primer Encuentro Virtual Bioquímico-Médico-Paciente",
        linkText: "Ver Formulario de Consulta",
        linkTo: "Contacto",
    },
];

const Guide = () => {
    const renderGuides = () => {
        return guideData.map((guide, index) => (
            <GuideBox key={index}>
                <img src={guide.icon} alt="guideIcon" style={{ width: "100px" }} />
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

            <CustomBox>
                <Typography variant="body2" sx={{ fontSize: "16px", fontWeight: "500", color: "#5A6473", textAlign: "center" }}>
                    ¡Todo lo que necesitas saber para realizar una consulta virtual en Metabolom!
                </Typography>
            </CustomBox>

            <GuidesBox>
                {renderGuides()}
            </GuidesBox>

            <ScrollLink to="Esquema" smooth={true} duration={500}>
                <CustomButton
                    backgroundColor="#0F1B4C"
                    color="#fff"
                    buttonText="Ver Guia Completa"
                    guideBtn={true}
                />
            </ScrollLink>
        </Box>
    );
};

export default Guide;
