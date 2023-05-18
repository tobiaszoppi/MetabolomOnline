import {useLocation} from 'react-router-dom';
import {Container, styled, Typography} from "@mui/material";
import "./services.css";

const CustomTitle = styled(Typography) (({theme}) => ({
    fontSize: "24px",
    fontWeight: "500",
}));

const TipoServicios = () =>
    {
        const location = useLocation();
        const section = new URLSearchParams(location.search).get('seccion');

        const scrollToSection = () =>
            {
                const element = document.getElementById(section);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            };

        return (
            <div id="tiposervicios"
                       className="contenedor"
                 style={{ marginTop: "1rem",}}>
                <h2>Tipos de Servicios</h2>
                <div id="infantes" ref={ scrollToSection }>
                    <CustomTitle>Infantes</CustomTitle>
                    {/* Contenido de la sección de Infantes */ }
                </div>
                <div id="adultos" ref={ scrollToSection }>
                    <CustomTitle>Adultos</CustomTitle>
                    {/* Contenido de la sección de Adultos */ }
                </div>
                <div id="general" ref={ scrollToSection }>
                    <CustomTitle>General</CustomTitle>
                    {/* Contenido de la sección General */ }
                </div>
            </div>
        );
    };

export default TipoServicios;
