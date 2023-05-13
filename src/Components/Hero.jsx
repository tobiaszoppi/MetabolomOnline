import { Box, Button, styled, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import Navbar from "./Navbar";

import heroImg from "../media/hero_illustration.png";
import CustomButton from "./CustomButton";

const Hero = () => {
  const CustomBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    gap: theme.spacing(5),
    marginTop: theme.spacing(5),
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
    },
  }));

  const Title
      = styled(Typography)(({ theme }) => ({
    fontSize: "64px",
    color: "#000336",
    fontWeight: "bold",
    margin: theme.spacing(4,0,4,0),
    [theme.breakpoints.down("sm")]: {
      fontSize: "40px"
      },
  }));

  return <Box sx={{backgroundColor: "#E6F0FF", minHeight: "80vh"}}>
    <Container>
      <Navbar/>
      <CustomBox>
        <Box  sx={{flex:"1"}}>
          <Typography  variant="body2" sx={{
            fontSize: "18px", color:"#687690", fontWeight"500", mt:10, mb:4
          }}>
            Metabolom  Online
          </Typography>
        </Box>
      </CustomBox>
    </Container>
  </Box>;
};

export default Hero;
