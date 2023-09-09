

import { Button, Flex } from '@chakra-ui/react';

import React from 'react';


import Icons from './Icons';


type RightContentProps = {
   
};

const RightContent:React.FC<RightContentProps> = () => {
    
    return (
        <>
            {/*<AuthModal/>*/}
            <Flex justify="center" align="center">
                
                    <Icons/> 
                    
                    
                
            </Flex>
        </>
    )
}
export default RightContent;