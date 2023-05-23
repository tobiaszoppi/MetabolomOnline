import React from 'react';
import {Box, Button, InputLabel, MenuItem, Select, styled, TextField, Typography} from "@mui/material";

const EtapaMenores = ( { datosEtapaMenores, manejarCambioEtapa1, manejarSiguienteEtapa } ) =>
    {
        const camposEtapaMenores = [
            {
                name: 'firstName',
                label: 'Nombre del paciente',
                placeholder: 'Ingrese su nombre',
                type: 'text',
                component: TextField,
            },
            {
                name: 'lastName',
                label: 'Apellido del paciente',
                placeholder: 'Ingrese su apellido',
                type: 'text',
                component: TextField,
            },
            {
                name: 'tutorFirstName',
                label: 'Nombre del tutor',
                placeholder: 'Ingrese su apellido',
                type: 'text',
                component: TextField,
            },
            {
                name: 'tutorLastName',
                label: 'Apellido del tutor',
                placeholder: 'Ingrese su apellido',
                type: 'text',
                component: TextField,
            },
            {
                name: 'gender',
                label: 'Género',
                type: 'select',
                options: ['Hombre', 'Mujer'],
                component: Select,
            },
            {
                name: 'dateOfBirth',
                label: 'Fecha de nacimiento',
                placeholder: 'Ingrese la fecha de nacimiento del paciente',
                type: 'date',
                component: TextField,
            },
            {
                name: 'email',
                label: 'Email',
                placeholder: 'Ingrese el mail del tutor',
                type: 'email',
                component: TextField,
            },
            {
                name: 'mobileNumber',
                label: 'Número de teléfono móvil',
                placeholder: 'Ingrese numero de teléfono móvil del paciente',
                type: 'text',
                component: TextField,
            },
            {
                name: 'birthPlace',
                label: 'Lugar de nacimiento',
                placeholder: 'Ingrese el lugar de nacimiento del paciente',
                type: 'text',
                component: TextField,
            },
            {
                name: 'idType',
                label: 'Tipo de identificación (DNI, PASAPORTE, ETC)',
                placeholder: 'Ingrese el tipo de identificación',
                type: 'text',
                component: TextField,
            },
            {
                name: 'idNumber',
                label: 'Número de identificación paciente',
                placeholder: 'Ingrese el número de identificación del paciente',
                type: 'text',
                component: TextField,
            },
        ];

        const handleChange = ( event ) =>
            {
                const { name, value } = event.target;
                manejarCambioEtapa1(name, value);
            };

        const CustomText = styled(Typography)(
            ( { theme } ) => (
                {
                    fontFamily: "'Hanken Grotesk', sans-serif",
                    fontWeight: "200",
                    fontSize: "1.4rem",
                    textAlign: "center",
                    lineHeight: 1.3,
                    color: "hsl(229, 8%, 60%)",
                }
            ));

        return (
            <Box>
                <div>
                    <CustomText>Datos del Menor</CustomText>
                </div>
                <div className="contenido">
                    { camposEtapaMenores.map(( campo ) =>
                    {
                        const Componente = campo.component;
                        if (campo.type === 'select') {
                            return (
                                <div key={ campo.name }>
                                    <InputLabel>Género </InputLabel>
                                    <Componente
                                        name={ campo.name }
                                        onChange={ handleChange }
                                        fullWidth
                                        value={ datosEtapaMenores[campo.name] }
                                        inputProps={ { 'aria-label': campo.label } }
                                    >
                                        { campo.options &&
                                            campo.options.map(( option ) => (
                                                <MenuItem key={ option } value={ option }>
                                                    { option }
                                                </MenuItem>
                                            )) }
                                    </Componente>
                                </div>
                            );
                        } else {
                            return (
                                <div key={ campo.name }>
                                    <Componente
                                        name={ campo.name }
                                        onChange={ handleChange }
                                        placeholder={ campo.placeholder }
                                        label={ campo.label }
                                        type={ campo.type }
                                        fullWidth
                                        InputLabelProps={ campo.type === 'date' ? { shrink: true } : undefined }
                                    />
                                </div>
                            );
                        }
                    }) }
                    <Button onClick={ manejarSiguienteEtapa }>Siguiente</Button>
                </div>
            </Box>
        );

    };

export default EtapaMenores;