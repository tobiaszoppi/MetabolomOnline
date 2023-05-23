import React, { useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import FeaturedPlayListIcon from "@mui/icons-material/FeaturedPlayList";
import MiscellaneousServicesIcon from "@mui/icons-material/MiscellaneousServices";
import ListAltIcon from "@mui/icons-material/ListAlt";
import HomeIcon from "@mui/icons-material/Home";
import ContactsIcon from "@mui/icons-material/Contacts";
import logoImg from "../media/logonuevo.png";
import CustomButton from "./CustomButton";
import {
    Container,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    styled,
} from "@mui/material";

const NavLink = styled(Typography)(({ theme }) => ({
    fontSize: "14px",
    color: "#4F5361",
    fontWeight: "bold",
    cursor: "pointer",
    "&:hover": {
        color: "#fff",
    },
}));

const NavbarLinksBox = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: theme.spacing(3),
    [theme.breakpoints.down("md")]: {
        display: "none",
    },
}));

const CustomMenuIcon = styled(MenuIcon)(({ theme }) => ({
    cursor: "pointer",
    display: "none",
    margin: theme.spacing(2, 0, 2, 0),
    [theme.breakpoints.down("md")]: {
        display: "block",
    },
}));

const NavbarContainer = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: theme.spacing(5, 0, 5, 0),
    gap: "5px",
    [theme.breakpoints.down("md")]: {
        padding: theme.spacing(2, 0, 2, 0),
    },
}));

const NavbarLogo = styled("img")(({ theme }) => ({
    cursor: "pointer",
    maxWidth: "45%",
    [theme.breakpoints.down("md")]: {
        display: "none",
    },
}));

export const Navbar = () => {
    useEffect(() => {
        const handleSmoothScroll = (event) => {
            event.preventDefault();
            const targetId = event.target.getAttribute("href");
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({ behavior: "smooth" });
            }
        };

        const navbarLinks = document.querySelectorAll(".navbar-link");
        navbarLinks.forEach((link) => {
            link.addEventListener("click", handleSmoothScroll);
        });

        return () => {
            navbarLinks.forEach((link) => {
                link.removeEventListener("click", handleSmoothScroll);
            });
        };
    }, []);

    const list = (anchor) => (
        <Box
            sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                {["Inicio", "Metodologia", "Nosotros", "FAQ", "Contacto"].map(
                    (text, index) => (
                        <ListItem key={text} disablePadding>
                            <ScrollLink
                                to={text}
                                smooth={true}
                                duration={500}
                                className="navbar-link"
                            >
                                <ListItemButton>
                                    <ListItemIcon>
                                        {index === 0 && <HomeIcon />}
                                        {index === 1 && <FeaturedPlayListIcon />}
                                        {index === 2 && <MiscellaneousServicesIcon />}
                                        {index === 3 && <ListAltIcon />}
                                        {index === 4 && <ContactsIcon />}
                                    </ListItemIcon>
                                    <ListItemText primary={text} />
                                </ListItemButton>
                            </ScrollLink>
                        </ListItem>
                    )
                )}
            </List>
        </Box>
    );

    const toggleDrawer = (anchor, open) => (event) => {
        if (
            event.type === "keydown" &&
            (event.type === "Tab" || event.type === "Shift")
        ) {
            return;
        }

        setMobileMenu({ ...mobileMenu, [anchor]: open });
    };

    const [mobileMenu, setMobileMenu] = React.useState({
        left: false,
    });

    return (
        <Container>
            <NavbarContainer>
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "2.5rem",
                    }}
                >
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                        <CustomMenuIcon onClick={toggleDrawer("left", true)} />
                        <Drawer
                            anchor="left"
                            open={mobileMenu["left"]}
                            onClose={toggleDrawer("left", false)}
                        >
                            {list("left")}
                        </Drawer>
                        <NavbarLogo src={logoImg} alt="logo" />
                    </Box>

                    <NavbarLinksBox>
                        <ScrollLink
                            to="Inicio"
                            smooth={true}
                            duration={500}
                            className="navbar-link"
                        >
                            <NavLink variant="body2">Inicio</NavLink>
                        </ScrollLink>
                        <ScrollLink
                            to="Metodologia"
                            smooth={true}
                            duration={500}
                            className="navbar-link"
                        >
                            <NavLink variant="body2">Metodologia</NavLink>
                        </ScrollLink>
                        <ScrollLink
                            to="Nosotros"
                            smooth={true}
                            duration={500}
                            className="navbar-link"
                        >
                            <NavLink variant="body2">Nosotros</NavLink>
                        </ScrollLink>
                        <ScrollLink
                            to="FAQ"
                            smooth={true}
                            duration={500}
                            className="navbar-link"
                        >
                            <NavLink variant="body2">FAQ</NavLink>
                        </ScrollLink>
                        <ScrollLink
                            to="Contacto"
                            smooth={true}
                            duration={500}
                            className="navbar-link"
                        >
                            <NavLink variant="body2">Contacto</NavLink>
                        </ScrollLink>
                    </NavbarLinksBox>
                </Box>

                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <CustomButton
                        backgroundColor="#0F1B4C"
                        color="#fff"
                        buttonText="Seguimiento de Consulta"

                    />
                </Box>
            </NavbarContainer>
        </Container>
    );
};

export default Navbar;
