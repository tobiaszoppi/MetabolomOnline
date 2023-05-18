import { styled, Typography} from "@mui/material";
import "./services.css";

const CustomTitle = styled(Typography) (() => ({
    fontSize: "24px",
    fontWeight: "500",
}));

const Especializaciones = () =>
    {
        return (
            <div id="Especializaciones"
                       className="contenedor"
                 style={{ marginTop: "1rem",}}>
                <h2>Tipos de Servicios</h2>
                <div id="Infantes">
                    <CustomTitle>Infantes</CustomTitle>
                    {/* Contenido de la sección de Infantes */ }
                </div>
                <div id="Adultos">
                    <CustomTitle>Adultos</CustomTitle>
                    {/* Contenido de la sección de Adultos */ }
                </div>
                <div id="General">
                    <CustomTitle>General</CustomTitle>
                    {/* Contenido de la sección General */ }
                </div>
            </div>
        );
    };

export default Especializaciones;
