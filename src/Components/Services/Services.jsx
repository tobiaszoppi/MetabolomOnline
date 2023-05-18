import React from "react";
import "./services.css";
import {Link as ScrollLink} from 'react-scroll';

const Services = () =>
    {
        return (
            <div className="contenedor">
                <h2>Nuestras Especializaciónes</h2>
                <div className="cards">
                    <ScrollLink to="infantes"
                                smooth={ true }
                                duration={ 500 }
                                className="card red">
                        <p className="tip">Infantes</p>
                        <p className="second-text">Más Información</p>
                    </ScrollLink>
                    <ScrollLink to="adultos"
                                smooth={ true }
                                duration={ 500 }
                                className="card blue">
                        <p className="tip">Adultos</p>
                        <p className="second-text">Más Información</p>
                    </ScrollLink>
                    <ScrollLink to="general"
                                smooth={ true }
                                duration={ 500 }
                                className="card green">
                        <p className="tip">General</p>
                        <p className="second-text">Más Información</p>
                    </ScrollLink>
                </div>
            </div>
        );
    };

export default Services;
