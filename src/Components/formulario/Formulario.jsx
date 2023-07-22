import React, { useState } from 'react';
import {styled, Typography} from "@mui/material";
import {Box, Container} from "@mui/system";
import CustomButton from "../CustomButton";

const Formulario = () => {

    const CustomTitle = styled(Typography)(
        ( { theme } ) => (
            {
                fontFamily: "'Hanken Grotesk', sans-serif",
                fontSize: "35px",
                color: "#000339",
                fontWeight: "700",
                textAlign: "center",
            }
        ));

    return (
        <Box sx={{textAlign: 'center'}} id={"Contacto"} mb={4}>
            <CustomTitle>Formulario</CustomTitle>
            <Container sx={{display:"flex", flexDirection:"column"}}>
                <Typography>
                    Por favor, completa el siguiente formulario con tus datos personales. En caso de ser un menor de edad, también proporciona los datos de la madre, padre o tutor. Además, te pedimos que nos brindes una breve descripción del motivo de tu consulta y cualquier estudio anterior que hayas realizado en el último año. Si tienes algún archivo relevante para adjuntar, asegúrate de incluirlo.
                </Typography>
                <div style={{ marginTop:"20px", alignSelf:"center"}}>
                    <CustomButton backgroundColor="#0F1B4C" color="#fff" buttonText="Completar Formulario" guideBtn={true} />
                </div>
            </Container>
        </Box>

    );
};

export default Formulario;
