// Sección de estilos compartidos

// Estilos para contenedores con flexbox y gap
import {Box} from "@mui/system";
import {Container, styled, Typography} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link as ScrollLink } from "react-scroll";

// Sección de estilos compartidos

// Estilos para el CustomFlexBox
export const CustomFlexBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    gap: theme.spacing(10),
    [theme.breakpoints.down("md")]: {
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
    },
}));

// Estilos para el CustomTitle
export const CustomTitle = styled(Typography)(({ theme }) => ({
    fontSize: "64px",
    color: "#000336",
    fontWeight: "bold",
    margin: theme.spacing(2, 0, 0, 0),
    [theme.breakpoints.down("sm")]: {
        fontSize: "40px",
    },
}));

// Estilos para el CustomText
export const CustomText = styled(Typography)(({ theme }) => ({
    fontSize: "18px",
    color: "#5A6473",
    fontWeight: "300",
    my: 4,
}));

// Estilos para el CustomImageContainer
export const CustomImageContainer = styled(Box)(({ theme }) => ({
    position: "relative",
    "& img": {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        maxWidth: "95%",
        [theme.breakpoints.down("md")]: {
            width: "100%",
        },
    },
}));

// Estilos compartidos para CustomBox
export const CustomBox = styled(Container)(({ theme, img }) => ({
    backgroundImage: `url(${img})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    borderBottomRightRadius: "25px",
    borderBottomLeftRadius: "25px",
    [theme.breakpoints.down("sm")]: {
        backgroundPositionX: "-300px",
    },
}));

// Estilos compartidos para CustomContainer
export const CustomContainer = styled(Container)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",

    "img": {
        maxWidth: "20%",
        minWidth: "200px",
        marginTop: "20px",
    },

    [theme.breakpoints.down("md")]: {
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
    },
}));

// Estilos compartidos para CustomTypografy
export const CustomTypografy = styled(Typography)(({ theme }) => ({
    color: "rgba(42,42,42,0.68)",
    fontSize: "18px",
    fontFamily: "'Hanken Grotesk', sans-serif",
    fontWeight: "500",
    backgroundColor: `rgba(255, 255, 255, 0.4)`,
    borderRadius: "16px",
    boxShadow: "0 4px 30px `rgba(0, 0, 0, 0.1)`",
    backdropFilter: `blur(5px)`,
    webkitBackdropFilter: `blur(5px)`,
    border: "1px solid `rgba(255, 255, 255, 0.3)`",
    padding: "15px",
}));

//CustomBoxParaNavBar
export const NavbarContainer = styled(Box)(() => ({
    width: "100%",
    marginLeft: "auto",
    boxSizing: "border-box",
    marginRight: "auto",
    display: "flex",
    webkitBoxAlign: "center",
    alignItems: "center",
    webkitBoxPack: "justify",
    justifyContent: "space-between",
    padding: "40px 0px",
    gap: "5px"
}));

// Estilos para contenedores con flexbox y gap
export const FlexContainer = styled(Box)(({ theme, flexDirection, alignItems, justifyContent, gap }) => ({
    display: "flex",
    flexDirection: flexDirection || "row",
    alignItems: alignItems || "center",
    justifyContent: justifyContent || "center",
    gap: theme.spacing(gap) || 0,
}));

// Estilos para los contenedores de ancho máximo y espaciado
export const MaxWidthBox = styled(Box)(({ theme, maxWidth }) => ({
    maxWidth: maxWidth || "100%",
    margin: theme.spacing(0, 2),
    [theme.breakpoints.down("md")]: {
        margin: theme.spacing(2, 0),
    },
}));

// Estilos para los contenedores de imágenes
export const ImageContainer = styled(Box)(({ width }) => ({
    width: width || "100%",
}));

// Estilos para el ícono del menú
export const CustomMenuIcon = styled(MenuIcon)(({ theme }) => ({
    cursor: "pointer",
    display: "none",
    margin: theme.spacing(2, 0, 2, 0),
    [theme.breakpoints.down("md")]: {
        display: "block",
        marginLeft: theme.spacing(2),
        fontSize: "32px",
    },
}));

// Estilos para el logotipo de la barra de navegación
export const NavbarLogo = styled("img")(({ theme }) => ({
    cursor: "pointer",
    maxWidth: "50%",
    [theme.breakpoints.down("lg")]: {
        display: "none",
    },
}));

// Estilos para los links de la barra de navegacion
export const NavbarLinksBox = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    gap: theme.spacing(3),
    [theme.breakpoints.down("md")]: {
        display: "none",
    },
}));

// Estilos para la caja de la casa en la sección House
export const HouseBox = styled(Box)(({ theme }) => ({
    maxWidth: 350,
    backgroundColor: "#fff",
    margin: theme.spacing(0, 2, 0, 2),
    [theme.breakpoints.down("md")]: {
        margin: theme.spacing(2, 0, 2, 0),
    },
}));

// Estilos para los íconos y texto en la sección House
export const InfoBox = styled(Box)({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
});

// Estilos para los contenedores en la sección Guide
export const GuideContainer = styled(Box)(({ theme, width }) => ({
    width: width || "30%",
    [theme.breakpoints.down("md")]: {
        width: "85%",
    },
}));

// Estilos para la caja que contiene las guías en la sección Guide
export const GuidesBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-around",
    textAlign: "center",
    width: "80%",
    margin: theme.spacing(5, "auto"),
    [theme.breakpoints.down("md")]: {
        width: "100%",
    },
    [theme.breakpoints.down("sm")]: {
        flexDirection: "column",
    },
}));

// Estilos para la caja individual de cada guía en la sección Guide
export const GuideBox = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "10px",
    maxWidth: "300px",
    marginTop: theme.spacing(5),
    [theme.breakpoints.down("sm")]: {
        margin: theme.spacing(2, 0),
        maxWidth: "100%",
    },
}));

// Estilos para el footer
export const FooterContainer = styled(Container)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-around",
    gap: theme.spacing(5),
    [theme.breakpoints.down("sm")]: {
        flexDirection: "column",
        textAlign: "center",
    },
}));

// Estilos para los íconos en el footer
export const IconBox = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: "1rem",
    [theme.breakpoints.down("sm")]: {
        justifyContent: "center",
    },
}));

// Estilos para los enlaces en el footer
export const FooterLink = styled(ScrollLink)({
    fontSize: "16px",
    color: "#7A7A7E",
    fontWeight: "300",
    cursor: "pointer",
    "&:hover": {
        color: "#000",
    },
});

// Estilos para la sección FAQ
export const FAQBox = styled(Container)(({ theme }) => ({
    marginBottom: 2,
    backgroundColor: "#E6F0FF",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    "& a": {
        display: "inline-block",
        marginTop: "2rem",
    },
    [theme.breakpoints.down("md")]: {
        padding: 0,
        width: "100%",
    },
}));

// Estilos para el título en la sección FAQ
export const FAQTitle = styled(Typography)(({ theme }) => ({
    fontFamily: "'Hanken Grotesk', sans-serif",
    fontSize: "35px",
    color: "#000339",
    fontWeight: "700",
    textAlign: "center",
}));

// Estilos para el texto en la sección FAQ
export const FAQText = styled(Typography)(({ theme }) => ({
    fontFamily: "Roboto, Helvetica, Arial, sans-serif",
    fontWeight: "400",
    fontSize: "1rem",
    textAlign: "center",
    lineHeight: 1.5,
    letterSpacing: "0.00938em",
    display: "block",
}));

// Estilos para la sección Esquema
export const EsquemaTitle = styled(Typography)(({ theme }) => ({
    fontFamily: "'Hanken Grotesk', sans-serif",
    fontSize: "1.8rem",
    textAlign: "center",
}));

// Estilos para el texto en la sección Esquema
export const EsquemaText = styled(Typography)(({ theme }) => ({
    fontFamily: "'Hanken Grotesk', sans-serif",
    fontWeight: "200",
    fontSize: "1.4rem",
    textAlign: "center",
    lineHeight: 1.3,
    color: "hsl(0,0%,10%)",
}));

// Estilos para el menú en la sección Esquema
export const Menu = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "1.5rem",
    "& p": {
        fontFamily: "'Hanken Grotesk', sans-serif",
        padding: "0.5rem 1em",
        margin: "0.5em 1rem",
        borderBottom: "1px solid hsl(229, 8%, 60%)",
        position: "relative",
        cursor: "pointer",
        color: "#eef7fd",
        transition: "0.5s",
        backgroundColor: "hsl(229, 31%, 21%)",
        borderRadius: "5px",
        "&:hover": {
            color: "hsl(180,99%,32%)",
        },
    },
    [theme.breakpoints.down("md")]: {
        flexDirection: "column",
        mt: 1,
    },
}));

// Estilos para las cartas en la sección Esquema
export const Carta = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: theme.spacing(4, 4, 0, 4),
    "& p": {
        fontFamily: "'Hanken Grotesk', sans-serif",
        margin: theme.spacing(2, 2),
    },
    [theme.breakpoints.down("md")]: {
        padding: theme.spacing(4),
        justifyContent: "center",
        flexDirection: "column",
    },
    [theme.breakpoints.down("md")]: {
        padding: 0,
        justifyContent: "center",
        flexDirection: "column",
    },
}));

// Estilos para las imágenes en la sección Esquema
export const Imagen = styled(Box)(({ theme }) => ({
    position: "relative",
    "& img": {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        maxWidth: "25rem",
        [theme.breakpoints.down("md")]: {
            width: "20rem",
        },
        [theme.breakpoints.down("sm")]: {
            width: "15rem",
        },
    },
}));

// Estilos para los contenedores secundarios en la sección Esquema
export const ContenedorSecundario = styled(Box)({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
});

// Estilos para el título secundario en la sección Esquema
export const TituloSecundario = styled(Typography)(({ theme }) => ({
    textWeight: "400",
    textAlign: "left",
    fontSize: "1.8rem",
    margin: "auto",
    color: "hsl(229, 31%, 21%)",
    [theme.breakpoints.down("md")]: {
        mt: 2,
        textAlign: "center",
        width: "20rem",
    },
    [theme.breakpoints.down("sm")]: {
        width: "15rem",
    },
}));

// Estilos para el texto secundario en la sección Esquema
export const TextoSecundario = styled(Typography)(({ theme }) => ({
    fontFamily: "'Hanken Grotesk', sans-serif",
    textAlign: "left",
    fontSize: "1.4rem",
    lineHeight: 1.3,
    color: "hsl(0,0%,10%)",
}));

// Estilos para la información en la sección Esquema
export const Informacion = styled(Typography)(({ theme }) => ({
    color: "#eef7fd",
    background: "hsl(229, 31%, 21%)",
    border: "2px solid hsl(231, 69%, 60%)",
    borderRadius: "5px",
    fontFamily: "'Hanken Grotesk', sans-serif",
    fontSize: "1rem",
    padding: theme.spacing(0.7),
    "&:hover": {
        color: "hsl(180,99%,32%)",
    },
}));
