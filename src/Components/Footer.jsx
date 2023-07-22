import React from "react";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import instagramIcon from "../media/instagramIcon.svg";
import gmailIcon from "../media/gmailIcon.svg";

// Importamos los estilos compartidos
import {FooterContainer, IconBox, FooterLink } from "./SharedStyles";

const Footer = () => {
    return (
        <Box sx={{ py: 3 }}>
            {/* Usamos el FooterContainer para mantener la estructura */}
            <FooterContainer>
                <Box>
                    <Typography sx={{ fontSize: "20px", color: "#1C1C1D", fontWeight: "700", mb: 2 }}>
                        Sobre Nosotros
                    </Typography>

                    <FooterLink to="Inicio" smooth={true} duration={500}>
                        ¿Qué es Metabolom?
                    </FooterLink>
                    <br />
                    <FooterLink to="Nosotros" smooth={true} duration={500}>
                        Profesionales
                    </FooterLink>
                    <br />
                    <FooterLink to="Esquema" smooth={true} duration={500}>
                        Solicitar Consulta
                    </FooterLink>
                </Box>

                <Box>
                    <Typography sx={{ fontSize: "20px", color: "#1C1C1D", fontWeight: "700", mb: 2 }}>
                        Tipos de Consultas
                    </Typography>

                    <FooterLink to="Infantes" smooth={true} duration={500}>
                        Niños y Adolescentes
                    </FooterLink>
                    <br />
                    <FooterLink to="Adultos" smooth={true} duration={500}>
                        Adultos
                    </FooterLink>
                    <br />
                </Box>

                <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem", justifyContent: "center" }}>
                    <Typography sx={{ fontSize: "20px", color: "#1C1C1D", fontWeight: "700", mb: 2 }}>
                        Contactenos
                    </Typography>

                    <IconBox>
                        <Link to="mailto:metabolomonline@gmail.com" style={{ display: "flex", gap: "0.5em" }}>
                            <img src={gmailIcon} alt="gmailIcon" style={{ cursor: "pointer", maxWidth: "26px", justifyContent: "center" }} />
                            <Typography sx={{ fontSize: "14px", color: "#7A7A7E", fontWeight: "500" }}>
                                metabolomonline@gmail.com
                            </Typography>
                        </Link>
                    </IconBox>

                    <IconBox>
                        <a href="https://www.instagram.com/metabolomonline" target="_blank" rel="noopener noreferrer" style={{ display: "flex", gap: "0.5em" }}>
                            <img src={instagramIcon} alt="instagramIcon" style={{ cursor: "pointer" }} />
                            <Typography sx={{ fontSize: "14px", color: "#7A7A7E", fontWeight: "500" }}>
                                @metabolomonline
                            </Typography>
                        </a>
                    </IconBox>
                </Box>
            </FooterContainer>
        </Box>
    );
};

export default Footer;
