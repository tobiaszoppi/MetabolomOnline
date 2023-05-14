import React from 'react';
import FormComponent from "./formulario/FormComponent";
import {Box, styled} from "@mui/material";


const CustomContainer = styled(Box)(
    ( { theme } ) => (
        {
            display: "flex",
            flexDirection: "column",
            [ theme.breakpoints.down("md") ]: {

            },
        }
    ));
const Formulario = () => {
    return (
        <CustomContainer>
            <FormComponent/>
        </CustomContainer>
    );
}

export default Formulario;