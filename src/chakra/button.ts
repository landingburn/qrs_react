import { ComponentStyleConfig } from "@chakra-ui/theme";

export const Button: ComponentStyleConfig = {
    baseStyle: {
        borderRadius: "5px",
        color: "white",
        bg: "white",
        
        fontSize: "10pt",
        fontWeight: 700,
        letterSpacing: "1px", //"Open Sans, sans serif",
        _focus: {
          boxShadow: "none",
        },
  },
  sizes: {
    sm: {
      fontSize: "8pt",
    },
    md: {
      fontSize: "10pt",
      // height: "28px",
    },
  },
  variants: {
    solid: {
      color: "white",
      bgGradient: "linear-gradient(to right, rgba(57,155,255,1), rgba(238,113,249,1))",
      _hover: {
        bgGradient: "linear-gradient(to right, rgba(238,113,249,1), rgba(57,155,255,1))",
        color: "white",
        
        transition: "all 1s" 
      },
    },
    outline: {
      color: "white",
      border: "1px solid",
      borderColor: "white",
      bg:"transparent",
      _hover: {
        bgGradient: "linear-gradient(to right, rgba(57,155,255,1), rgba(238,113,249,1))",
        border:"0px",
        transition: "all 1s" 
      },

    },
    oauth: {
      height: "34px",
      border: "1px solid",
      borderColor: "brand.100",
      _hover: {
        bg: "gray.400",
        border:"0px",
      },
    },
  },
};