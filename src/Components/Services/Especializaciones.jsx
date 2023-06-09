import {Container, styled, Typography} from "@mui/material";
import "./services.css";

const CustomTitle = styled(Typography)(
    () => (
        {
            width: "fit-content",
            margin: "auto",
            fontSize: "24px",
            fontWeight: "600",
            color: "#000339",

        }
    ));

const CustomTypography = styled(Typography)(
    () => (
        {
            fontSize: "16px",
            fontWeight: "500",
            lineHeight: "1.7em",
            textAlign: "justify",
        }
    ));

const Especializaciones = () =>
    {
        return (
            <Container>
                <div id="Especializaciones"
                     className="contenedor">
                    <h2 style={ { marginTop: "1rem" } }>Areas de Atención</h2>
                    <div style={ {
                        marginTop: "1rem", textAlign: "center", background: "white",
                        padding: "1rem",
                        borderRadius: "10px",
                        WebkitBoxShadow: "10.5px 6px 3.5px 0 #dddddd",
                        MozBoxShadow: "10.5px 6px 3.5px 0 #dddddd",
                        boxShadow: "10.5px 6px 3.5px 0 #dddddd",
                    } }>
                        <div id="Infantes">
                            <CustomTitle>Niños y Adolescentes</CustomTitle>
                            <CustomTypography>En Metabolom nos dedicamos a la atención integral de niños y jóvenes con
                                diversas condiciones o
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
                            <CustomTypography>Ofrecemos un servicio de atención a adultos desde el diagnóstico y prevención de enfermedades metabólicas
                                <br/> Nuestro equipo de profesionales
                                realiza
                                una evaluación integral de cada paciente, teniendo en cuenta su historia clínica, sus
                                antecedentes familiares y personales, y los resultados de un perfil de laboratorio
                                específico que nos permite identificar la causa de sus afecciones.<br/> Entre las
                                enfermedades metabólicas que diagnosticamos y tratamos se encuentran las adquiridas y
                                las congénitas, que pueden afectar a distintos sistemas orgánicos del cuerpo, como el
                                digestivo, el nervioso, el endocrino o el cardiovascular. Algunos de los síntomas más
                                frecuentes que presentan nuestros pacientes son: migrañas, dolores estomacales, vista
                                nubosa, problemas para la concentración y rendimiento, depresión, ansiedad, sobrepeso,
                                cansancio, inflamación intestinal, diarrea, constipación, entre otros.<br/> Nuestro
                                objetivo
                                es llegar al origen de la afección para generar disminución de los síntomas, prevención
                                de aparición de otras enfermedades y mejora de la calidad de vida.</CustomTypography>
                        </div>
                    </div>
                </div>
            </Container>
        );
    };

export default Especializaciones;
