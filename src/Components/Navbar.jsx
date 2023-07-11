import React, { useEffect, useState } from "react";
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
    fontSize: "22px",
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
        marginLeft: theme.spacing(2), // Margen izquierdo agregado
        fontSize: "32px", // Tamaño del ícono aumentado
    },
}));

const NavbarContainer = styled(Container)(({ theme }) => ({
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
    maxWidth: "60%",

    [theme.breakpoints.down("lg")]: {
        display: "none",
    },
}));

const Navbar = () => {
    const [mobileMenu, setMobileMenu] = useState({ left: false });

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

    const toggleDrawer = (anchor, open) => (event) => {
        if (
            event.type === "keydown" &&
            (event.type === "Tab" || event.type === "Shift")
        ) {
            return;
        }

        setMobileMenu({ ...mobileMenu, [anchor]: open });
    };

    const renderIcon = (index) => {
        switch (index) {
            case 0:
                return <HomeIcon />;
            case 1:
                return <FeaturedPlayListIcon />;
            case 2:
                return <MiscellaneousServicesIcon />;
            case 3:
                return <ListAltIcon />;
            case 4:
                return <ContactsIcon />;
            default:
                return null;
        }
    };

    const renderNavLinks = () => {
        const sections = ["Metodologia", "Nosotros", "Esquema", "FAQ", "Contacto"];

        return sections.map((text, index) => (
            <ListItem key={text} disablePadding>
                <ScrollLink
                    to={text}
                    smooth={true}
                    duration={500}
                    className="navbar-link"
                >
                    <ListItemButton>
                        <ListItemIcon>{renderIcon(index)}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItemButton>
                </ScrollLink>
            </ListItem>
        ));
    };

    return (
        <NavbarContainer>
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "2.5rem",
                }}
            >
                <Box sx={{ display: "flex", alignItems: "center", alignContent: "center", alignSelf: "center" }}>
                    <CustomMenuIcon onClick={toggleDrawer("left", true)} />
                    <Drawer
                        anchor="left"
                        open={mobileMenu["left"]}
                        onClose={toggleDrawer("left", false)}
                    >
                        <List>{renderNavLinks()}</List>
                    </Drawer>
                    <NavbarLogo src={logoImg} alt="logo" />
                </Box>

                <NavbarLinksBox>{renderNavLinks()}</NavbarLinksBox>
            </Box>
        </NavbarContainer>
    );
};

export default Navbar;
