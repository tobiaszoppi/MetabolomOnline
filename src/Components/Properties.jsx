import {Box, Button, Container, styled, Typography} from "@mui/material";
import React from "react";
import pediatryImg from "../media/pediatryImg.jpg";
import ancianoImg from "../media/ancianosYChicosImg.jpg";
import pediatry2Img from "../media/chicaYDoctoraImg.jpg";


const Gallery = styled(Box)(
    ( { theme } ) => (
        {
            height: "80vh",
            width: "100%",
            display: "flex",
            margin: "2% auto 0",
            boxSizing: "border-box",
            flexDirection: "row",
            flexWrap: "wrap",
            [ theme.breakpoints.down("sm") ]: {
                maxWidth: "350px",
                height: "auto",
            },
        }
    ));

const ImageBox = styled(Button)(
    ({ theme, content }) => ({
        margin: "0 1%",
        flexGrow: "1",
        flexBasis: 0,
        position: "relative",
        boxShadow: "20px",

        img: {
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transition: "0.5s", // Added transition here
            borderRadius: "15px",
        },

        "&::before": {
            content: `"${content}"`,
            position: "absolute",
            top: "50%",
            left: 0,
            right: 0,
            transform: "translateY(-50%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            textAlign: "center",
            fontSize: "60px",
            color: "rgba(100, 255, 255, 0.7)",
            fontFamily: "'Hanken Grotesk', sans-serif",
            fontWeight: "900",
            textShadow:
                "1px 1px rgba(100, 255, 255, 0.1), 2px 2px rgba(0, 0, 0, 0.1)",
            opacity: 0,
            transition: "0.3s",
        },

        "&:hover": {
            flexBasis: "50%",
            "&::before": {
                opacity: 1,
            },
        },

        "&.active": {
            flexBasis: "50%",
        },

        "&:nth-child(1):hover": {
            flexBasis: "50%",
        },

        [theme.breakpoints.down("sm")]: {
            flexBasis: "100%", // Take up full width
            margin: "2% auto", // Center horizontally
            height: "auto",
            width: "auto",
            "&:hover": {
                flexBasis: "100%", // Take up full width on hover
            },
            "&::before": {
                opacity: 1,
                fontSize: "24px",
                transition: "0.3s", // Added transition here
            },
        },
    })
);

const ImageContent = styled(Box)(
    ( { theme } ) => (
        {
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
        }
    ));

const Typography2 = styled(Typography)(
    ( { theme } ) => (
        {
            textAlign: "center",
            fontSize: "28px",
            color: "rgba(100,255,255,0.7)",
            fontFamily: "'Hanken Grotesk', sans-serif",
            fontWeight: "900",
            textShadow: "1px 1px rgba(100,255,255,0.1), 2px 2px rgba(0,0,0,0.1)",
            [ theme.breakpoints.down("md") ]: {
                fontSize: "24px",
            },
        }
    ));

const PropertiesBox = styled(Box)(
    ( { theme } ) => (
        {
            display: "flex",
            justifyContent: "space-between",
            marginTop: theme.spacing(5),
            [ theme.breakpoints.down("md") ]: {
                flexDirection: "column",
                alignItems: "center",
            },
        }
    ));

const Properties = () =>
    {
        return (
            <Box sx={ { t: 5, backgroundColor: "#E6F0FF", py: 1 } }>
                <Container>
                    <PropertiesBox>
                        <Typography sx={ { color: "#000339", fontSize: "35px", fontWeight: "bold" } }>
                            Servicios
                        </Typography>
                        <Typography sx={ { color: "#000339", fontSize: "16px", mt: 1 } }>
                            Todo lo que ofrecemos para ayudarte
                        </Typography>
                    </PropertiesBox>

                    <PropertiesBox>
                        <Gallery>
                            <ImageBox content="Pediatría">
                                <img src={ pediatryImg } alt="pediatryImg"/>
                            </ImageBox>
                            <ImageBox content="Adultos">
                                <img src={ pediatry2Img } alt="pediatry2Img"/>
                            </ImageBox>
                            <ImageBox content="Ancianos">
                                <img src={ ancianoImg } alt="ancianoImg"/>
                            </ImageBox>
                        </Gallery>
                    </PropertiesBox>

                </Container>
            </Box>
        );
    };

export default Properties;

