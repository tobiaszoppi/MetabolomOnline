import React, { useState } from 'react';
import Etapa1 from './Etapa1';
import Etapa2 from './Etapa2';
import EtapaMenores from './EtapaMenores';
import axios from 'axios';
import { Container, styled, Typography, Checkbox, FormControlLabel, Grid } from '@mui/material';

const Formulario = () => {
    const [etapaActual, setEtapaActual] = useState(1);
    const [datosEtapa1, setDatosEtapa1] = useState({
        firstName: '',
        lastName: '',
        tutorFirstName: '',
        tutorLastName: '',
        gender: '',
        dateOfBirth: '',
        email: '',
        mobileNumber: '',
        birthPlace: '',
        idType: '',
        idNumber: '',
    });
    const [datosEtapa2, setDatosEtapa2] = useState({
        addressType: '',
        nationality: '',
        state: '',
        locality: '',
        reason: '',
        motherName: '',
        grandfather: '',
    });
    const [formularioMenores, setFormularioMenores] = useState(false);

    const manejarCambioEtapa1 = (nombreCampo, valorCampo) => {
        setDatosEtapa1({
            ...datosEtapa1,
            [nombreCampo]: valorCampo,
        });
    };

    const manejarCambioEtapa2 = (nombreCampo, valorCampo) => {
        setDatosEtapa2({
            ...datosEtapa2,
            [nombreCampo]: valorCampo,
        });
    };

    const manejarCheckbox = (esMenor) => {
        setFormularioMenores(esMenor);
        setEtapaActual(1);
    };

    const manejarSiguienteEtapa = () => {
        setEtapaActual(etapaActual + 1);
    };

    const volverEtapa1 = () => {
        setEtapaActual(1);
    };

    const manejarEnviarFormulario = () => {
        let datosFormulario = {};

        if (formularioMenores) {
            datosFormulario = {
                etapaMenores: true,
                datosEtapaMenores: datosEtapa1,
                datosEtapa2: datosEtapa2,
            };
        } else {
            datosFormulario = {
                etapaMenores: false,
                datosEtapa1: datosEtapa1,
                datosEtapa2: datosEtapa2,
            };
        }
        console.log(datosFormulario);
        axios.post('http://localhost:8080/api/formularios', datosFormulario)
            .then(response => {
                console.log('Solicitud exitosa:', response.data);
            })
            .catch(error => {
                console.error('Error en la solicitud:', error);
            });
    };


    const CustomTitle = styled(Typography)(({ theme }) => ({
        fontFamily: "'Hanken Grotesk', sans-serif",
        fontSize: '35px',
        color: '#000339',
        fontWeight: '700',
        textAlign: 'center',
    }));

    const renderEtapaActual = () => {
        if (etapaActual === 1) {
            if (formularioMenores) {
                return (
                    <EtapaMenores
                        datosEtapaMenores={datosEtapa1}
                        manejarCambioEtapa1={manejarCambioEtapa1}
                        manejarSiguienteEtapa={manejarSiguienteEtapa}
                    />
                );
            } else {
                return (
                    <Etapa1
                        datosEtapa1={datosEtapa1}
                        manejarCambioEtapa1={manejarCambioEtapa1}
                        manejarSiguienteEtapa={manejarSiguienteEtapa}
                    />
                );
            }
        } else if (etapaActual === 2) {
            return (
                <Etapa2
                    datosEtapa2={datosEtapa2}
                    manejarCambioEtapa2={manejarCambioEtapa2}
                    volverEtapa1={volverEtapa1}
                    manejarEnviarFormulario={manejarEnviarFormulario}
                />
            );
        }
    };

    return (
        <Container id="Contacto">
            <CustomTitle>Formulario de Consulta</CustomTitle>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={!formularioMenores}
                                onChange={() => manejarCheckbox(false)}
                                color="primary"
                                sx={{alignContent: 'center', justifyContent: 'center', margin: 'auto'}}
                            />
                        }
                        label="Formulario para Adultos (Soy Paciente o Tutor)"
                    />
                </Grid>
                <Grid item xs={6}>
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={formularioMenores}
                                onChange={() => manejarCheckbox(true)}
                                color="primary"
                            />
                        }
                        label="Formulario para Menores (Soy Tutor)"
                    />
                </Grid>
            </Grid>
            {renderEtapaActual()}
        </Container>
    );
};

export default Formulario;
