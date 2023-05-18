import { styled, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import {Link as ScrollLink} from 'react-scroll';
import React from "react";

import fbIcon from "../media/fbicon.png";
import twitterIcon from "../media/twittericon.png";
import linkedinIcon from "../media/linkedinicon.png";

const Footer = () => {
  const CustomContainer = styled(Container)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-around",
    gap: theme.spacing(5),
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      textAlign: "center",
    },
  }));

  const IconBox = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: "1rem",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
    },
  }));

  const FooterLink = styled(ScrollLink)(() => ({
    fontSize: "16px",
    color: "#7A7A7E",
    fontWeight: "300",
    cursor: "pointer",
    "&:hover": {
      color: "#000",
    },
  }));

  return (
      <Box sx={{ py: 3 }}>
        <CustomContainer>
            <Box>
              <Typography
                  sx={{
                    fontSize: "20px",
                    color: "#1C1C1D",
                    fontWeight: "700",
                    mb: 2,
                  }}
              >
                Sobre Nosotros
              </Typography>

              <FooterLink to="Inicio"
                          smooth={ true }
                          duration={ 500 }>¿Qué es Metabolom?</FooterLink>
              <br />
              <FooterLink to="Nosotros"
                          smooth={ true }
                          duration={ 500 }>Profesionales</FooterLink>
              <br />
              <FooterLink to="Esquema"
                          smooth={ true }
                          duration={ 500 }>Solicitar Consulta</FooterLink>
            </Box>

              <Box>
                  <Typography
                      sx={{
                          fontSize: "20px",
                          color: "#1C1C1D",
                          fontWeight: "700",
                          mb: 2,
                      }}
                  >
                      Tipos de Consultas
                  </Typography>

                  <FooterLink to="Infantes"
                              smooth={ true }
                              duration={ 500 }>Infantes</FooterLink>
                  <br />
                  <FooterLink to="Adultos"
                              smooth={ true }
                              duration={ 500 }>Adultos</FooterLink>
                  <br />
                  <FooterLink to="General"
                              smooth={ true }
                              duration={ 500 }>Generales</FooterLink>
                  <br />
              </Box>

            <Box>
              <Typography
                  sx={{
                    fontSize: "20px",
                    color: "#1C1C1D",
                    fontWeight: "700",
                    mb: 2,
                  }}
              >
                Redes Sociales
              </Typography>

              <Typography
                  sx={{
                    fontSize: "14px",
                    color: "#7A7A7E",
                    fontWeight: "500",
                    mb: 2,
                  }}
              >
                  En nuestras redes sociales, puede encontrar más <br/> información detallada sobre nuestros profesionales <br/> y los proyectos que realizamos.
              </Typography>

              <IconBox>
                <img src={fbIcon} alt="fbIcon" style={{ cursor: "pointer" }} />
                <img
                    src={twitterIcon}
                    alt="twitterIcon"
                    style={{ cursor: "pointer" }}
                />
                <img
                    src={linkedinIcon}
                    alt="linkedinIcon"
                    style={{ cursor: "pointer" }}
                />
              </IconBox>
            </Box>
        </CustomContainer>
      </Box>
  );
};

export default Footer;