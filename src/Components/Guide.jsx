import {Box, Button, styled, Typography} from "@mui/material";
import React from "react";

import formIcon from "../media/formIcon.png";
import verifyIcon from "../media/verifyIcon.png";
import encuentroIcon from "../media/encuentroIcon.png";

import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import CustomButton from "./CustomButton";

const Guide = () =>
    {
        const CustomBox = styled(Box)(
            ( { theme } ) => (
                {
                    width: "30%",
                    [ theme.breakpoints.down("md") ]: {
                        width: "85%",
                    }
                }
            )
        );

        const GuidesBox = styled(Box)(
            ( { theme } ) => (
                {
                    display: "flex",
                    justifyContent: "space-around",
                    textAlign: "center",
                    width: "80%",
                    marginBottom: theme.spacing(5),
                    marginTop: theme.spacing(5),
                    [ theme.breakpoints.down("md") ]: {
                        width: "100%",
                        margin: 0,
                    },
                    [ theme.breakpoints.down("sm") ]: {
                        flexDirection: "column",
                        margin: 0,
                    }
                }
            )
        );

        const GuideBox = styled(Box)(
            ( { theme } ) => (
                {
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    padding: "10px",
                    maxWidth: "300px",
                    marginTop: theme.spacing(5),
                    [ theme.breakpoints.down("sm") ]: {
                        margin: theme.spacing(2, 0, 2, 0),
                        maxWidth: "100%",
                    }
                }
            )
        );

        return (
            <Box sx={ {
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                mb: 2,
            } }>
                <div style={ {
                    width: "5%",
                    height: "5px",
                    backgroundColor: "#000339",
                    margin: "0 auto"
                } }></div>

                <Typography variant="h3" sx={ {
                    fontSize: "35px",
                    fontWeight: "bold",
                    color: "#000339",
                    my: 3
                } }>
                    Cuales son los pasos?
                </Typography>

                <CustomBox>
                    <Typography variant="body2" sx={ {
                        fontSize: "16px",
                        fontWeight: "500",
                        color: "#5A6473",
                        textAlign: "center"
                    } }>
                        Todo lo que necesitas saber para realizar una consulta virtual en Metabolom!
                    </Typography>
                </CustomBox>

                <GuidesBox>
                    <GuideBox>
                        <img src={ formIcon } alt="buyIcon" style={ { width: "100px" } }/>
                        <Typography variant={ "body2" } sx={ {
                            fontWeight: "500",
                            fontSize: "20px",
                            color: "#3B3c45",
                            my: 1
                        } }>
                            Completar Solicitud de Consulta
                        </Typography>
                        <Box sx={ {
                            cursor: "pointer",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center"
                        } }>
                            <Typography variant="body2" sx={ {
                                fontWeight: "bold",
                                fontSize: "14px",
                                color: "#0689FF"
                            } }>
                                Ver formulario de consulta
                            </Typography>
                            <ArrowRightAltIcon style={ { color: "#0689FF" } }/>
                        </Box>
                    </GuideBox>

                    <GuideBox>
                        <img src={ verifyIcon } alt="verifyIcon" style={ { width: "100px" } }/>
                        <Typography variant="body2" sx={ {
                            fontWeight: "500",
                            fontSize: "20px",
                            color: "#3B3c45",
                            my: 1
                        } }>
                            Verificacion de Datos Personales y Antecedentes Clinicos
                        </Typography>
                        <Box sx={ {
                            cursor: "pointer",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center"
                        } }>
                            <Typography variant="body" sx={ {
                                fontWeight: "bold",
                                fontSize: "14px",
                                color: "#0689FF"
                            } }>
                                Consultar Mi Solicitud
                            </Typography>
                            <ArrowRightAltIcon style={ { color: "#0689FF" } }/>
                        </Box>
                    </GuideBox>

                    <GuideBox>
                        <img src={ encuentroIcon } alt="encuentroIcon" style={ { width: "100px" } }/>
                        <Typography variant={ "body2" } sx={ {
                            fontWeight: "500",
                            fontSize: "20px",
                            color: "#3B3c45",
                            my: 1
                        } }>
                            Primer Encuentro Virtual Bioquímico-Médico-Paciente
                        </Typography>
                        <Box sx={ {
                            cursor: "pointer",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center"
                        } }>
                            <Typography variant={ "body" } sx={ {
                                fontWeight: "bold",
                                fontSize: "14px",
                                color: "#0689FF"
                            } }>
                                Consultar Mi Solicitud
                            </Typography>
                            <ArrowRightAltIcon style={ { color: "#0689FF" } }/>
                        </Box>
                    </GuideBox>
                </GuidesBox>

                <CustomButton
                    backgroundColor="#0F1B4C"
                    color="#fff"
                    buttonText="Ver Guia Completa"
                    guideBtn={ true }
                />
            </Box>
        );
    };

export default Guide;
