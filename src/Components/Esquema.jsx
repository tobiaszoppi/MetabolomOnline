import React, {useState} from 'react';
import {Box, styled, Typography} from "@mui/material";
import Ilustracion1 from "../media/illustration-features-tab-1.svg";
import Ilustracion2 from "../media/illustration-features-tab-2.svg";
import Ilustracion3 from "../media/illustration-features-tab-3.svg";

const EsquemaContainer = styled(Box)(
    ( { theme } ) => (
        {
            maxWidth: "100%",
            padding: "1rem",
            margin: theme.spacing(4, 3, 4, 3),
            marginTop: "2rem",
            backgroundColor: "white",
            borderRadius: "15px",
            boxShadow: "0 0 6px rgba(0, 0, 0, 0.2)",

            [ theme.breakpoints.down("md") ]: {
                margin: theme.spacing(4, 3, 4, 3),
                justifyContent: "center",
                alignItems: "center",
                alignContent: "center",
            },
            [ theme.breakpoints.down("sm") ]: {
                maxWidth: "100%",
            }
        }
    ));

const CustomBox = styled(Box)(
    ( { theme } ) => (
        {
            paddingBottom: "2rem",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            backgroundColor: "#E6F0FF",
            gap: theme.spacing(5),
            [ theme.breakpoints.down("md") ]: {
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
            },
        }
    ));

const Titulo = styled(Typography)(
    ( { theme } ) => (
        {
            fontFamily: "'Hanken Grotesk', sans-serif",
            fontSize: "1.8rem",
            textAlign: "center",
        }
    ));

