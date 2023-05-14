import {Box, Container, styled, Typography} from "@mui/material";
import React from "react";
import logoImg from "../media/metabolomLogoTexto.png";
import logosImg from "../media/logos.png";
import manosChicoImg from "../media/hermanosJugandoImg.jpg";

const Companies = () =>
    {
        const CustomContainer = styled(Container)(
            ( { theme } ) => (
                {
                    display: "flex",
                    justifyContent: "space-between",
                    [ theme.breakpoints.down("md") ]: {
                        flexDirection: "column",
                        alignItems: "center",
                        textAlign: "center",
                        marginBottom: theme.spacing(4),
                    }
                }
            ));

        const CustomBox = styled(Box)(
            ( { theme } ) => (
                {
                    [ theme.breakpoints.down("md") ]: {
                        marginBottom: theme.spacing(4),
                    }
                }
            ));

        return (
            <Box sx={ { backgroundImage: `url(${ manosChicoImg })`, backgroundSize: "cover", backgroundRepeat: "no-repeat" } }>
                <CustomContainer>
                    <CustomBox>
                        <img src={ logoImg } alt="logo" style={ { maxWidth: "30%", minWidth: "200px", marginTop: "20px" } }/>
                        <Typography variant="body2"
                                    sx={ {
                                        color: "rgba(42,42,42,0.68)",
                                        fontSize: "16px",
                                        fontWeight: "bold",
                                        backgroundColor: `rgba(255, 255, 255, 0.4)`,
                                        borderRadius: "16px",
                                        boxShadow: "0 4px 30px `rgba(0, 0, 0, 0.1)`",
                                        backdropFilter: `blur(5px)`,
                                        webkitBackdropFilter: `blur(5px)`,
                                        border: "1px solid `rgba(255, 255, 255, 0.3)`",
                                        padding: "15px",
                                        mb: 10,
                                        mt: 5
                                    } }>
                            Metabolom brinda un servicio multidisciplinario bioquímico-médico-nutricionista para la investigación y diagnóstico de Enfermedades Metabólicas Congénitas y Adquiridas en pacientes neonatos, niños y adultos.<br></br>
                            En Metabolom trabajamos en equipo multidisciplinario para mejorar la calidad de vida y el desarrollo de los niños.<br></br>
                            Mediante el estudio de análisis específicos y personalizados y la integración con el control clínico, investigamos hasta llegar al Diagnóstico de la condición o patología.<br></br>
                            Se estudian casos del espectro autista, trastornos del desarrollo, celiaquía, intolerancia a los alimentos, alergias específicas, dermatitis, enfermedades metabólicas congénitas, disbiosis.<br></br>
                            Los encuentros se realizan con el tutor del menor y en algunos casos pueden solicitarse fotos del mismo para explicar alguna situación clínica en particular.
                        </Typography>
                    </CustomBox>
                </CustomContainer>


            </Box>
        )
    };

export default Companies;
