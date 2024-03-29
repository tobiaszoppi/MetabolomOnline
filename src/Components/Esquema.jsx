import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import {Container } from "@mui/material";
import { EsquemaTitle, EsquemaText, Menu, Carta, Imagen, ContenedorSecundario, TituloSecundario, TextoSecundario, Informacion } from './SharedStyles';
import Ilustracion1 from "../media/illustration-features-tab-1.svg";
import Ilustracion2 from "../media/illustration-features-tab-2.svg";
import Ilustracion3 from "../media/illustration-features-tab-3.svg";

const Esquema = () => {
    const [option, setOption] = useState("1");

    return (
        <Container sx={{
            paddingTop: "2rem",
            paddingBottom: "1rem",
            backgroundColor: "#fff",
            borderTopRightRadius: "20px",
            borderTopLeftRadius: "20px"
        }}
                   id={"Esquema"}>
            <EsquemaTitle>Esquema de Trabajo</EsquemaTitle>
            <EsquemaText>
                Nuestro objetivo es ofrecerle un servicio integral y personalizado para mejorar su salud y bienestar.<br />
                Para ello, contamos con un esquema de trabajo que consta de diferentes pasos: evaluación inicial, diagnóstico, tratamiento y seguimiento.<br />
                A continuación, le explicamos brevemente en qué consiste cada uno de ellos.
            </EsquemaText>

            <Menu>
                <p onClick={() => setOption("1")}>Evaluación</p>
                <p onClick={() => setOption("2")}>Diagnóstico</p>
                <p onClick={() => setOption("3")}>Seguimiento</p>
            </Menu>

            {option === "1" && (
                <Carta>
                    <Imagen>
                        <img src={Ilustracion1} alt="features" />
                    </Imagen>
                    <ContenedorSecundario>
                        <TituloSecundario>Envío y Evaluación de Antecedentes</TituloSecundario>
                        <TextoSecundario>
                            Para iniciar el tratamiento en Metabolom el paciente debe completar y enviar el formulario que se encuentra al final de esta página.<br />
                            Además, debe adjuntar los resultados de los estudios clínicos que se haya realizado durante el último año.<br />
                            Los especialistas de Metabolom revisarán los antecedentes del paciente y le asignarán un turno para el primer encuentro virtual.<br />
                            En esta sesión se analizará en detalle la historia clínica del paciente y los estudios previos. También se le indicará al paciente que estudios específicos debe realizar para investigar el origen de su afección.
                        </TextoSecundario>
                        <ScrollLink
                            to="Contacto"
                            smooth={true}
                            duration={500}
                        >
                            <Informacion>Completar Formulario</Informacion>
                        </ScrollLink>
                    </ContenedorSecundario>
                </Carta>
            )}

            {option === "2" && (
                <Carta>
                    <Imagen>
                        <img src={Ilustracion2} alt="features" />
                    </Imagen>
                    <ContenedorSecundario>
                        <TituloSecundario>Diagnóstico de Resultados y Acompañamiento del Paciente</TituloSecundario>
                        <TextoSecundario>
                            Luego de la evaluación inicial, le ofrecemos un diagnóstico de resultados y un
                            acompañamiento.<br />
                            Esto implica:<br />
                            <br />
                            - Acompañamiento del paciente y logística para la realización de estudios específicos de laboratorio, según las necesidades de cada caso.<br />
                            - Interpretación de resultados de los estudios solicitados, con un enfoque bioquímico y médico.<br />
                            - Coordinación para el segundo encuentro virtual Bioquímico-Médico-Paciente, donde le explicaremos los resultados encontrados y cómo se relacionan con su clínica.<br />
                            - Tratamiento y guía para comenzar a mejorar sus síntomas, con recomendaciones nutricionales y hábitos saludables.
                        </TextoSecundario>
                        <ScrollLink
                            to="Contacto"
                            smooth={true}
                            duration={500}
                        >
                            <Informacion>Completar Formulario</Informacion>
                        </ScrollLink>
                    </ContenedorSecundario>
                </Carta>
            )}

            {option === "3" && (
                <Carta>
                    <Imagen>
                        <img src={Ilustracion3} alt="features" />
                    </Imagen>
                    <ContenedorSecundario>
                        <TituloSecundario>Seguimiento</TituloSecundario>
                        <TextoSecundario>
                            El seguimiento se coordina según la necesidad del paciente o la decisión del
                            equipo de salud de Metabolom, y puede ser de dos tipos:<br />
                            <br />
                            - Seguimiento general: se realiza a los 90 días de iniciado el tratamiento y consiste en una consulta médico-bioquímica virtual de 45 minutos y una consulta con nutricionista virtual de 45 minutos.<br />
                            - Seguimiento de complejidad: se realiza en caso necesario y consiste en un encuentro médico-bioquímico virtual de 60 minutos y una consulta virtual o presencial con nutricionista de 60 minutos.
                            <br />
                            Para los análisis específicos se utilizan laboratorios de alta complejidad cercanos al paciente o se coordina logística para envío de muestras.<br />
                        </TextoSecundario>
                        <ScrollLink
                            to="Contacto"
                            smooth={true}
                            duration={500}
                        >
                            <Informacion>Completar Formulario</Informacion>
                        </ScrollLink>
                    </ContenedorSecundario>
                </Carta>
            )}
        </Container>
    );
}

export default Esquema;
