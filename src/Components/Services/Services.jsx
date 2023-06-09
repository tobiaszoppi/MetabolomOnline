import React from "react";
import "./services.css";
import {Link as ScrollLink} from 'react-scroll';

const Services = () =>
    {
        return (
            <div className="contenedor">
                <h2>Areas de Atención</h2>
                <div className="cards">
                    <ScrollLink to="Infantes"
                                smooth={ true }
                                duration={ 500 }
                                className="card red">
                        <p className="tip">Niños y Adolescentes</p>
                        <p className="second-text">Más Información</p>
                    </ScrollLink>
                    <ScrollLink to="Adultos"
                                smooth={ true }
                                duration={ 500 }
                                className="card blue">
                        <p className="tip">Adultos</p>
                        <p className="second-text">Más Información</p>
                    </ScrollLink>

                </div>
            </div>
        );
    };

export default Services;
