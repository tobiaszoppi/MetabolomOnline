import {Box, Button, styled, Typography} from "@mui/material";
import {Container} from "@mui/system";
import React from "react";
import Navbar from "./Navbar";

import heroImg from "../media/hero_illustration.png";
import metaLogo from "../media/metabolomLogo.png";
import CustomButton from "./CustomButton";

const Hero = () => {
    const CustomBox = styled(Box)(({theme}) => ({
        display: "flex",
        justifyContent: "center",
        gap: theme.spacing(5),
        marginTop: theme.spacing(5),
        [theme.breakpoints.down("md")]: {
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
        },
    }));

    const Title
        = styled(Typography)(({theme}) => ({
        fontSize: "64px",
        color: "#000336",
        fontWeight: "bold",
        margin: theme.spacing(4, 0, 4, 0),
        [theme.breakpoints.down("sm")]: {
            fontSize: "30px"
        },
    }));

    return (
        <Box sx={{backgroundColor: "#E6F0FF", minHeight: "80vh"}}>
            <Container>
                <Navbar/>
                <CustomBox>
                    <Box sx={{flex: "1"}}>
                        <Typography variant="body2" sx={{
                            fontSize: "18px", color: "#687690", fontWeight: "500", mt: 10, mb: 4
                        }}>
                            Metabolom Online
                        </Typography>
                        <Title variant="h1">
                            Obtenga la atención que necesita, cuando la necesita, con los servicios en línea de
                            Metabolom.
                        </Title>
                        <Typography variant="body2" sx={{fontSize: "18px", color: "#5A6473", my: 4}}>
                            Metabolom brinda un servicio multidisciplinario bioquímico-médico-nutricionista para la
                            investigación y
                            diagnóstico de Enfermedades Metabólicas Congénitas y Adquiridas en pacientes neonatos, niños
                            y adultos.
                        </Typography>
                        <CustomButton
                            backgroundColor="#0F1B4C"
                            color="#fff"
                            buttonText="Mas Sobre Nosotros"
                            heroBtn={true}
                        />
                    </Box>

                    <Box sx={{ flex: "1.25" }}>
                        <img
                            src={heroImg}
                            alt="heroImg"
                            style={{ maxWidth: "100%", marginBottom: "2rem" }}
                        />
                    </Box>
                </CustomBox>
            </Container>
        </Box>
    );
}

export default Hero;
