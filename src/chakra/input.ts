import { inputAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(inputAnatomy.keys)

const baseStyle = definePartsStyle({
  // define the part you're going to style
  addon: {
    border: '1px solid',
    borderColor: 'gray.200',
    background: 'gray.200',
    borderRadius: 'full',
    color: 'gray.500',
  },
  field: {
    border:"1px solid",
    borderColor:"gray.500",
    borderRadius: "20px",
    backgroundColor:"gray.700",
    fontSize : "8pt" ,
    
    _placeholder: {color: "gray.300"},
    _hover: {
        bg: "gray.900",
        border: "2px solid",
        borderColor:"gray.500",
        borderRadius: "20px"
    },
    _focus:{
        border: "2px solid",
        borderColor:"gray.500",
        
    },
    _focusVisible:{
        border: "2px solid", 
        borderColor:"gray.500",
        
    }
  },
})

export const Input = defineMultiStyleConfig({ baseStyle })