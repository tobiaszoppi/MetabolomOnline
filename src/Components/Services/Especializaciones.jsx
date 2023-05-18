import {Container, styled, Typography} from "@mui/material";
import "./services.css";

const CustomTitle = styled(Typography)(
    () => (
        {
            fontSize: "24px",
            fontWeight: "600",
        }
    ));
const CustomTypography = styled(Typography)(
    () => (
        {
            fontSize: "16px",
            fontWeight: "400",
            textAlign: "justify",
        }
    ));

const Especializaciones = () =>
    {
        return (
            <Container>
                <div id="Especializaciones"
                     className="contenedor">
                    <h2>Especializaciones</h2>
                    <div style={ {
                        marginTop: "1rem", textAlign: "center", background: "white",
                        padding: "1rem",
                        borderRadius: "10px",
                        webkitBoxShadow: "10.5px 6px 3.5px 0 #dddddd",
                        mozBoxShadow: "10.5px 6px 3.5px 0 #dddddd",
                        boxShadow: "10.5px 6px 3.5px 0 #dddddd",
                    } }>
                        <div id="Infantes">
                            <CustomTitle>Infantes</CustomTitle>
                            <CustomTypography>En Metabolom, nos dedicamos a la atención integral de niños y jóvenes con
                                diversas
                                condiciones o
                                patologías que afectan su calidad de vida y su desarrollo.<br/> Contamos con un equipo
                                multidisciplinario de profesionales que realizan un diagnóstico preciso y personalizado,
                                basado
                                en análisis específicos y el seguimiento clínico.<br/> Entre las condiciones que
                                atendemos
                                se
                                encuentran: trastornos del espectro autista, trastornos del desarrollo, celiaquía,
                                intolerancia
                                a los alimentos, alergias específicas, dermatitis, enfermedades metabólicas congénitas y
                                disbiosis.<br/> Nuestra metodología consiste en realizar encuentros con el tutor del
                                menor
                                y, en
                                algunos casos, solicitar fotos del mismo para ilustrar alguna situación clínica en
                                particular.<br/>
                                Nuestro objetivo es brindar una atención de calidad y un tratamiento adecuado para cada
                                caso.</CustomTypography>
                        </div>
                        <div id="Adultos">
                            <CustomTitle>Adultos</CustomTitle>
                            <CustomTypography>En Metabolom, nos dedicamos a la atención integral de niños y jóvenes con
                                diversas
                                condiciones o
                                patologías que afectan su calidad de vida y su desarrollo.<br/> Contamos con un equipo
                                multidisciplinario de profesionales que realizan un diagnóstico preciso y personalizado,
                                basado
                                en análisis específicos y el seguimiento clínico.<br/> Entre las condiciones que
                                atendemos
                                se
                                encuentran: trastornos del espectro autista, trastornos del desarrollo, celiaquía,
                                intolerancia
                                a los alimentos, alergias específicas, dermatitis, enfermedades metabólicas congénitas y
                                disbiosis.<br/> Nuestra metodología consiste en realizar encuentros con el tutor del
                                menor
                                y, en
                                algunos casos, solicitar fotos del mismo para ilustrar alguna situación clínica en
                                particular.<br/>
                                Nuestro objetivo es brindar una atención de calidad y un tratamiento adecuado para cada
                                caso.</CustomTypography>
                        </div>
                        <div id="General">
                            <CustomTitle>General</CustomTitle>
                            <CustomTypography>En Metabolom, nos dedicamos a la atención integral de niños y jóvenes con
                                diversas
                                condiciones o
                                patologías que afectan su calidad de vida y su desarrollo.<br/> Contamos con un equipo
                                multidisciplinario de profesionales que realizan un diagnóstico preciso y personalizado,
                                basado
                                en análisis específicos y el seguimiento clínico.<br/> Entre las condiciones que
                                atendemos
                                se
                                encuentran: trastornos del espectro autista, trastornos del desarrollo, celiaquía,
                                intolerancia
                                a los alimentos, alergias específicas, dermatitis, enfermedades metabólicas congénitas y
                                disbiosis.<br/> Nuestra metodología consiste en realizar encuentros con el tutor del
                                menor
                                y, en
                                algunos casos, solicitar fotos del mismo para ilustrar alguna situación clínica en
                                particular.<br/>
                                Nuestro objetivo es brindar una atención de calidad y un tratamiento adecuado para cada
                                caso.</CustomTypography>
                        </div>
                    </div>
                </div>
            </Container>
        );
    };

export default Especializaciones;
