import {TextField, Button, Box, styled, Typography} from '@mui/material';
import './formulario.css';

const Etapa2 = ( { datosEtapa2, manejarCambioEtapa2, volverEtapa1, manejarEnviarFormulario } ) =>
    {
        const camposEtapa2 = [
            {
                name: 'addressType',
                label: 'Direccion de residencia',
                placeholder: 'Ingrese su direccion de residencia',
                type: 'text',
                component: TextField,
            },
            {
                name: 'nationality',
                label: 'Nacionalidad',
                placeholder: 'Ingrese su nacionalidad',
                type: 'text',
                component: TextField,
            },
            {
                name: 'state',
                label: 'Estado',
                placeholder: 'Ingrese el estado de residencia',
                type: 'text',
                component: TextField,
            },
            {
                name: 'locality',
                label: 'Localidad',
                placeholder: 'Ingrese la localidad de residencia',
                type: 'text',
                component: TextField,
            },
            {
                name: 'reason',
                label: 'Motivo de la consulta',
                placeholder: 'Ingrese brevemente el motivo de su consulta',
                type: 'text',
                component: TextField,
            },
            {
                name: 'motherName',
                label: 'Nombre de la madre',
                placeholder: 'Ingrese el nombre de la madre',
                type: 'text',
                component: TextField,
            },
            {
                name: 'grandfather',
                label: 'Nombre del abuelo',
                placeholder: 'Ingrese el nombre del abuelo',
                type: 'text',
                component: TextField,
            },
        ];

        const handleChange = ( event ) =>
            {
                const { name, value } = event.target;
                manejarCambioEtapa2(name, value);
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
                    <CustomText>Datos Adicionales</CustomText>
                </div>
                <div className="contenido">
                    { camposEtapa2.map(( campo ) =>
                    {
                        const Componente = campo.component;
                        return (
                            <div key={ campo.name }>
                                <Componente
                                    name={ campo.name }
                                    value={ datosEtapa2[ campo.name ] }
                                    onChange={ handleChange }
                                    placeholder={ campo.placeholder }
                                    label={ campo.label }
                                    type={ campo.type }
                                    rows={ campo.name === 'reason' ? 4 : undefined }
                                    multiline={ campo.name === 'reason' }
                                    fullWidth
                                />
                            </div>
                        );
                    }) }
                    <Button onClick={ volverEtapa1 }>Atras</Button>
                    <Button onClick={ manejarEnviarFormulario }>Enviar Formulario</Button>
                </div>
            </Box>
        );
    };

export default Etapa2;
