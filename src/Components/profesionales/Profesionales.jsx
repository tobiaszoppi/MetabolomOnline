import React from 'react';
import CartaPro from "./CartaPro";
import {Container, Grid, styled, Typography} from "@mui/material";
import natiImage from "../../media/profesionales/nati2.png";
import meliImage from "../../media/profesionales/meli2.png"
import mariana from "../../media/profesionales/mariana2.png"
import laura from "../../media/profesionales/laura2.png"
import norberto from "../../media/profesionales/norberto2.png"
import barbara from "../../media/profesionales/barbara2.png"
import graciela from "../../media/profesionales/graciela2.png"
import "./profesionales.css";

const Profesionales = () =>
    {
        const profesionales = [
            {
                id: 1,
                imagen: natiImage,
                nombre: "DRA. CESARI Natalia",
                descripcion: "Bioquimica Especializada en Enfermedades metabolicas congenitas.",
            },
            {
                id: 2,
                imagen: norberto,
                nombre: "DR. GUELBERT Norberto",
                descripcion: "Medico Neuropediatra Especialista en Enfermedades metabolicas congenitas.",
            },

            {
                id: 3,
                imagen: meliImage,
                nombre: "DRA. BIANCALANA Melina",
                descripcion: "Medica Integrativa con Abordaje en Psiconeuroinmunologia.",
            },
            {
                id: 4,
                imagen: laura,
                nombre: "LIC. VAZQUEZ M. Laura",
                descripcion: "Lic. en Nutricion Orientacion Psiconeuroinmunologia.",
            },

            {
                id: 5,
                imagen: barbara,
                nombre: "LIC. RIGONI Barbara",
                descripcion: "Lic. en Psicologia, Acompañamiento Adultos y Niños, Abordaje Integral.",
            },
            {
                id: 6,
                imagen: mariana,
                nombre: "DRA. MARIANI Marina",
                descripcion: "Medica Clinica con orientacion en medicina funcional integrativa y ortomolecular.",
            },
        ];
        const profesionalesExternos = [
            {
                id: 7,
                imagen: graciela,
                nombre: "DRA. VARELA Graciela",
                descripcion: "Médica especializada en trastornos del neurodesarrollo y terapias naturales.",
            },
        ];

        return (
            <Container id={"Nosotros"}>
                <div className="titulo">
                    <h2>Nuestros Profesionales</h2>
                    <Typography sx={{ textAlign: "center"}}>
                        En Metabolom nos dedicamos al estudio y tratamiento integral de las enfermedades metabólicas, con un enfoque personalizado y basado en la evidencia científica. Nuestro equipo está formado por médicos especialistas en medicina integrativa, bioquímica en metabolismo, nutrición y psicología, que te acompañarán en todo el proceso para mejorar tu salud y calidad de vida.
                    </Typography>
                </div>
                <Grid container spacing={ 2 } style={ { justifyContent: "center" } }>
                    { profesionales.map(( profesional ) => (
                        <Grid item xs={ 12 } sm={ 10 } md={ 6 } key={ profesional.id } sx={ { mb: 3, mt: 2 } }>
                            <CartaPro { ...profesional } />
                        </Grid>
                    )) }
                </Grid>
                <div className="titulo">
                    <h2>Profesionales Externos</h2>
                </div>
                <Grid container spacing={ 2 } style={ { justifyContent: "center" } }>
                    { profesionalesExternos.map(( profesionalesExternos ) => (
                        <Grid item xs={ 12 } sm={ 10 } md={ 6 } key={ profesionalesExternos.id } sx={ { mb: 3, mt: 2 } }>
                            <CartaPro { ...profesionalesExternos } />
                        </Grid>
                    )) }
                </Grid>

            </Container>
        );
    };

export default Profesionales;
