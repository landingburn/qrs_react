/*import { checkboxAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers, defineStyle } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(checkboxAnatomy.keys)

const circular = definePartsStyle({
  control: defineStyle({
    rounded: "full"
  })
})

/*const square = definePartsStyle({
  control: defineStyle({
    borderRadius: 0,
    borderWidth: "2px",
    borderColor: "white",
  }),
  icon: defineStyle({
    color: "white",
    boxSize: "100%",
    marginLeft: "-2px",
  })
})
const square = definePartsStyle({
  control: {
    borderRadius: 0,
    backgroundColor: "transparent",
    borderWidth: "2px",
    borderColor: "white",
    color: "white",
    _hover: {
      backgroundColor: "whiteAlpha.200",
    },
    _checked: {
      backgroundColor: "transparent",
      borderColor: "white",
    },
  },
  icon: {
    color: "white",
  },
});
const square = definePartsStyle({
  control: defineStyle({
    borderRadius: 0,
    borderWidth: "2px",
    borderColor: "white",
    backgroundColor: "transparent",
  }),
  icon: defineStyle({
    color: "white",
    boxSize: "100%",
    marginLeft: "-2px",
    border: "2px solid white",
    borderRadius: 0,
  })
})

const sizes = {
  xs: definePartsStyle({
    control: defineStyle({
      boxSize: 3
    }),
    label: defineStyle({
      fontSize: "sm",
    })
  }),
}

const baseStyle = definePartsStyle({
  sizes,
  label: {
    fontFamily: "Open Sans, sans serif",
    color: "black",
  },
  control: {
    size: "sm",
    padding: 2,
    borderColor: "brand.100",
    color: "brand.100",
    colorScheme: "white",
    borderRadius: 20,
  },
  variants: {
    circular,
    square,
  },
})
export const Checkbox = defineMultiStyleConfig({ baseStyle })*/
import { checkboxAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers, defineStyle } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(checkboxAnatomy.keys)
  const circular = definePartsStyle({
    control: defineStyle({
      rounded: "full"
    })
  })
  const sizes = {
    xs: definePartsStyle({
      control: defineStyle({
        boxSize: 3
      }),
      label: defineStyle({
        fontSize: "sm",
      })
    }),
  }
  const icon = definePartsStyle({
       
        
  })
const baseStyle = definePartsStyle({
  // define the part you're going to style
    
    sizes,
    icon:{
        colorScheme: "white",
        IconColor: "brand.100",
        color: "brand.100",
        variant: 'circular',
    },    
    
    label: {
        fontFamily: "Cantata-one, serif",//'CMU Serif', // change the font family of the label
        color:"black",
        
    },
    control: {
        size: 'sm',
        colorScheme: "white",
        padding:2,
        borderRadius:20,
        color:"brand.100",
        borderColor:"brand.100"
        },
    variants: {circular,
        rounded: {
            control: {
                padding: 2, // change the padding of the control
                borderColor:"brand.100",
                colorScheme: "white",
                color:"brand.100",
                borderRadius: 5, // change the border radius of the control
            
            },

        },
        square: {
            control: {
                padding: 2, // change the padding of the control
                borderColor:"brand.100",
                colorScheme: "white",
                color:"brand.100",
                borderRadius: 0, // change the border radius of the control
            
            },
        },
    },
})


export const Checkbox = defineMultiStyleConfig({ baseStyle })