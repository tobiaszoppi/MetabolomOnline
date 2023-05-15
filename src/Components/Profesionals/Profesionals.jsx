import React from 'react';
import "./profesionals.css";
import nati from "../../media/nati.png";

const Profesionals = () =>
    {
        return (
            <div className="container">
                <h2>Nuestros Profesionales de la Salud</h2>
                <div className="card">
                    <img
                        src={nati}
                        alt=""/>
                    <div className="card-content">
                        <h2>
                            Natalia Cesari
                        </h2>
                        <p>
                            SomeText
                        </p>
                        <a href="#" className="button">
                            Ver más
                            <span className="material-symbols-outlined">
                                      arrow_right_alt
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        );
    }

export default Profesionals;