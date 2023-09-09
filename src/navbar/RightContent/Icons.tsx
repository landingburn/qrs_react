



import React, { useContext, useRef } from 'react';
import {
  Flex,
  Text,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  Button,
  useBreakpointValue,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import ScrollContext from '@/components/scrollContext';
import { useRecoilValue } from 'recoil';
import { refAccommodationState, refHomeState, refOrganizerState, refPreviousState, refProgramState, refRegistrationState, refSpeakerState, refSponsorState, refTopicState } from '@/atoms/refState';

const Icons = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef(null);
  const isLargeScreen = useBreakpointValue({ base: false, lg: true });
  
  const refHome = useRecoilValue(refHomeState);
  const refTopic = useRecoilValue(refTopicState);
  const refSpeaker = useRecoilValue(refSpeakerState);
  const refSponsor = useRecoilValue(refSponsorState)
  const refProgram = useRecoilValue(refProgramState)
  const refPrev = useRecoilValue(refPreviousState)
  const refReg = useRecoilValue(refRegistrationState)
  const refOrg = useRecoilValue(refOrganizerState)
  const refAcc = useRecoilValue(refAccommodationState)
  const scrollToRef = (ref: React.RefObject<HTMLDivElement>) => {
    ref?.current?.scrollIntoView({ behavior: 'smooth' });
  };
  
  const IconContent = () => (
    <>
      <Flex 
        mr={2.5}
        ml={2.5}
        padding={1}
        cursor="pointer"
        borderRadius="4"
        onClick={() => scrollToRef(refHome)}
        color="white"
        _hover={{ color: 'gray.400' }}
        fontSize="12pt"
      >
        <Text>Home</Text>
      </Flex>
      <Flex fontSize="12pt" mr={2.5} ml={2.5} padding={1} cursor="pointer" borderRadius="4" onClick={() => scrollToRef(refSpeaker)} color="white" _hover={{  color:"gray.400"}} >
                    <Text>Speakers</Text>

                </Flex>
                <Flex fontSize="12pt" mr={2.5} ml={2.5} padding={1} cursor="pointer" borderRadius="4" onClick={() => scrollToRef(refOrg)} color="white" _hover={{  color:"gray.400"}} >
                    <Text>Organizers</Text>

                </Flex>
                <Flex fontSize="12pt" mr={2.5} ml={2.5} padding={1} cursor="pointer" borderRadius="4" onClick={() => scrollToRef(refPrev)} color="white" _hover={{  color:"gray.400"}} >
                    <Text>Previous QRSs</Text>

                </Flex>
                <Flex fontSize="12pt" mr={2.5} ml={2.5} padding={1} cursor="pointer" borderRadius="4" onClick={() => scrollToRef(refTopic)} color="white" _hover={{  color:"gray.400"}} >
                    <Text>Topics</Text>

                </Flex>
                <Flex fontSize="12pt" mr={2.5} ml={2.5} padding={1} cursor="pointer" borderRadius="4" onClick={() => scrollToRef(refProgram)} color="white" _hover={{  color:"gray.400"}} >
                    <Text>Program</Text>

                </Flex>
                <Flex fontSize="12pt" mr={2.5} ml={2.5} padding={1} cursor="pointer" borderRadius="4" onClick={() => scrollToRef(refSponsor)} color="white" _hover={{  color:"gray.400"}} >
                    <Text>Sponsors</Text>

                </Flex>
                <Flex fontSize="12pt" mr={2.5} ml={2.5} padding={1} cursor="pointer" borderRadius="4" onClick={() => scrollToRef(refAcc)} color="white" _hover={{  color:"gray.400"}} >
                    <Text>Accommodation</Text>

                </Flex>
                <Flex fontSize="12pt" mr={2.5} ml={2.5} padding={1} cursor="pointer" borderRadius="4" onClick={() => scrollToRef(refReg)} color="white" _hover={{  color:"gray.400"}} >
                    <Text>Registration</Text>

                </Flex>
      {/* ... */}
    </>
  );

  return (
    <Flex align="center" justify="center" mr="5">
      {isLargeScreen ? (
        <IconContent />
      ) : (
        <>
          <Button color="white" bg="transparent" borderRadius="0" border="0" _hover={{bg:"white", border:"0px", borderRadius:"4px", color:"black"}} ref={btnRef} onClick={onOpen}>
            <HamburgerIcon fontSize={"xl"}/>
          </Button>
          <Drawer
            
            isOpen={isOpen}
            placement="right"
            onClose={onClose}
            finalFocusRef={btnRef}
          >
            <DrawerOverlay >
              <DrawerContent bg="black" opacity="1">
                <DrawerHeader>Menu</DrawerHeader>
                <DrawerBody>
                  <IconContent />
                </DrawerBody>
              </DrawerContent>
            </DrawerOverlay>
          </Drawer>
        </>
      )}
    </Flex>
  );
};

export default Icons;

