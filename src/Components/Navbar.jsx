import React, { useEffect, useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import FeaturedPlayListIcon from "@mui/icons-material/FeaturedPlayList";
import MiscellaneousServicesIcon from "@mui/icons-material/MiscellaneousServices";
import ListAltIcon from "@mui/icons-material/ListAlt";
import HomeIcon from "@mui/icons-material/Home";
import ContactsIcon from "@mui/icons-material/Contacts";
import logoImg from "../media/logonuevo.png";
import {
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
} from "@mui/material";

import { FlexContainer, NavbarLogo, CustomMenuIcon, MaxWidthBox, NavbarLinksBox } from "./SharedStyles"; // Importamos los estilos compartidos

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
        if (event.type === "keydown" && (event.type === "Tab" || event.type === "Shift")) {
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
                <ScrollLink to={text} smooth={true} duration={500} className="navbar-link">
                    <ListItemButton>
                        <ListItemIcon>{renderIcon(index)}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItemButton>
                </ScrollLink>
            </ListItem>
        ));
    };

    return (
        <MaxWidthBox>
            <FlexContainer flexDirection="row" alignItems="center" justifyContent="center" gap={0}>
                <FlexContainer flexDirection="row" alignItems="center" alignSelf="center">
                    <CustomMenuIcon onClick={toggleDrawer("left", true)} />
                    <Drawer anchor="left" open={mobileMenu["left"]} onClose={toggleDrawer("left", false)}>
                        <List>{renderNavLinks()}</List>
                    </Drawer>
                    <NavbarLogo src={logoImg} alt="logo" />
                </FlexContainer>

                <NavbarLinksBox>{renderNavLinks()}</NavbarLinksBox>
            </FlexContainer>
        </MaxWidthBox>
    );
};

export default Navbar;

