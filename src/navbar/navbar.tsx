import { Flex,Text, Image } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React from 'react';
import RightContent from './RightContent/RightContent';


type navbarProps = {
    
};

const navbar:React.FC<navbarProps> = () => {
    const router = useRouter()
    
    return (
        <Flex position="fixed"
        top="0"
        left="0"
        right="0"
        zIndex="1000"
        //bg={`rgba(100, 100, 100, 0.5)`} // Change the opacity as needed
        backdropFilter="blur(10px)" // Add the backdrop blur effect
        color="white" align="center" justify="space-between" height = "45px" padding = "6px 12px">
            <Flex ml="3" align="center" justify="center" cursor="pointer" onClick={()=>router.push("/")}> 
                
                <Text paddingLeft="5px" fontSize="18pt" fontWeight="1000"   color = "white" >
                    QRS 2024
                </Text>
                
            </Flex>
            
            <RightContent />
        </Flex>
    )
}
export default navbar;