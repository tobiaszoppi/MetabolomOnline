import React from 'react';
import CartaPro from "./CartaPro";
import {Container, Grid, styled} from "@mui/material";
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
                nombre: "DRA. CESARI Natalia ",
                descripcion: "Descripción del profesional 1",
            },
            {
                id: 2,
                imagen: norberto,
                nombre: "DR. GUELBERT Norberto",
                descripcion: "Descripción del profesional 2",
            },
            {
                id: 3,
                imagen: graciela,
                nombre: "DRA. VARELA Graciela",
                descripcion: "Descripción del profesional 2",
            },
            {
                id: 4,
                imagen: meliImage,
                nombre: "DRA. BIANCALANA Melina",
                descripcion: "Descripción del profesional 2",
            },
            {
                id: 5,
                imagen: mariana,
                nombre: "DRA. MARIANI Mariana",
                descripcion: "Descripción del profesional 2",
            },
            {
                id: 6,
                imagen: laura,
                nombre: "LIC. VAZQUEZ Laura",
                descripcion: "Descripción del profesional 2",
            },

            {
                id: 7,
                imagen: barbara,
                nombre: "DRA. GONZALEZ Barbara",
                descripcion: "Descripción del profesional 2",
            },
        ];

        return (
            <Container>
                <div className="titulo">
                    <h2>Nuestros Profesionales</h2>
                </div>
                <Grid container spacing={ 2 } style={ { justifyContent: "center" } }>
                    { profesionales.map(( profesional ) => (
                        <Grid item xs={ 12 } sm={ 10 } md={ 6 } key={ profesional.id } sx={ { mb: 3, mt: 2 } }>
                            <CartaPro { ...profesional } />
                        </Grid>
                    )) }
                </Grid>
            </Container>
        );
    };

export default Profesionales;
