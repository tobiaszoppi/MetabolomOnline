import React from 'react';
import "./profesionales.css";

const CardPro = ( { imagen, nombre, descripcion } ) =>
    {
        return (
            <div className="card">
                <div className="card-image-container">
                    <img src={ imagen } alt={ nombre } className="card-image"/>
                </div>
                <div className="card-content">
                    <h3 className="card-title">{ nombre }</h3>
                    <p className="card-description">{ descripcion }</p>
                </div>
            </div>
        );
    };

export default CardPro;
