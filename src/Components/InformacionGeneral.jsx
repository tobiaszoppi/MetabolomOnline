import {Container, styled, Typography} from "@mui/material";
import React from "react";
import logoImg from "../media/logonuevo.png";
import manosChicoImg from "../media/hermanosJugandoImg.jpg";

const CustomBox = styled(Container)(
    ( { theme, img } ) => (
        {
            backgroundImage: `url(${ img })`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            borderBottomRightRadius: "25px",
            borderBottomLeftRadius: "25px",
            [ theme.breakpoints.down("sm") ]: {
                backgroundPositionX: "-300px",
            },
        }
    ));

const CustomContainer = styled(Container)(
    ( { theme } ) => (
        {
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",

            "img": {
                maxWidth: "20%",
                minWidth: "200px",
                marginTop: "20px",
            },

            [ theme.breakpoints.down("md") ]: {
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
            }
        }
    ));

const CustomTypografy = styled(Typography)(
    ( { theme } ) => (
        {
            color: "rgba(42,42,42,0.68)",
            fontSize: "18px",
            fontFamily: "'Hanken Grotesk', sans-serif",
            fontWeight: "500",
            backgroundColor: `rgba(255, 255, 255, 0.4)`,
            borderRadius: "16px",
            boxShadow: "0 4px 30px `rgba(0, 0, 0, 0.1)`",
            backdropFilter: `blur(5px)`,
            webkitBackdropFilter: `blur(5px)`,
            border: "1px solid `rgba(255, 255, 255, 0.3)`",
            padding: "15px",
        }
    ));

const InformacionGeneral = () =>
    {
        return (
            <CustomBox img={ manosChicoImg }>
                <CustomContainer>
                    <img src={ logoImg } alt="logo"/>
                    <CustomTypografy variant="body2"
                                     sx={ {
                                         mb: 10,
                                         mt: 5
                                     } }>
                        Metabolom brinda un servicio multidisciplinario bioquímico-médico-nutricionista para la
                        investigación y diagnóstico de Enfermedades Metabólicas Congénitas y Adquiridas en pacientes
                        neonatos, niños y adultos.<br></br>
                        En Metabolom trabajamos en equipo para mejorar la calidad de vida.<br></br>
                        Mediante el estudio de análisis específicos personalizados y la integración con el control
                        clínico, investigamos hasta llegar al Diagnóstico de la condición o patología.<br></br>
                        Los encuentros se realizan mediante una plataforma de comunicación virtual.
                    </CustomTypografy>
                </CustomContainer>


            </CustomBox>
        )
    };

export default InformacionGeneral;
