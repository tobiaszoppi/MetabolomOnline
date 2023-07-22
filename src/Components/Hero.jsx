import { Box } from "@mui/material";
import { Container } from "@mui/system";
import { Link as ScrollLink } from "react-scroll";
import React from "react";
import heroImg from "../media/metabolomLogo.png";
import CustomButton from "./CustomButton";

// Importar los estilos compartidos con los nombres actualizados
import {
    CustomFlexBox,
    CustomTitle,
    CustomText,
    CustomImageContainer,
} from "./SharedStyles";

const Hero = () => {
    return (
        <Box id={"Inicio"} sx={{ mb: 0, backgroundColor: "#E6F0FF", minHeight: "80vh" }}>
            <Container>
                {/* Utilizar el componente CustomFlexBox en lugar de Box */}
                <CustomFlexBox>
                    <Box sx={{ flex: "1", mb: 4 }}>
                        {/* Utilizar el componente CustomTitle en lugar de Typography */}
                        <CustomTitle variant="h1">Estudiamos tu salud desde todos los ángulos</CustomTitle>
                        {/* Utilizar el componente CustomText en lugar de Typography */}
                        <CustomText variant="body2">
                            Metabolom brinda un servicio multidisciplinario bioquímico-médico-nutricionista para la investigación y
                            diagnóstico de Enfermedades Metabólicas Congénitas y Adquiridas en pacientes neonatos, niños y adultos.
                        </CustomText>
                        <ScrollLink to="Nosotros" smooth={true} duration={500}>
                            <CustomButton backgroundColor="#0F1B4C" color="#fff" buttonText="Mas Sobre Nosotros" heroBtn={true} />
                        </ScrollLink>
                    </Box>

                    <Box sx={{ flex: "1.25" }}>
                        {/* Utilizar el componente CustomImageContainer en lugar de Box */}
                        <CustomImageContainer>
                            <img src={heroImg} alt="heroImg" style={{ maxWidth: "95%" }} />
                        </CustomImageContainer>
                    </Box>
                </CustomFlexBox>
            </Container>
        </Box>
    );
};

export default Hero;
