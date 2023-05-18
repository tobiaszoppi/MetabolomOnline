import React, { useState } from 'react';
import "./profesionales.css";

const CartaPro = ({ imagen, nombre, descripcion }) => {
    const [hovered, setHovered] = useState(false);

    const handleHover = () => {
        setHovered(!hovered);
    };

    // Comprueba si el nombre coincide con "DRA. CESARI Natalia"
    const isDirectorDeMetabolom = nombre === "DRA. CESARI Natalia";

    return (
        <div
            className={`card ${hovered ? 'hovered' : ''}`}
            onMouseEnter={handleHover}
            onMouseLeave={handleHover}
        >
            <div className="card-image-container">
                <img src={imagen} alt={nombre} className="card-image" />
            </div>
            <div className="card-content">
                <h3 className="card-title">{nombre}</h3>
                {isDirectorDeMetabolom && (
                    <p className="card-additional">Directora de Metabolom</p>
                )}
                <p className="card-description">{descripcion}</p>
            </div>
        </div>
    );
};

export default CartaPro;