const Texto = styled(Typography)(
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

const Menu = styled(Box)(
    ( { theme } ) => (
        {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "1.8rem",
            "p": {
                fontFamily: "'Hanken Grotesk', sans-serif",
                padding: "1rem 2rem",
                borderBottom: "1px solid hsl(229, 8%, 60%)",
                position: "relative",
                cursor: "pointer",
                color: "hsl(229, 31%, 21%)",
                transition: "0.5s",
                "&:hover": {
                    color: "hsl(0, 94%, 66%)",
                },
            },
            [ theme.breakpoints.down("md") ]: {
                flexDirection: "column",
                mt: 1,
            },
        }
    ));

const Carta = styled(Box)(
    ( { theme } ) => (
        {
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: theme.spacing(4, 4, 0, 4),
            "p": {
                fontFamily: "'Hanken Grotesk', sans-serif",
                margin: theme.spacing(2, 2),
            },
            [ theme.breakpoints.down("md") ]: {
                padding: theme.spacing(4),
                justifyContent: "center",
                flexDirection: "column",
            },
        }
    ));

const Imagen = styled(Box)(
    ( { theme } ) => (
        {
            position: "relative",

            "img": {
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                maxWidth: "25rem",
                [ theme.breakpoints.down("md") ]: {
                    width: "20rem",
                },
                [ theme.breakpoints.down("sm") ]: {
                    width: "15rem",
                },
            }
        }
    ));

const ContenedorSecundario = styled(Box)(
    ( { theme } ) => (
        {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
        }
    ));

const TituloSecundario = styled(Typography)(
    ( { theme } ) => (
        {
            textWeight: "400",
            textAlign: "left",
            fontSize: "1.8rem",
            margin: "auto",
            color: "hsl(229, 31%, 21%)",
            [ theme.breakpoints.down("md") ]: {
                mt: 2,
                textAlign: "center",
                width: "20rem",
            },
            [ theme.breakpoints.down("sm") ]: {
                width: "15rem",
            }
        }
    ));

const TextoSecundario = styled(Typography)(
    ( { theme } ) => (
        {

            textWeight: "300",
            textAlign: "left",
            fontSize: "1.4rem",
            lineHeight: 1.3,
            color: "hsl(229, 8%, 60%)",
        }
    ));

const Informacion = styled("a")(
    ( { theme } ) => (
        {
            color: "#eef7fd",
            background: "hsl(231, 69%, 60%)",
            border: "2px solid hsl(231, 69%, 60%)",
            borderRadius: "5px",
            fontFamily: "'Hanken Grotesk', sans-serif",
            fontSize: "1rem",
            padding: theme.spacing(0.7),
            "&:hover": {
                color: "hsl(231, 69%, 60%)",
            },
        }
    ));

const Esquema = () =>
    {
        const [option, setOption] = useState("1");
        return (
            <CustomBox>
                <EsquemaContainer>
                    <Titulo>Esquema de Trabajo</Titulo>
                    <Texto variant="body2">
                        Nuestro objetivo es ofrecerle un servicio integral y personalizado para mejorar su salud y
                        bienestar.<br/>
                        Para ello, contamos con un esquema de trabajo que consta de diferentes pasos: evaluación
                        inicial,
                        diagnóstico, tratamiento y seguimiento.<br/>
                        A continuación, le explicamos brevemente en qué consiste cada uno de ellos.
                    </Texto>
                    <Menu>
                        <p onClick={ () => setOption("1") }>Evaluación</p>
                        <p onClick={ () => setOption("2") }>Diagnóstico</p>
                        <p onClick={ () => setOption("3") }>Seguimiento</p>
                    </Menu>

                    <div>
                        { option === "1" ? (
                            <Carta>
                                <Imagen>
                                    <img src={ Ilustracion1 } alt="features"/>
                                </Imagen>
                                <ContenedorSecundario>
                                    <TituloSecundario>Envio y Evaluacion de Antecedentes</TituloSecundario>
                                    <TextoSecundario>
                                        Para iniciar el tratamiento en Metabolom, el paciente debe completar y enviar el
                                        formulario que se encuentra al final de esta página.<br/>
                                        Además, debe adjuntar los resultados de los estudios clínicos que se haya
                                        realizado durante el último año.<br/>
                                        Los especialistas de Metabolom revisarán los antecedentes del paciente y le
                                        asignarán un turno para el primer encuentro virtual.<br/>
                                        En esta sesión, se analizará en detalle la historia clínica del paciente y los
                                        estudios previos. También se le indicará al paciente qué estudios específicos
                                        debe realizar para investigar el origen de su afección.
                                    </TextoSecundario>
                                    <Informacion href="/">Completar Formulario</Informacion>
                                </ContenedorSecundario>
                            </Carta>
                        ) : option === "2" ? (
                            <Carta>
                                <Imagen>
                                    <img src={ Ilustracion2 } alt="features"/>
                                </Imagen>
                                <ContenedorSecundario>
                                <TituloSecundario>Diagnostico de Resultados y Acompañamiento del
                                    Paciente</TituloSecundario>
                                <TextoSecundario>
                                    Luego de la evaluacion inicial, le ofrecemos un diagnostico de resultados y
                                    un
                                    acompañamiento.<br/>
                                    Esto implica:<br/>
                                    <br/>
                                    - Acompañamiento del paciente y logística para la realización de estudios
                                    específicos de laboratorio, según las necesidades de cada caso.<br/>
                                    - Interpretación de resultados de los estudios solicitados, con un enfoque
                                    bioquímico y médico.<br/>
                                    - Coordinación para el segundo encuentro virtual Bioquímico-Médico-Paciente,
                                    donde le explicaremos los resultados encontrados y cómo se relacionan con su
                                    clínica.<br/>
                                    - Tratamiento y guía para comenzar a mejorar sus síntomas, con
                                    recomendaciones
                                    nutricionales y hábitos saludables.
                                </TextoSecundario>
                                <Informacion href="/">Completar Formulario</Informacion>
                                </ContenedorSecundario>
                            </Carta>
                        ) : (
                            <Carta>
                                <Imagen>
                                    <img src={ Ilustracion3 } alt="features"/>
                                </Imagen>
                                <ContenedorSecundario>
                                <TituloSecundario>Seguimiento</TituloSecundario>
                                <TextoSecundario>
                                    El seguimiento se coordina según la necesidad del paciente o la decisión del
                                    equipo de salud de Metabolom, y puede ser de dos tipos:<br/>
                                    <br/>
                                    - Seguimiento general: se realiza a los 90 días de iniciado el tratamiento y
                                    consiste en una consulta médico-bioquímica virtual de 45 minutos y una
                                    consulta con nutricionista virtual de 45 minutos.<br/>
                                    - Seguimiento de complejidad: se realiza en caso necesario y consiste en un
                                    encuentro médico-bioquímico virtual de 60 minutos y una consulta virtual o
                                    presencial con nutricionista de 60 minutos.
                                    <br/>
                                    Para los análisis específicos se utilizan laboratorios de alta complejidad
                                    cercanos al paciente o se coordina logística para envío de muestras.<br/>
                                </TextoSecundario>
                                <Informacion href="/">Completar Formulario</Informacion>
                                </ContenedorSecundario>
                            </Carta>
                        ) }
                    </div>
                </EsquemaContainer>
            </CustomBox>
        );
    }
export default Esquema;