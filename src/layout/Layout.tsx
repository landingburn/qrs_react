import ScrollContext from '@/components/scrollContext';
import Navbar from '@/navbar/navbar';
import { Divider, Flex, Stack, Text } from '@chakra-ui/react';
import React, { useRef } from 'react';


type layoutProps = {
    children?: React.ReactNode;
    
};
const layout:React.FC<layoutProps> = ( {children} ) => {
    const handleScroll = () => {
        // Scroll to a specific vertical position, e.g., 200px
        window.scrollTo({
          top: 0, 
          behavior: 'smooth'  // Smooth scroll
        });
      };
    return (
        <>
            <Navbar/>
            <main>{children}</main>
            <Stack align="flex-end">
                <Divider/>
                <Flex align="center" justify="center" style={{
              background: "linear-gradient(to right, rgba(57,155,255,1), rgba(238,113,249,1))",
              WebkitBackgroundClip: "text",
              color: "transparent"
            }}>
                <Text  p="3" _hover={{ textDecoration: "underline" }}>qrs2024@gmail.com</Text>
                <Text p="3">|</Text>
                <Text p="3" onClick={handleScroll} cursor="pointer">Back To Top</Text></Flex>
            </Stack>
        </>
    )
}
export default layout;