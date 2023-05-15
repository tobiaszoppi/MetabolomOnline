import React from "react";
import "./services.css";

const Services = () =>
    {
        return (
            <div className="contenedor">
                <h2>Nuestras Especializaciónes</h2>
                <div className="cards">
                    <div className="card red">
                        <p className="tip">Infantes</p>
                        <p className="second-text">Más Información</p>
                    </div>
                    <div className="card blue">
                        <p className="tip">Adultos</p>
                        <p className="second-text">Más Información</p>
                    </div>
                    <div className="card green">
                        <p className="tip">General</p>
                        <p className="second-text">Más Información</p>
                    </div>
                </div>
            </div>
        );
    };

export default Services;
