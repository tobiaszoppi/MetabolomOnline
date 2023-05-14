import { Box, Button, Container, styled, Typography } from "@mui/material";
import React from "react";
import pediatryImg from "../media/pediatryImg.jpg";
import ancianoImg from "../media/ancianosYChicosImg.jpg";
import pediatry2Img from "../media/chicaYDoctoraImg.jpg";

const Gallery = styled(Box)(({ theme }) => ({
    height: "50vh",
    width: "100%",
    display: "flex",
    margin: "2% auto 0",
    boxSizing: "border-box",
    flexDirection: "row", // Change the direction to row by default
    flexWrap: "wrap", // Wrap items to new rows
    [theme.breakpoints.down("sm")]: {
        maxWidth: "350px",
    },
}));

const ImageBox = styled(Button)(({ theme }) => ({
    margin: "0 1%",
    flexGrow: "1",
    flexBasis: 0,
    transition: "0.5s",
    position: "relative", // Added positioning for the container div

    "&:hover": {
        flexBasis: "50%",
    },

    img: {
        borderRadius: "15px",
        width: "100%",
        height: "100%",
        objectFit: "cover",
        transition: "0.5s",
    },

    "&.active": {
        flexBasis: "50%",
    },

    "&:hover.active": {
        flexBasis: 0,
    },

    "&:nth-child(1):hover": {
        flexBasis: "50%",
    },

    // Apply changes for screens smaller than "md"
    [theme.breakpoints.down("sm")]: {
        flexBasis: "100%", // Take up full width
        margin: "2% auto", // Center horizontally
        "&:hover, &:hover.active, &:nth-child(1):hover": {
            flexBasis: "100%", // Take up full width on hover
        },
    },
}));

const ImageContent = styled(Box)(({ theme }) => ({
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    padding: theme.spacing(0.5),
    textAlign: "center",
    backgroundColor: `rgba(255, 255, 255, 0)`,
    borderRadius: "16px",
    boxShadow: "0 4px 30px `rgba(0, 0, 0, 0.1)`",
    backdropFilter: `blur(5px)`,
    webkitBackdropFilter: `blur(5px)`,
    border: "1px solid `rgba(255, 255, 255, 0.3)`",
}));

const PropertiesBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    marginTop: theme.spacing(5),
    [theme.breakpoints.down("md")]: {
        flexDirection: "column",
        alignItems: "center",
    },
}));

const Properties = () => {
    return (
        <Box sx={{ t: 5, backgroundColor: "#F5FAFE", py: 10 }}>
            <Container>
                <PropertiesBox>
                    <Typography sx={{ color: "#000339", fontSize: "35px", fontWeight: "bold" }}>
                        Servicios
                    </Typography>
                    <Typography sx={{ color: "#000339", fontSize: "16px", mt: 1 }}>
                        Todo lo que ofrecemos para ayudarte
                    </Typography>
                </PropertiesBox>

                <PropertiesBox>
                    <Gallery>
                        <ImageBox>
                            <img src={pediatryImg} alt="pediatryImg" />
                            <ImageContent>
                                <Typography sx={{ color: "#000339", fontSize: "24px", fontWeight: "bold" }}>
                                    Pediatría
                                </Typography>
                            </ImageContent>
                        </ImageBox>
                        <ImageBox>
                            <img src={pediatry2Img} alt="pediatry2Img" />
                            <ImageContent>
                                <Typography sx={{ color: "#000339", fontSize: "24px", fontWeight: "bold" }}>
                                    Adultos
                                </Typography>
                            </ImageContent>
                        </ImageBox>
                        <ImageBox>
                            <img src={ancianoImg} alt="ancianoImg" />
                            <ImageContent>
                                <Typography sx={{ color: "#000339", fontSize:"24px", fontWeight: "bold", }}>
                                    Ancianos
                                </Typography>
                            </ImageContent>
                        </ImageBox>
                    </Gallery>
                </PropertiesBox>
            </Container>
        </Box>
    );
};

export default Properties;

