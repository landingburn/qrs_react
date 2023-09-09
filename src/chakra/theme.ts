import { extendTheme, StyleFunctionProps } from "@chakra-ui/react"
import { Button } from "./button"
import '@fontsource/open-sans/300.css'
import '@fontsource/open-sans/400.css'
import '@fontsource/open-sans/700.css'
import { Checkbox } from "./checkbox"
import "@fontsource/baskervville"
import "@fontsource/antic-didone"
import "@fontsource/cantata-one"
import { Input } from "./input"
// Supports weights 100-900
import '@fontsource-variable/inter-tight';
import '@fontsource/roboto';

// 2. Call `extendTheme` and pass your custom values
export const theme = extendTheme({
  colors: {
    brand: {
      100: "#542CAE",
      200: "#d55845",
      300: "#FF2800", //"#AE2C45",
      400: "#2CAE95",
      500: "#AA95D6",
      600: "#AE2C45"
      
    },
  },
  fonts: {
    body:"'Inter Tight Variable', sans-serif", //"Cantata-one, serif",
    antic: "'Roboto', sans-serif",//"Antic Didone, serif",
    
  },
  styles: {
    global: () => ({
      html: {
        bg: "gray.800",
      },
      body: {
        bg: "gray.800",
        color: "white", // You may also want to set a default text color for better contrast
      },
    }),
  },
  components: {
    Button,
    Checkbox,
    Input,
  }
})
//abhaya, amethysta, amiri, antic didone, baskervville, benne, bodoni moda