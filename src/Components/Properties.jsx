import { Box, Container, styled, Typography } from "@mui/material";
import React from "react";
import House from "./House";
import { properties } from "../properties";

const Properties = () => {
  const PropertiesBox = styled(Box)(({ theme }) => ({
    display:"flex",
    justifyContent: "space-between",
    marginTop: theme.spacing(5),
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center",
    },
  }));

  const PropertiesTextBox = styled(Box)(({ theme }) => ({

    [theme.breakpoints.down("md")]: {
      textAlign: "center",
    },
  }));

  return (
      <Box sx={{t: 5, backgroundColor: "#F5FAFE", py: 10}}>
        <Container>
          <PropertiesBox>
            <Typography sx={{color:"#000339", fontSize: "35px", fontWeight: "bold"}}>
              Servicios
            </Typography>
            <Typography sx={{color:"#000339", fontSize: "16px", mt:1}}>
              Todo lo que ofrecemos para ayudarte
            </Typography>
          </PropertiesBox>
        </Container>
      </Box>
  );
};

export default Properties;
