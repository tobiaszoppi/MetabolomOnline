import React, { useState } from 'react';
import {styled, Typography} from "@mui/material";
import {Box, Container} from "@mui/system";

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
        <Box sx={{textAlign: 'center'}} id={"Contacto"}>
            <CustomTitle>Formulario</CustomTitle>
            <Container>
                <Typography>
                    Por favor, completa el siguiente formulario con tus datos personales. En caso de ser un menor de edad, también proporciona los datos de la madre, padre o tutor. Además, te pedimos que nos brindes una breve descripción del motivo de tu consulta y cualquier estudio anterior que hayas realizado en el último año. Si tienes algún archivo relevante para adjuntar, asegúrate de incluirlo.
                </Typography>
            </Container>
        </Box>

    );
};

export default Formulario;
