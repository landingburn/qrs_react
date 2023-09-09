import { Flex } from '@chakra-ui/react';
import React from 'react';

type pageContentProps = {
    children?: React.ReactNode;
    
};

const PageContent:React.FC<pageContentProps> = ({ children }) => {
    
    return (
        <Flex p="16px 0px" justify="center">
            <Flex justify="center" width="95%" maxWidth="1024px">
                <Flex mr={{base:0, md:6}} direction="column" width={{base: "100%", md: "70%"}}>
                    {children && children[0 as keyof typeof children]}
                </Flex>
                <Flex direction="column" display={{base: "none",md: "flex" }} flexGrow={1}>
                    {children && children[1 as keyof typeof children]}
                </Flex>
            </Flex>
        </Flex>
    )
}
export default PageContent;