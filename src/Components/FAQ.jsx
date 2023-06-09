import React from 'react';
import {
    Collapse,
    Container,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    styled,
    Typography
} from "@mui/material";
import {ExpandLess, ExpandMore} from "@mui/icons-material";
import HelpCenterIcon from '@mui/icons-material/HelpCenter';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';

const CustomBox = styled(Container)(
    ( { theme } ) => (
        {
            mb: 2,
            backgroundColor: "#E6F0FF",
            textAlign: "center",
            justifyContent: "center",
            alignItems: "center",
            alignContent: "center",
            "a": {
                display: "inline-block",
                marginTop: "2rem",
            },
            [ theme.breakpoints.down("md") ]: {
                padding: 0,
                width: "100%",
            }
        }
    ));

const CustomTitle = styled(Typography)(
    ( { theme } ) => (
        {
            fontFamily: "'Hanken Grotesk', sans-serif",
            fontSize: "35px",
            color: "#000339",
            fontWeight: "700",
            textAlign: "center",
        }
    ));

const CustomText = styled(Typography)(
    ( { theme } ) => (
        {
            fontFamily: "'Hanken Grotesk', sans-serif",
            fontWeight: "200",
            fontSize: "1.4rem",
            textAlign: "center",
            lineHeight: 1.3,
            color: "hsl(229, 8%, 60%)",
        }
    ));
const FAQ = () =>
    {
        const [items, setItems] = React.useState([
                {
                    question: "¿Qué es Metabolom Online?",
                    answer:
                        "Metabolom es un centro de atención integral bioquímico - medico con abordaje de los ejes nutricionales, bioquímico, clínico y psicológico para el estudio y tratamiento de enfermedades metabólicas congénitas y adquiridas en pacientes de todas las edades. Cuenta con un equipo de profesionales especializados en bioquímica, medicina y nutrición que analizan los metabolitos presentes en el organismo, que son las pequeñas moléculas que se generan al metabolizar sustancias químicas, alimentos o tejidos. Estos metabolitos reflejan la interacción entre el genoma y el ambiente y pueden indicar el riesgo de padecer ciertas enfermedades o la causa de los síntomas. Metabolom propone un enfoque diferente a la medicina tradicional, observando al individuo completo y todos sus sistemas orgánicos interrelacionados.",
                    isOpen: true,
                },
                {
                    question: "¿Cómo puedo solicitar una Consulta?",
                    answer:
                        "1. Complete el formulario que se encuentra en esta página y envíelo.\n" +
                        "2. Los especialistas de Metabolom revisarán sus antecedentes y le asignarán un turno para el primer encuentro virtual.\n" +
                        "3. En la evaluación inicial se coordinará el laboratorio específico para llegar al diagnóstico de los síntomas.\n" +
                        "4. Devolución del diagnóstico a partir de los resultados previamente obtenidos.\n" +
                        "5. Seguimiento y acompañamiento personalizado dependiendo de las necesidades del paciente.\n" +
                        "Para mas informacion puede visitar el apartado de 'Esquema de trabajo'",
                    isOpen: true,
                },
            {
                question: "¿Cuales son los aranceles?",
                answer:
                    "En Metabolom, entendemos la importancia de brindar transparencia y claridad en cuanto a los costos asociados con nuestros servicios. A continuación, te proporcionamos información detallada sobre nuestros aranceles:\n" +
                    "\n" +
                    "Primer encuentro: El primer encuentro comprende el análisis de antecedentes, un encuentro integral médico-bioquímico y la coordinación para nuevos estudios. Este servicio tiene un costo de $20.000.\n" +
                    "\n" +
                    "Segundo encuentro: Aproximadamente 30 días después del primer encuentro, se llevará a cabo el segundo encuentro. En esta cita, interpretaremos los resultados, realizaremos una devolución integral, estableceremos los pasos a seguir y discutiremos el plan de tratamiento. El arancel para el segundo encuentro es de $20.000.\n" +
                    "\n" +
                    "Consulta con Nutricionista: Después del segundo encuentro, se puede programar una consulta con nuestro nutricionista especializado. Este servicio tiene un costo de $10.000.\n" +
                    "\n" +
                    "Seguimiento: Ofrecemos diferentes tipos de seguimiento para adaptarnos a tus necesidades individuales. Estos son los aranceles correspondientes:\n" +
                    "\n" +
                    "Seguimiento a los 90 días: $16.000.\n" +
                    "Seguimiento nutricional: $7.000.\n" +
                    "Seguimiento en casos complejos: $20.000.\n",
                isOpen: false,
            },
            ])
        ;

        const toggleItem = ( index ) =>
            {
                setItems(( prevItems ) =>
                    prevItems.map(( item, i ) =>
                        i === index ? { ...item, isOpen: !item.isOpen } : item
                    )
                );
            };

        return (
            <CustomBox id={ "FAQ" }>
                <CustomTitle>Preguntas Frecuentes</CustomTitle>
                <CustomText>
                    Aquí hay algunas preguntas frecuentemente hechas. Si quisiera hacer alguna otra pregunta,
                    puede sentirse cómodo de contactarse con nosotros.
                </CustomText>

                <List sx={ { width: "100%" } } component="div">
                    { items.map(( item, index ) => (
                        <React.Fragment key={ index }>
                            <ListItemButton onClick={ () => toggleItem(index) }>
                                <ListItemIcon>
                                    <HelpCenterIcon/>
                                </ListItemIcon>
                                <ListItemText primary={ item.question }
                                              style={ { alignContent: "center", textAlign: "center" } }/>
                                { item.isOpen ? <ExpandLess/> : <ExpandMore/> }
                            </ListItemButton>
                            <Collapse in={ item.isOpen } timeout="auto" unmountOnExit>
                                <List component="div" disablePadding>
                                    <ListItemIcon>
                                        <QuestionAnswerIcon/>
                                    </ListItemIcon>
                                    <ListItemText primary={ item.answer.split('\n').map(( line, index ) => (
                                        <React.Fragment key={ index }>
                                            { line }
                                            <br/>
                                        </React.Fragment>
                                    )) }/>
                                </List>
                            </Collapse>
                        </React.Fragment>
                    )) }
                </List>
            </CustomBox>
        );
    };

export default FAQ;
