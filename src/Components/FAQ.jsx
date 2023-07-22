import React, { useState } from 'react';
import {
    Collapse,
    Container,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Typography
} from "@mui/material";
import {ExpandLess, ExpandMore} from "@mui/icons-material";
import HelpCenterIcon from '@mui/icons-material/HelpCenter';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import { FAQText } from "./SharedStyles"; // Importamos los estilos compartidos

const FAQ = () => {
    const [items, setItems] = useState({
        0: {
            question: "¿Qué es Metabolom Online?",
            answer: "Metabolom es un centro de atención integral bioquímico - medico con abordaje de los ejes nutricionales, bioquímico, clínico y psicológico para el estudio y tratamiento de enfermedades metabólicas congénitas y adquiridas en pacientes de todas las edades. Cuenta con un equipo de profesionales especializados en bioquímica, medicina y nutrición que analizan los metabolitos presentes en el organismo, que son las pequeñas moléculas que se generan al metabolizar sustancias químicas, alimentos o tejidos. Estos metabolitos reflejan la interacción entre el genoma y el ambiente y pueden indicar el riesgo de padecer ciertas enfermedades o la causa de los síntomas. Metabolom propone un enfoque diferente a la medicina tradicional, observando al individuo completo y todos sus sistemas orgánicos interrelacionados.",
            isOpen: true,
        },
        1: {
            question: "¿Cómo puedo solicitar una Consulta?",
            answer: "1. Complete el formulario que se encuentra en esta página y envíelo.\n" +
                "2. Los especialistas de Metabolom revisarán sus antecedentes y le asignarán un turno para el primer encuentro virtual.\n" +
                "3. En la evaluación inicial se coordinará el laboratorio específico para llegar al diagnóstico de los síntomas.\n" +
                "4. Devolución del diagnóstico a partir de los resultados previamente obtenidos.\n" +
                "5. Seguimiento y acompañamiento personalizado dependiendo de las necesidades del paciente.\n" +
                "Para mas informacion puede visitar el apartado de 'Esquema de trabajo'",
            isOpen: true,
        },
        2: {
            question: "¿Cuales son los aranceles?",
            answer: "En Metabolom, entendemos la importancia de brindar transparencia y claridad en cuanto a los costos asociados con nuestros servicios. A continuación, te proporcionamos información detallada sobre nuestros aranceles:\n" +
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
    });

    const toggleItem = (index) => {
        setItems((prevItems) => ({
            ...prevItems,
            [index]: { ...prevItems[index], isOpen: !prevItems[index].isOpen }
        }));
    };

    return (
        <Container id="FAQ">
            <Typography variant="h3" align="center" gutterBottom>
                Preguntas Frecuentes
            </Typography>
            <Typography variant="body1" align="center">
                Aquí hay algunas preguntas frecuentemente hechas. Si quisiera hacer alguna otra pregunta,
                puede sentirse cómodo de contactarse con nosotros.
            </Typography>

            <List sx={{ width: "100%" }} component="div">
                {Object.keys(items).map((index) => {
                    const item = items[index];
                    return (
                        <React.Fragment key={index}>
                            <ListItemButton onClick={() => toggleItem(index)}>
                                <ListItemIcon>
                                    <HelpCenterIcon />
                                </ListItemIcon>
                                <ListItemText
                                    primary={item.question}
                                    style={{ alignContent: "center", textAlign: "center" }}
                                />
                                {item.isOpen ? <ExpandLess /> : <ExpandMore />}
                            </ListItemButton>
                            <Collapse in={item.isOpen} timeout="auto" unmountOnExit>
                                <List component="div" disablePadding>
                                    <ListItemIcon sx={{ marginLeft: "50%"}}>
                                        <QuestionAnswerIcon />
                                    </ListItemIcon>
                                    {/* Utilizamos el componente FAQText para el texto de la respuesta */}
                                    <FAQText>
                                        {item.answer.split("\n").map((line, index) => (
                                            <React.Fragment key={index}>
                                                {line}
                                                <br />
                                            </React.Fragment>
                                        ))}
                                    </FAQText>
                                </List>
                            </Collapse>
                        </React.Fragment>
                    );
                })}
            </List>
        </Container>
    );
};

export default FAQ;
