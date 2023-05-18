import {Box, Button, styled, Typography} from "@mui/material";
import {Container} from "@mui/system";
import { Link as ScrollLink } from 'react-scroll';
import React from "react";
import Navbar from "./Navbar";

import heroImg from "../media/metabolomLogo.png";
import CustomButton from "./CustomButton";

const Hero = () =>
    {
        const CustomBox = styled(Box)(
            ( { theme } ) => (
                {
                    display: "flex",
                    justifyContent: "center",
                    gap: theme.spacing(10),
                    [ theme.breakpoints.down("md") ]: {
                        flexDirection: "column",
                        alignItems: "center",
                        textAlign: "center",
                    },
                }
            ));

        const Title = styled(Typography)(
            ( { theme } ) => (
                {
                    fontSize: "64px",
                    color: "#000336",
                    fontWeight: "bold",
                    margin: theme.spacing(2, 0, 2, 0),
                    [ theme.breakpoints.down("sm") ]: {
                        fontSize: "40px",
                    },
                }
            ));

        return (
            <Box id={"Inicio"} sx={ {mb: 2, backgroundColor: "#E6F0FF", minHeight: "80vh" } } >
                <Container>

                    <CustomBox>
                        <Box sx={ { flex: "1", mb: 4 } }>
                            <Typography
                                variant="body2"
                                sx={ {
                                    fontSize: "18px",
                                    color: "#687690",
                                    fontWeight: "500",
                                } }
                            >
                                Metabolom Online
                            </Typography>
                            <Title variant="h1">
                                Estudiamos tu salud desde todos los ángulos.
                            </Title>
                            <Typography
                                variant="body2"
                                sx={ { fontSize: "18px", color: "#5A6473", my: 4 } }
                            >
                                Metabolom brinda un servicio multidisciplinario bioquímico-médico-nutricionista para la
                                investigación y
                                diagnóstico de Enfermedades Metabólicas Congénitas y Adquiridas en pacientes neonatos,
                                niños
                                y adultos.
                            </Typography>
                            <ScrollLink
                                to="Nosotros"
                                smooth={true}
                                duration={500}
                            >
                                <CustomButton
                                    backgroundColor="#0F1B4C"
                                    color="#fff"
                                    buttonText="Mas Sobre Nosotros"
                                    heroBtn={true}
                                />
                            </ScrollLink>
                        </Box>

                        <Box sx={ { flex: "1.25" } }>
                            <img
                                src={ heroImg }
                                alt="heroImg"
                                style={ { maxWidth: "100%" } }
                            />
                        </Box>
                    </CustomBox>
                </Container>
            </Box>
        );
    };

export default Hero;
