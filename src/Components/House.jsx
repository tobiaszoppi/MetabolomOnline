import { Box, Typography } from "@mui/material";
import React from "react";
import { HouseBox, InfoBox, ImageContainer } from "./SharedStyles"; // Importamos los estilos compartidos

const House = ({ img, price, address, bedrooms, bathrooms, space }) => {
    return (
        <HouseBox>
            <ImageContainer>
                <img src={img} alt="housePhoto" style={{ maxWidth: "100%" }} />
            </ImageContainer>

            <Box sx={{ padding: "1rem" }}>
                <Typography variant="body2" sx={{ fontWeight: "700" }}>
                    ${price}
                </Typography>
                <Typography variant="body2" sx={{ my: 2 }}>
                    {address}
                </Typography>

                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <InfoBox>
                        <Typography variant="body2" sx={{ mt: 1 }}>
                            {bedrooms}
                        </Typography>
                    </InfoBox>
                    <InfoBox>
                        <Typography variant="body2" sx={{ mt: 1 }}>
                            {bathrooms}
                        </Typography>
                    </InfoBox>
                    <InfoBox>
                        <Typography variant="body2" sx={{ mt: 1 }}>
                            {space}
                        </Typography>
                    </InfoBox>
                </Box>
            </Box>
        </HouseBox>
    );
};

export default House;
