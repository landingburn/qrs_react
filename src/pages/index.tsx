

import * as React from "react";
import { Box, Text, Center, Flex, Stack, Button, useBreakpointValue, Grid,Image, Divider, Icon } from "@chakra-ui/react";
import { ReactNode } from "react";
import CountdownTimer from "@/components/countdown";
import "lazysizes"

import { useSetRecoilState } from "recoil";
import {refAccommodationState, refHomeState, refOrganizerState, refPreviousState, refProgramState, refRegistrationState, refSpeakerState, refSponsorState, refTopicState } from "@/atoms/refState";
import {MdWavingHand} from "react-icons/md"
export default function Home() {
  const flexDirection = useBreakpointValue({ base: "column", lg: "row" });
  const numColumns = useBreakpointValue({ base: 4, md: 3, lg: 4 });
   
  const topics = [
    "Gas-phase elementary reactions", "Polyatomic reaction dynamics", "Theoretical reaction dynamics",
    "Theory of non-adiabatic processes", "Gas-surface reactions", "Electronic, vibrational and rotational spectroscopy",
    "Theoretical methods in astrochemistry", "Potential energy surfaces", "Quantum mechanical methods",
    "Reactions at low and ultra-low temperatures", "Semiclassical approaches", "Stereo-dynamics"
  ];
  const images = [
    "aquilanti", "babikov", "balucani", "banares", "bonnet", "bowman", "clary", "coletti", "cvitas", "czako", "gao", "garrido", "vela", "guillon", "guo", "hochlaf", "jambrina", "kanno", "kerkeni","klippenstein", "krylov", "lendvay", "lezana", "lique", "liu", "lombardi", "naduvalath", "ewing", "pelaez", "reija", "roncero", "saalfrank", "sanz", "schwartz", "skomorowski", "slavicek", "sokolovski", "stoecklin", "suits", "sun", "takayanagi", "toubin", "varandas", "vazquez", "yang", "zanchet", "zuchowski"
  ]
  const speakers = [
    "Vincenzo Aquilanti", "Dmitri Babikov","Nadia Balucani","Luis Bañares Morcillo", "Laurent Bonnet", "Joel Bowman", "David Clary", "Cecilia Coletti", "Marko Tomislav Cvitaš", "Gábor Czakó", "Hong Gao", " Manuel Lara Garrido", "Alberto Garcia-Vela",
    "Grégoire Guillo","Hua Guo", "Majdi Hochlaf", "Pablo Garcia Jambrina", "Manabu Kanno", "Boutheina Kerkeni", "Stephen J. Klippenstein", "Anna Krylov", "György Lendvay", "Tomás González Lezana", "François Lique", "Kopin Liu", "Andrea Lombardi","Balakrishnan Naduvalath", "Andrew Orr-Ewing", "Daniel Peláez", "Ignacio Sola Reija", "Octavio Roncero", "Peter Saalfrank", "Cristina Sanz Sanz", "Steven Schwartz", "Wojtek Skomorowski", "Petr Slaviček", "Dmitri Sokolovski", "Thierry Stoecklin", "Arthur G. Suits", "Zhigang Sun","Toshiyuki Takayanagi", "Céline Toubin", "António Varandas", "Jesús González Vázquez", "Tiangang Yang", "Alexandre Zanchet", "Piotr Żuchowski", 
  ]
  const institute = [
    "University of Perugia, ITALY","Marquette University, UNITED STATES", "Università di Perugia, ITALY", "Universidad Complutense de Madrid, SPAIN", "Bordeaux University, FRANCE", "Emory University, UNITED STATES", "University of Oxford, UNITED KINGDOM", "University of Chieti, ITALY", "University of Zagreb, HUNGARY", "University of Szeged, HUNGARY", "Chinese Academy of Sciences, CHINA", "TUAM Madrid, SPAIN", "CSIC Madrid, SPAIN", "University of Bourgogne, FRANCE","University of New Mexico, UNITED STATES", "ustave Eiffel University, FRANCE", "University of Salamanca, SPAIN", "Tohoku University, JAPAN", "Tunis El Manar University, TUNISIA", "Argonne National Laboratory, UNITED STATES", "University of Southern California, UNITED STATES", "Research Center for Natural Sciences, HUNGARY", "CSIC Madrid, SPAIN", "University of Rennes, FRANCE", "National Taiwan Universiry, TAIWAN", "University of Perugia, ITALY", "University of Nevada, UNITED STATES", "University of Bristol, UNITED KINGDOM", "Université Paris Saclay, FRANCE", "Complutense University of Madrid, SPAIN", "CSIC Madrid, SPAIN", "University of Potsdam, GERMANY", "Autonomous University of Madrid, SPAIN", "University of Arizona, UNITED STATES","University of Warsaw, POLAND", "University of Chemistry and Technology, CZECHIA", "UPV/EHU, SPAIN",  "University of Bordeaux, FRANCE", "University of Missouri, UNITED STATES", "Dalian Institute of Chemical Physics, CHINA", "Saitama University,  JAPAN", "Université de Lille, France", "University of Coimbra, PORTUGAL", "Autonomous University of Madrid, SPAIN", "SUSTech, CHINA", "SCSIC Madrid, SPAIN", "Nicolaus Copernicus University, POLAND", 
  ]
  const talks = [
    "TBA", "TBA", "TBA", "'Photoinduced Molecular Dynamics Mediated by Conical Intersections'", "TBA", "TBA", "'Max Born and the founders of quantum collision theory'", "TBA", "TBA", "TBA", "TBA", "TBA","'Quantum control of resonance lifetimes in molecular photodissociation using intense laser fields'",  "TBA", "TBA", "'Unimolecular chemical processes upon (multi)-photon ionization: theory and experiment'", "TBA", "TBA", "TBA", "TBA", "TBA", "TBA", "TBA", "TBA", "TBA", "TBA", "TBA", "TBA", "TBA", "TBA", "TBA", "TBA", "TBA", "TBA", "TBA", "TBA", "TBA", "TBA", "TBA", "TBA", "TBA", "TBA", "TBA","TBA","TBA", "TBA","TBA",  "TBA",
    ]
    const scrollToRef = (ref: React.RefObject<HTMLDivElement>) => {
      ref?.current?.scrollIntoView({ behavior: 'smooth' });
    };
  /*
  */
  // For example, if the target date is December 31, 2023
  const setRefHome = useSetRecoilState(refHomeState);
  const setRefTopic = useSetRecoilState(refTopicState);
  const setSponsorRef = useSetRecoilState(refSponsorState);
  const setOrganizationRef = useSetRecoilState(refOrganizerState);
  const setAccommodationRef = useSetRecoilState(refAccommodationState);
  const setPreviousRef = useSetRecoilState(refPreviousState);
  const setRegistrationRef = useSetRecoilState(refRegistrationState);
  const setProgramRef = useSetRecoilState(refProgramState);
  const setSpeakerRef = useSetRecoilState(refSpeakerState);
  const refHome = React.useRef<HTMLDivElement>(null);
  const refTopic = React.useRef<HTMLDivElement>(null);
  const refReg = React.useRef<HTMLDivElement>(null);
  const refOrg = React.useRef<HTMLDivElement>(null);
  const refPrev = React.useRef<HTMLDivElement>(null);
  const refSponsor = React.useRef<HTMLDivElement>(null);
  const refProgram = React.useRef<HTMLDivElement>(null);
  const refSpeaker = React.useRef<HTMLDivElement>(null);
  const refAcc = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    setRefHome(refHome);
    setRefTopic(refTopic);
    setSponsorRef(refSponsor)
    setOrganizationRef(refOrg)
    setAccommodationRef(refAcc)
    setPreviousRef(refPrev)
    setProgramRef(refProgram)
    setSpeakerRef(refSpeaker)
    setRegistrationRef(refReg)
  }, []);

const targetDate = new Date('June 24, 2024 00:00:00');

<CountdownTimer targetDate={targetDate} />

  return (
    <Box position="relative">
      <Box position="relative" height="100vh" ref={refHome}>
        {/* Video */}
        <Box position="absolute" top="0" left="0" width="100%" height="100%" zIndex="0" overflow="hidden">
          <video
            autoPlay
            loop
            muted
            style={{
              position: "absolute",
              width: "100%",
              left: "50%",
              top: "50%",
              height: "100%",
              objectFit: "cover",
              transform: "translate(-50%, -50%)",
              zIndex: "0",
              opacity: "0.5"
            }}
            
          >
            <source src="/static/images/istanbul.mp4" type="video/mp4"  />
          </video>
        </Box>
        {/* Text */}
        <Center flexDirection="column" position="absolute" top="-240" left="0" width="100%" height="100%" zIndex="1">
        <CountdownTimer targetDate={targetDate}/>
          
        
        <Text mt="10px" fontWeight="extrabold" fontSize={["4vw", "3vw", "3vw", "2vw"]} >24-28 June 2024 | ISTANBUL</Text>
      </Center>
      <Center flexDirection="column" position="absolute" top="-70" left="0" width="100%" height="100%" zIndex="1" p="10%">
        <Text
          fontWeight="bold"
          fontSize={["7vw", "7vw", "7vw", "6vw"]} 
          textAlign="center"
          
        >
          17th Quantum Reactive Scattering Workshop 
        </Text>
        
      </Center>
      <Center flexDirection="column" position="absolute" top="200" left="0" width="100%" height="100%" zIndex="1">
      <Grid templateColumns={{ base: "repeat(2, 1fr)", sm: "repeat(4, 1fr)" }}>
  <Stack align="center" mx="10">
    <Text fontSize={["7vw", "7vw", "7vw", "6vw"]} fontWeight="extrabold">
      51
    </Text>
    <Text fontSize="2xl">Speakers</Text>
  </Stack>
  <Stack align="center" mx="10">
    <Text fontSize={["7vw", "7vw", "7vw", "6vw"]} fontWeight="extrabold">
      14
    </Text>
    <Text fontSize="2xl">Countries</Text>
  </Stack>
  <Stack align="center" mx="10">
    <Text fontSize={["7vw", "7vw", "7vw", "6vw"]} fontWeight="extrabold">
      3
    </Text>
    <Text fontSize="2xl">Hotels</Text>
  </Stack>
  <Stack align="center" mx="10">
    <Text fontSize={["7vw", "7vw", "7vw", "6vw"]} fontWeight="extrabold">
      5
    </Text>
    <Text fontSize="2xl">Sponsors</Text>
  </Stack>
</Grid>
        <Flex my="5" direction={{base:"column", lg:"row"}}>
          <Button mx="5" width="200px" my="3" height="50px" fontSize="xxl" onClick={() => scrollToRef(refReg)}>Register Now</Button>
          <Button mx="5" my="3" variant="outline" width="200px" height="50px" fontSize="xxl" onClick={() => scrollToRef(refOrg)}>Organizers</Button>
        </Flex>
      </Center>
        {/* ... (your existing text code) */}
      </Box>

      {/* Image below the video */}
      <Box position="relative" height="100vh">
        {/* Low opacity background image */}
        <Divider />
        <Box
          position="absolute"
          width="100%"
          height="100%"
          
          backgroundImage='url("/static/images/qm2.jpeg")'
          backgroundSize='cover'
          backgroundPosition='center'
          style={{ filter: 'grayscale(100%)' }}
          opacity="0.4"
          zIndex="0"
        ></Box>

        {/* Content */}
        <Center flexDirection="column" position="relative" top="0" left="0" width="100%" height="100%" zIndex="1" p="10%">
          <Box
          mt="40px"
            fontWeight="medium"
            fontSize={["6vw", "6vw", "5vw", "4vw"]}
            textAlign="center"
            style={{
              background: "linear-gradient(to right, rgba(57,155,255,1), rgba(238,113,249,1))",
              WebkitBackgroundClip: "text",
              color: "transparent"
            }}
          >
            <Box as="span" fontWeight="extrabold"
            
            >QUANTUM CHEMISTRY<br/></Box> WITH ISTANBUL VIEWS
          </Box>
          <Text fontSize={["3vw", "2vw", "1.5vw", "1vw"]}>
          Welcome to QRS 2024 - 17th Quantum Reactive Scattering Workshop, hosted in the enchanting city of Istanbul. On behalf of the Organizing Committee, we extend a heartfelt welcome to all participants. As we convene in this city renowned for its rich history and the captivating fusion of Asia and Europe, we invite you to embark on a journey that seamlessly blends academic excellence with cultural immersion.<br /><br />
After a thorough evaluation of Istanbul's myriad options, the QRS 2024 organizing committee identified the <Box as="span" fontWeight="extrabold">Yıldız Campus</Box> as an ideal location. Situated a mere 10-minute walk from various hotels, its historical charm and authentic atmosphere played a pivotal role in influencing this choice.<br /><br />
Our profound gratitude is extended to the Yıldız Technical University Rectorate for their cordial hospitality and exceptional stewardship in hosting QRS 2024.<br /><br />
The Yıldız Campus, our chosen venue, stands as an integral part of the illustrious <Box as="span" fontWeight="extrabold">Yıldız Palace</Box> , acknowledged as a UNESCO World Heritage site. With its origins dating back to 1880, the Yıldız Palace assumed a central role in Türkiye's history, particularly between 1876 and 1908, serving as a key administrative hub following the iconic <Box as="span" fontWeight="extrabold">Topkapı Palace </Box>and <Box as="span" fontWeight="extrabold">Dolmabahçe Palace</Box>.<br /><br />
We ardently anticipate your participation at QRS 2024 in the vibrant city of Istanbul. Join us for an unforgettable QRS experience, marked by pioneering scientific discussions, productive collaborations, and captivating social events.<br />
          </Text>
        </Center>
        
      </Box>
      <Box position="relative" height="100vh" ref={refTopic}>
        {/* Low opacity background image */}
        <Divider />
        <Box
          position="absolute"
          width="100%"
          height="100%"
          backgroundImage='url("/static/images/banner/istanbul4.jpeg")'
          backgroundSize='cover'
          backgroundPosition='center'
          opacity="0.5"
          zIndex="0"
        ></Box>

        {/* Content */}
        <Center flexDirection="column" position="relative" top="5" left="0" width="100%" height="100%" zIndex="1" p="10%">
          <Box 
            fontWeight="medium"
            fontSize={["5vw", "4vw", "4vw", "3vw"]}
            textAlign="center"
            style={{
              /*background: "linear-gradient(to right, rgba(57,155,255,1), rgba(238,113,249,1))",
              WebkitBackgroundClip: "text",
              color: "transparent"*/
            }}
          >
            <Box as="span" fontWeight="extrabold" >THIS YEAR,</Box> THE TOPICS ARE
          </Box>
          <Grid
            templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
            gap={3} // set gap between grid items
            mt="3"
          >
            {topics.map((topic, index) => (
              /*
              <GradientBorderBox key={index}>{topic}</GradientBorderBox>*/
              <Box sx={{
                //background: 'linear-gradient(to right, rgba(57,155,255,1), rgba(238,113,249,1))',
                
                opacity:"1",
                borderRadius: 'inherit',
                zIndex: '-1',
                margin: '-2px', // Adjust as needed
              }}>
                <Text p="3" opacity="1" fontSize={["3.5vw", "3vw", "2.5vw", "2vw"]} textShadow="2px 2px 3px rgba(0, 0, 0, 1)"
> {index+1}. {topic}</Text>
              </Box>
            ))}
          </Grid>
          
        </Center>
        
      </Box>
      <Box position="relative"  //height="100vh"
      >
        <Divider />
        {/* Low opacity background image */}
        <Box
          position="absolute"
          width="100%"
          //height="100%"
          /*backgroundImage='url("/images/banner/istanbul2.jpg")'
          backgroundSize='cover'
          backgroundPosition='center'
          opacity="0.7"*/
          zIndex="0"
        ></Box>

        {/* Content */}
        <Center flexDirection="column" position="relative" top="0" left="0" width="100%" //height="100%" 
        zIndex="1" p="10%">
          <Text
            mt="40px"
            fontWeight="medium"
            fontSize={["5vw", "4vw", "4vw", "3vw"]}
            textAlign="center"
            style={{
              background: "linear-gradient(to right, rgba(57,155,255,1), rgba(238,113,249,1))",
              WebkitBackgroundClip: "text",
              color: "transparent"
            }}
          >
            <Box as="span" fontWeight="extrabold" >INCLUDED</Box> EXPERIENCES
          </Text>
          <Grid
            templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
            gap={5} // set gap between grid items
            mt="3"
          >
            <Stack  align="center">
              <Text fontWeight="extrabold" fontSize="13pt"  style={{
              background: "linear-gradient(to right, rgba(57,155,255,1), rgba(238,113,249,1))",
              WebkitBackgroundClip: "text",
              color: "transparent"
            }}> 🍸 WELCOME RECEPTION</Text>
              <Text>All participants gather for a delightful start at the enchanting welcome reception</Text>
            </Stack>
            <Stack align="center" backgroundImage='url("/static/images/banner/reception.jpeg")'
          backgroundSize='cover' borderRadius="10" border="4px"
          backgroundPosition='center' height={["130px","140px", "150px", "160px"]}  >
              
              
            </Stack>
            <Stack  align="center">
              <Text fontWeight="extrabold" fontSize="13pt"  style={{
              background: "linear-gradient(to right, rgba(57,155,255,1), rgba(238,113,249,1))",
              WebkitBackgroundClip: "text",
              color: "transparent"
            }}> 🍽️ GALA DINNER</Text>
              <Text>A memorable gala dinner with delicious food in a delightful atmosphere, overlooking the magnificent Istanbul Bosphorus</Text>
            </Stack>
            <Stack align="center" backgroundImage='url("/static/images/banner/gala1.jpeg")'
          backgroundSize='cover'  borderRadius="10" border="4px"
          backgroundPosition='center' height={["130px","140px", "150px", "160px"]}  >
              
              
            </Stack>
            <Stack  align="center">
              <Text fontWeight="extrabold" fontSize="13pt"  style={{
              background: "linear-gradient(to right, rgba(57,155,255,1), rgba(238,113,249,1))",
              WebkitBackgroundClip: "text",
              color: "transparent"
            }}>🍹 COCKTAIL DURING POSTER PRESENTATION</Text>
              <Text>A memorable gala dinner with delicious food in a delightful atmosphere, overlooking the magnificent Istanbul Bosphorus</Text>
            </Stack>
            <Stack align="center" backgroundImage='url("/static/images/banner/cocktail.jpeg")'
          backgroundSize='cover'  borderRadius="10" border="4px"
          backgroundPosition='center' height={["130px","140px", "150px", "160px"]}  >
              
              
            </Stack>
            <Stack  align="center">
              <Text fontWeight="extrabold" fontSize="13pt"  style={{
              background: "linear-gradient(to right, rgba(57,155,255,1), rgba(238,113,249,1))",
              WebkitBackgroundClip: "text",
              color: "transparent"
            }}>⛵ 🍹 🐟 Cocktail on a Boat: Bosphorus Tour</Text>
              <Text>Scenic views await: Hagia Sophia, Maiden Tower, Topkapı Palace, Galata Tower, Dolmabahçe Palace, Çırağan, Ortaköy Mosque, Bosphorus Bridge, Beylerbeyi Palace, and Üsküdar during the Bosphorus tour.</Text>
            </Stack>
            <Stack align="center" backgroundImage='url("/static/images/banner/istanbul3.jpeg")'
          backgroundSize='cover'  borderRadius="10" border="4px"
          backgroundPosition='center' height={["130px","140px", "150px", "160px"]}  >
              
              
            </Stack>
            <Stack  align="center">
              <Text fontWeight="extrabold" fontSize="13pt"  style={{
              background: "linear-gradient(to right, rgba(57,155,255,1), rgba(238,113,249,1))",
              WebkitBackgroundClip: "text",
              color: "transparent"
            }}>🍴 Lunch & Dinner</Text>
              <Text>Enjoy delicious lunch and dinner options every day of QRS 2024</Text>
            </Stack>
            <Stack align="center" backgroundImage='url("/static/images/banner/food.jpeg")'
          backgroundSize='cover'  borderRadius="10" border="4px"
          backgroundPosition='center' height={["130px","140px", "150px", "160px"]}  >
              
              
            </Stack>
            <Stack  align="center">
              <Text fontWeight="extrabold" fontSize="13pt"  style={{
              background: "linear-gradient(to right, rgba(57,155,255,1), rgba(238,113,249,1))",
              WebkitBackgroundClip: "text",
              color: "transparent"
            }}>☕ Coffee Break</Text>
              <Text>Refreshing coffee breaks with various Turkish pastries throughout the event.</Text>
            </Stack>
            <Stack align="center" backgroundImage='url("/static/images/banner/coffee.jpeg")'
          backgroundSize='cover'  borderRadius="10" border="4px"
          backgroundPosition='center' height={["130px","140px", "150px", "160px"]}  >
              
              
            </Stack>
            <Stack  align="center">
              <Text fontWeight="extrabold" fontSize="13pt"  style={{
              background: "linear-gradient(to right, rgba(57,155,255,1), rgba(238,113,249,1))",
              WebkitBackgroundClip: "text",
              color: "transparent"
            }}>🚶‍♂️🚶‍♀️ Excursion(s)</Text>
              <Text>Discover the most iconic spots of Istanbul. Stay tuned for further updates and details!</Text>
            </Stack>
            <Stack align="center" backgroundImage='url("/static/images/banner/dolmabahce.jpeg")'
          backgroundSize='cover'  borderRadius="10" border="4px"
          backgroundPosition='center' height={["130px","140px", "150px", "160px"]}  >
              
              
            </Stack>
            <Stack  align="center">

              <Text fontWeight="extrabold" fontSize="13pt"  style={{
              background: "linear-gradient(to right, rgba(57,155,255,1), rgba(238,113,249,1))",
              WebkitBackgroundClip: "text",
              color: "transparent"
            }}>🧳 Workshop materials</Text>
              <Text>Book of Abstracts (astonishingly, in its tangible form!), certificate of participation, QRS 2024 bag, coffee mug</Text>
            </Stack>
            <Grid templateColumns="repeat(2, 1fr)"
            gap={5} >
            <Stack align="center" backgroundImage='url("/static/images/banner/mug.jpeg")'
          backgroundSize='cover'  borderRadius="10" border="4px"
          backgroundPosition='center' height={["130px","140px", "150px", "160px"]}  >
              
              
            </Stack>
            <Stack align="center" backgroundImage='url("/static/images/banner/bag.jpeg")'
          backgroundSize='cover'  borderRadius="10" border="4px"
          backgroundPosition='center' height={["130px","140px", "150px", "160px"]}  >
              
              
            </Stack>
            <Stack align="center" backgroundImage='url("/static/images/banner/book.jpeg")'
          backgroundSize='cover'  borderRadius="10" border="4px"
          backgroundPosition='center' height={["130px","140px", "150px", "160px"]}  >
              
              
            </Stack>
            <Stack align="center" backgroundImage='url("/static/images/banner/certif.jpeg")'
          backgroundSize='cover'  borderRadius="10" border="4px"
          backgroundPosition='center' height={["130px","140px", "150px", "160px"]}  >
              
              
            </Stack>
            </Grid>
            
          </Grid>
          
        </Center>
        
      </Box>
      <Box position="relative"  height="100vh" ref={refOrg}>
        {/* Low opacity background image */}
        <Divider />
        <Box
          position="absolute"
          width="100%"
          height="100%"
          backgroundImage='url("/static/images/banner/Gradient.PNG")'
          backgroundSize='cover'
          backgroundPosition='center'
          style={{ filter: 'grayscale(40%)' }}
          opacity="0.3"
          zIndex="0"
        ></Box>

        {/* Content */}
        <Center flexDirection="column" position="relative" top="0" left="0" width="100%" height="100%" zIndex="1" p="10%">
        <Box
      mb={4}
      
      textAlign="center"
      
    >
      <Box style={{
        background: "linear-gradient(to right, rgba(57,155,255,1), rgba(238,113,249,1))",
        WebkitBackgroundClip: "text",
        color: "transparent"
      }} fontSize={["6vw", "6vw", "5vw", "4vw"]} as="span" fontWeight="extrabold">
        ORGANIZERS
      </Box><br/>
      QRS 2024 is organized by Murat Kılıç & Niyazi Bulut
    </Box>

    {/* Organizer Image and Text */}
    
      <Box
        height={["250px", "350px", "600px", "700px"]}
        width={["300px", "500px", "700px", "900px"]}
      rounded="xl"
        backgroundImage='url("/static/images/speakers/muratniyazi.PNG")'
        backgroundSize='cover'
        
        backgroundPosition='center'
        
      />
        
      
    
        </Center>
        
      </Box>
      <Box  position="relative" ref={refAcc} >
        {/* Low opacity background image */}
        <Divider />
        <Box
          position="absolute"
          width="100%"
          
          /*backgroundImage='url("/images/banner/istanbul2.jpg")'
          backgroundSize='cover'
          backgroundPosition='center'*/
          //opacity="0.7"
          zIndex="0"
        ></Box>

        {/* Content */}
        <Center flexDirection="column" position="relative" top="0" left="0" width="100%"  zIndex="1" p="10%">
          <Box
            
            fontWeight="medium"
            fontSize={["5vw", "4vw", "4vw", "3vw"]}
            textAlign="center"
            style={{
              background: "linear-gradient(to right, rgba(57,155,255,1), rgba(238,113,249,1))",
              WebkitBackgroundClip: "text",
              color: "transparent"
            }}
          >
            <Box as="span" fontWeight="extrabold" >TRAVEL & ACCOMMODATION</Box> 
          </Box>
          <Grid
            templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(1, 1fr)" }}
            gap={10} // set gap between grid items
            mt="3"
          >
            <Stack 
  align="center" 
  position="relative"
  backgroundImage='url("/static/images/banner/airlines2.jpeg")' 
  cursor="pointer" 
  backgroundSize='cover'  
  borderRadius="10" 
  border="4px"
  backgroundPosition='center' 
  height={["520px", "480px", "420px", "300px"]}  
  width={["300px", "380px", "560px", "700px", "900px"]}
  _hover={{ "& > .hoverText": { opacity: 0, transform: 'translate(-50%, -60%)' }, "& > .detailsText": { opacity: 1 }, transition: "4s" }}
>

  {/* Darken overlay for better text readability */}
  <Box 
    position="absolute" 
    top="0" 
    bottom="0" 
    right="0" 
    left="0" 
    bg="rgba(0, 0, 0, 0.4)"
  />

  {/* "Hover to reveal" text */}
  <Box 
    position="absolute"
    top="40%" 
    left="50%" 
    className="hoverText"
    fontSize="xl"
    bgGradient="linear-gradient(to right, rgba(57,155,255,0.7), rgba(238,113,249,0.7))"
    boxShadow="dark-lg" 
    px="6"
    py="2"
    rounded="full"
    transform="translate(-50%, -50%)" 
    zIndex="2" 
    color="black"
  >
    <Icon as={MdWavingHand} size="15"/>
  </Box>

  {/* The details text */}
  <VStack 
    className="detailsText"
    position="absolute" 
    top="50%" 
    left="50%" 
    transform="translate(-50%, -50%)" 
    spacing={4}
    opacity="0"
    zIndex="2"
    textAlign="center"
  >
    <Text fontWeight="bold" fontSize="lg" color="white">
      Turkish Airlines - QRS 2024 Official Airline
    </Text>
    <Text color="white">
      A Star Alliance member offering special discounts for attendees. Use event code <Box as="span" fontWeight="bold">007TKM24</Box> on their website for bookings.
    </Text>
    <Text color="white">
      Istanbul features two airports: Istanbul Airport (near the venue) and Sabiha Gokcen Airport. We recommend Istanbul Airport for your travels.
    </Text>
  </VStack>
</Stack>


<Stack 
  align="center" 
  position="relative"
  bgImage='url("/static/images/banner/hotel.jpg")' 
  cursor="pointer" 
  backgroundSize='cover'  
  borderRadius="10" 
  border="4px"
  backgroundPosition='center' 
  height={["410px","360px", "310px", "300px"]}   
  width={["300px","380px", "560px", "700px", "900px"]}
  _hover={{ "& > .hoverText": { opacity: 0, transform: 'translate(-50%, -60%)' }, "& > .detailsText": { opacity: 1 }, transition: "4s" }}
>

  {/* Darken overlay for better text readability */}
  <Box 
    position="absolute" 
    top="0" 
    bottom="0" 
    right="0" 
    left="0" 
    bg="rgba(0, 0, 0, 0.5)"
  />

  {/* "Hover to reveal" text */}
  <Box 
    position="absolute"
    top="40%" 
    left="50%" 
    className="hoverText"
    fontSize="xl"
    bgGradient="linear-gradient(to right, rgba(57,155,255,0.7), rgba(238,113,249,0.7))"
    boxShadow="dark-lg" 
    px="6"
    py="2"
    rounded="full"
    transform="translate(-50%, -50%)" 
    zIndex="2" 
    color="black"
  >
    <Icon as={MdWavingHand} size="15"/>
  </Box>

  {/* The details text */}
  <VStack 
    className="detailsText"
    position="absolute" 
    top="50%" 
    left="50%" 
    transform="translate(-50%, -50%)" 
    spacing={4}
    opacity="0"
    zIndex="2"
    textAlign="center"
  >
    <Text fontWeight="bold" fontSize="lg" color="white">
      Upcoming Hotel Options for Attendees
    </Text>
    <Text color="white">
      We're finalizing 3 distinct hotel options (5, 3, and 2 stars) to suit different budgets. All are located near the workshop for attendees' convenience. Details will be provided soon.
    </Text>
  </VStack>
  
</Stack>



            
            
            
          </Grid>
          
        </Center>
        
      </Box>
      <Box position="relative"  ref={refSpeaker} >
      
        {/* Low opacity background image */}
        <Divider />
        <Box
          position="absolute"
          width="100%"
          
          /*backgroundImage='url("/images/banner/istanbul4.jpeg")'
          backgroundSize='cover'
          backgroundPosition='center'
          opacity="0.7"*/
          zIndex="0"
        ></Box>

        {/* Content */}
        <Center flexDirection="column" position="relative" top="0" left="0" width="100%" zIndex="1" >
          <Box
          mt="70px"
            fontWeight="medium"
            
            textAlign="center"
            style={{
              background: "linear-gradient(to right, rgba(57,155,255,1), rgba(238,113,249,1))",
              WebkitBackgroundClip: "text",
              color: "transparent"
            }}
          >
            <Box  as="span"  fontWeight="extrabold" fontSize={["5vw", "4vw", "4vw", "3vw"]}>SPEAKERS</Box> <br/>(Confirmed)<br/>
            <Grid  alignItems="center" justifyContent="center" templateColumns={{ base: "repeat(2, 1fr)", sm: "repeat(7, 1fr)" }}
            gap={1}  // set gap between grid items
            >
            <Flex align="center" justify="center"><Image loading="lazy" src="https://twemoji.maxcdn.com/2/svg/1f1e8-1f1f3.svg" alt="CN" height="20px" width="20px" mr="3"/> China:3 </Flex>  
            <Flex align="center" justify="center"><Image loading="lazy" src="https://twemoji.maxcdn.com/2/svg/1f1e8-1f1ff.svg" alt="CZ" height="20px" width="20px" mr="3"/>  Czechia:1   </Flex>
            <Flex align="center" justify="center"><Image loading="lazy" src="https://twemoji.maxcdn.com/2/svg/1f1eb-1f1f7.svg" alt="CZ" height="20px" width="20px" mr="3"/>  France:8   </Flex>
            <Flex align="center" justify="center"><Image loading="lazy" src="https://twemoji.maxcdn.com/2/svg/1f1e9-1f1ea.svg" alt="CZ" height="20px" width="20px" mr="3"/>  Germany:1  </Flex> 
            <Flex align="center" justify="center"><Image loading="lazy" src="https://twemoji.maxcdn.com/2/svg/1f1ed-1f1f0.svg" alt="CZ" height="20px" width="20px" mr="3"/>  Hungary:3   </Flex>
            <Flex align="center" justify="center"><Image loading="lazy" src="https://twemoji.maxcdn.com/2/svg/1f1ee-1f1f9.svg" alt="CZ" height="20px" width="20px" mr="3"/>  Italy:4   </Flex>
            <Flex align="center" justify="center"><Image loading="lazy" src="https://twemoji.maxcdn.com/2/svg/1f1ef-1f1f5.svg" alt="CZ" height="20px" width="20px" mr="3"/>  Japan:2   </Flex>
            <Flex align="center" justify="center"><Image loading="lazy" src="https://twemoji.maxcdn.com/2/svg/1f1f5-1f1f1.svg" alt="CZ" height="20px" width="20px" mr="3"/>  Poland:3  </Flex> 
            <Flex align="center" justify="center"><Image loading="lazy" src="https://twemoji.maxcdn.com/v/latest/svg/1f1f5-1f1f9.svg" alt="CZ" height="20px" width="20px" mr="3"/>  Portugal:1  </Flex> 
            <Flex align="center" justify="center"><Image loading="lazy" src="https://twemoji.maxcdn.com/2/svg/1f1ea-1f1f8.svg" alt="CZ" height="20px" width="20px" mr="3"/>  Spain:12   </Flex>
            <Flex align="center" justify="center"><Image loading="lazy" src="https://twemoji.maxcdn.com/2/svg/1f1f9-1f1fc.svg" alt="CZ" height="20px" width="20px" mr="3"/>  Taiwan:1  </Flex> 
            <Flex align="center" justify="center"><Image loading="lazy" src="https://twemoji.maxcdn.com/v/latest/svg/1f1f9-1f1f3.svg" alt="CZ" height="20px" width="20px" mr="3"/>  Tunisia:1  </Flex> 
            <Flex align="center" justify="center" ><Image loading="lazy" src="https://twemoji.maxcdn.com/2/svg/1f1ec-1f1e7.svg" alt="CZ" height="20px" width="20px" mr="3"/>  United Kingdom:2   </Flex>
            <Flex align="center" justify="center"><Image loading="lazy" src="https://twemoji.maxcdn.com/2/svg/1f1fa-1f1f8.svg" alt="CZ" height="20px" width="20px" mr="3"/>  United States:9</Flex>
            </Grid>
          </Box>
          
          <Grid
          p="5%"
            templateColumns={{ base: "repeat(1, 1fr)", sm: "repeat(4, 1fr)" }}
            gap={15} // set gap between grid items
            mt="3"
          >
            {speakers.map((speaker, index) => (
              <SpeakerBox key={index} name = {speaker} title = {talks[index]} institute={institute[index]} image = {`/static/images/speakers/${images[index]}.jpg`}></SpeakerBox>
            ))}
          </Grid>
          
        </Center>
        
      </Box>
      <Box position="relative"  ref={refPrev}>
        {/* Low opacity background image */}
        <Divider />
        <Box
          position="absolute"
          width="100%"
          height="100%"
          /*backgroundImage='url("/images/qm2.jpeg")'
          backgroundSize='cover'
          backgroundPosition='center'
          style={{ filter: 'grayscale(100%)' }}
          opacity="0.4"*/
          zIndex="0"
        ></Box>

        {/* Content */}
        <Center flexDirection="column" position="relative" top="0" left="0" width="100%" zIndex="1" >
          <Box p="10%" py="0"

            fontWeight="medium"
            mt="70px"
            textAlign="center"
            style={{
              background: "linear-gradient(to right, rgba(57,155,255,1), rgba(238,113,249,1))",
              WebkitBackgroundClip: "text",
              color: "transparent"
            }}
          >
            <Box as="span" fontWeight="extrabold" fontSize={["6vw", "6vw", "5vw", "4vw"]}
            
            >PREVIOUS QRSs<br/></Box> The Quantum Reactive Scattering Workshop is a prestigious series of workshops initiated by David Clary in 1990. Over the years, this workshop has brought together luminaries and experts in the field from around the globe to foster collaboration.
          </Box>
          <Stack mt="10" height="250px" fontWeight="700" width="100%" bgImage={`linear-gradient(to bottom left, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.6)), url(/static/images/places/cambridge.jpg)`}

        justify="end"
        //filter="grayscale(100%)"
        bgSize="cover"
        bgPosition="center">
          <Text textAlign="left" p="5" fontSize={["3.5vw", "3vw", "2.5vw", "2vw"]} >1. 1990 Cambridge, UK - David Clary</Text>
        </Stack>
        <Stack height="300px" fontWeight="700" width="100%" bgImage={`linear-gradient(to bottom left, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.6)), url(/static/images/places/massa.jpeg)`}
        justify="end"
        //filter="grayscale(100%)"
        bgSize="cover"
        bgPosition="center">
          <Text textAlign="left" p="5" fontSize={["3.5vw", "3vw", "2.5vw", "2vw"]} >2. 1994 Cambridge, Massachusetts, USA - Yan Sun and Michael Baer</Text>
        </Stack>
        <Stack  height="250px" fontWeight="700" width="100%" bgImage={`linear-gradient(to bottom left, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.6)), url(/static/images/places/nottingham.jpeg)`}

        justify="end"
        //filter="grayscale(100%)"
        bgSize="cover"
        bgPosition="center">
          <Text textAlign="left" p="5" fontSize={["3.5vw", "3vw", "2.5vw", "2vw"]} >3. 1995 Nottingham, UK - David Clary and David Manolopoulos</Text>
        </Stack>
        <Stack  height="250px" fontWeight="700" width="100%" bgImage={`linear-gradient(to bottom left, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.6)), url(/static/images/places/telluride.jpeg)`}

        justify="end"
        //filter="grayscale(100%)"
        bgSize="cover"
        bgPosition="center">
          <Text textAlign="left" p="5" fontSize={["3.5vw", "3vw", "2.5vw", "2vw"]} >4. 1997 Telluride, Colorado, USA - Joel Bowman</Text>
        </Stack>
        <Stack  height="250px" fontWeight="700" width="100%" bgImage={`linear-gradient(to bottom left, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.6)), url(/static/images/places/perugia.jpeg)`}

        justify="end"
        //filter="grayscale(100%)"
        bgSize="cover"
        bgPosition="center">
          <Text textAlign="left" p="5" fontSize={["3.5vw", "3vw", "2.5vw", "2vw"]} >5. 1999 Perugia, Italy - Vincenzo Aquilanti and Antonio Laganà</Text>
        </Stack>
        <Stack  height="250px" fontWeight="700" width="100%" bgImage={`linear-gradient(to bottom left, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.6)), url(/static/images/places/pasadena.jpeg)`}

        justify="end"
        //filter="grayscale(100%)"
        bgSize="cover"
        bgPosition="center">
          <Text textAlign="left" p="5" fontSize={["3.5vw", "3vw", "2.5vw", "2vw"]} >6. 2001 Pasadena, California, USA - Aron Kuppermann</Text>
        </Stack>
        <Stack  height="250px" fontWeight="700" width="100%" bgImage={`linear-gradient(to bottom left, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.6)), url(/static/images/places/lorenzo.jpeg)`}

        justify="end"
        //filter="grayscale(100%)"
        bgSize="cover"
        bgPosition="center">
          <Text textAlign="left" p="5" fontSize={["3.5vw", "3vw", "2.5vw", "2vw"]} >7. 2003 San Lorenzo de El Escorial, Spain - Javier Aoiz and Luis Bañares</Text>
        </Stack>
        <Stack  height="250px" fontWeight="700" width="100%" bgImage={`linear-gradient(to bottom left, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.6)), url(/static/images/places/santa.jpeg)`}

        justify="end"
        //filter="grayscale(100%)"
        bgSize="cover"
        bgPosition="center">
          <Text textAlign="left" p="5" fontSize={["3.5vw", "3vw", "2.5vw", "2vw"]} >8. 2005 Santa Cruz, California, USA - Millard Alexander and Anne McCoy</Text>
        </Stack>
        <Stack  height="250px" fontWeight="700" width="100%" bgImage={`linear-gradient(to bottom left, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.6)), url(/static/images/places/cambridge.jpg)`}

        justify="end"
        //filter="grayscale(100%)"
        bgSize="cover"
        bgPosition="center">
          <Text textAlign="left" p="5" fontSize={["3.5vw", "3vw", "2.5vw", "2vw"]} >9. 2007 Cambridge, UK - Stuart Althorpe</Text>
        </Stack>
        <Stack  height="250px" fontWeight="700" width="100%" bgImage={`linear-gradient(to bottom left, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.6)), url(/static/images/places/dalian.jpeg)`}

        justify="end"
        //filter="grayscale(100%)"
        bgSize="cover"
        bgPosition="center">
          <Text textAlign="left" p="5" fontSize={["3.5vw", "3vw", "2.5vw", "2vw"]} >10. 2009 Dalian, China - Dong-Hui Zhang and Ke-Li Han</Text>
        </Stack>
        <Stack  height="250px" fontWeight="700" width="100%" bgImage={`linear-gradient(to bottom left, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.6)), url(/static/images/places/santafe.jpeg)`}

        justify="end"
        //filter="grayscale(100%)"
        bgSize="cover"
        bgPosition="center">
          <Text textAlign="left" p="5" fontSize={["3.5vw", "3vw", "2.5vw", "2vw"]} >11. 2011 Santa Fe, New Mexico, USA - Hua Guo</Text>
        </Stack>
        <Stack  height="250px" fontWeight="700" width="100%" bgImage={`linear-gradient(to bottom left, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.6)), url(/static/images/places/bordeaux.jpeg)`}

        justify="end"
        //filter="grayscale(100%)"
        bgSize="cover"
        bgPosition="center">
          <Text textAlign="left" p="5" fontSize={["3.5vw", "3vw", "2.5vw", "2vw"]} >12. 2013 Bordeaux, France - Laurent Bonnet and Pascal Larregaray</Text>
        </Stack>
        <Stack  height="250px" fontWeight="700" width="100%" bgImage={`linear-gradient(to bottom left, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.6)), url(/static/images/places/salamanca.jpeg)`}

        justify="end"
        //filter="grayscale(100%)"
        bgSize="cover"
        bgPosition="center">
          <Text textAlign="left" p="5" fontSize={["3.5vw", "3vw", "2.5vw", "2vw"]} >13. 2015 Salamanca, Spain - Octavio Roncero, Tomás González-Lezana, Susana Gómez-Carrasco, Lola González-Sánchez</Text>
        </Stack>
        <Stack  height="250px" fontWeight="700" width="100%" bgImage={`linear-gradient(to bottom left, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.6)), url(/static/images/places/trieste.jpeg)`}

        justify="end"
        //filter="grayscale(100%)"
        bgSize="cover"
        bgPosition="center">
          <Text textAlign="left" p="5" fontSize={["3.5vw", "3vw", "2.5vw", "2vw"]} >14. 2017 Trieste, Italy - Niyazi Bulut, Noelia Faginas Lago, Andrea Lombardi, Federico Palazzetti</Text>
        </Stack>
        <Stack  height="250px" fontWeight="700" width="100%" bgImage={`linear-gradient(to bottom left, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.6)), url(/static/images/places/saitama.jpeg)`}

        justify="end"
        //filter="grayscale(100%)"
        bgSize="cover"
        bgPosition="center">
          <Text textAlign="left" p="5" fontSize={["3.5vw", "3vw", "2.5vw", "2vw"]} >15. 2019 Saitama, Japan - Toshiyuki Takayanagi</Text>
        </Stack>
        <Stack  height="250px" fontWeight="700" width="100%" bgImage={`linear-gradient(to bottom left, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.6)), url(/static/images/places/Balaton.jpeg)`}

        justify="end"
        //filter="grayscale(100%)"
        bgSize="cover"
        bgPosition="center">
          <Text textAlign="left" p="5" fontSize={["3.5vw", "3vw", "2.5vw", "2vw"]} >16. 2022 Balatonföldvár, Hungary - György Lendvay, Gabriella Lendvayné Győrik, Ákos Bencsura</Text>
        </Stack>

        </Center>
        
      </Box>
      <Box position="relative" ref={refProgram}>
      <Divider />
        {/* Low opacity background image */}
        <Box
          position="absolute"
          width="100%"
          //height="100%"
          /*backgroundImage='url("/images/qm2.jpeg")'
          backgroundSize='cover'
          backgroundPosition='center'
          style={{ filter: 'grayscale(100%)' }}
          opacity="0.4"*/
          zIndex="0"
        ></Box>

        {/* Content */}
        <Center flexDirection="column" position="relative" top="0" left="0" width="100%" //height="100%" 
        zIndex="1" p="10%">
          <Box
          
            fontWeight="medium"
            fontSize={["6vw", "6vw", "5vw", "4vw"]}
            textAlign="center"
            style={{
              background: "linear-gradient(to right, rgba(57,155,255,1), rgba(238,113,249,1))",
              WebkitBackgroundClip: "text",
              color: "transparent"
            }}
          >
            <Box as="span" fontWeight="extrabold"
            
            >QRS 2024 Program<br/></Box> 
          </Box>
          <Schedule />
        </Center>
        <Divider mt="40px" />
      </Box>
      <Box position="relative" ref={refReg}>
        {/* Low opacity background image */}
        <Divider />
        <Box
          position="absolute"
          width="100%"
          //height="100%"
          /*backgroundImage='url("/images/qm2.jpeg")'
          backgroundSize='cover'
          backgroundPosition='center'
          style={{ filter: 'grayscale(100%)' }}
          opacity="0.4"*/
          zIndex="0"
        ></Box>

        {/* Content */}
        <Center flexDirection="column" position="relative" top="0" left="0" width="100%" //height="100%" 
        zIndex="1" px="10%">
          <Box
         
            fontWeight="medium"
            fontSize={["6vw", "6vw", "5vw", "4vw"]}
            textAlign="center"
            style={{
              background: "linear-gradient(to right, rgba(57,155,255,1), rgba(238,113,249,1))",
              WebkitBackgroundClip: "text",
              color: "transparent"
            }}
          >
            <Box as="span" fontWeight="extrabold"
            
            >Prices<br/></Box> 
          </Box>
          <RegistrationFee />
        </Center>
        
      </Box>
      <Box position="relative" height="100vh" ref={refSponsor}>
        
        <Divider />
        <Box
          position="absolute"
          width="100%"
          height="100%"
          
          bgImage='url("/static/images/nuclear.jpg")'
          backgroundSize='cover'
          backgroundPosition='center'
          
          opacity="1"
          zIndex="0"
        ></Box>

        {/* Content */}
        <Center flexDirection="column" position="relative" top="0" left="0" width="100%" height="100%" zIndex="1" p="10%">
          <Box
            mb="10"
            fontWeight="medium"
            fontSize={["8vw", "6vw", "5vw", "4vw"]}
            textAlign="center"
          >
            <Box as="span"  /*style={{
              background: "linear-gradient(to right, rgba(57,155,255,1), rgba(238,113,249,1))",
              WebkitBackgroundClip: "text",
              color: "transparent"
            }}*/ textShadow="2px 2px 3px rgba(0, 0, 0, 1)" fontWeight="extrabold">SPONSORS</Box> 
          </Box>
          <Grid alignItems="center" justifyItems="center" 
    templateColumns={{ base: "repeat(2, 1fr)", sm: "repeat(3, 1fr)" }}
    gap={7}
    width="100%"
>
    <Box 
        borderRadius="full"
        bgImage="/static/images/logos/gaussian-w.JPEG" 
         h={["60px","70px","90px", "110px" ,"130px"]}
        w={["100px","120px","160px","200px","240px"]} 
        bgSize="cover" 
        bgPosition="center"
        bgBlendMode="screen"
        transition="transform 1s"  // smooth transition for transform properties
    _hover={{ 
        transform: "scale(1.5)"  // scale the box on hover
    }} 
    />
    <Box 
         borderRadius="full"
        h={["60px","70px","90px", "110px" ,"130px"]}
        w={["100px","120px","160px","200px","240px"]}
        bgImage="/static/images/logos/tkd-w.JPEG" 
        bgPosition="center"
        
        bgSize="cover" 
        
        bgBlendMode="screen" 
        transition="transform 1s"  // smooth transition for transform properties
    _hover={{ 
        transform: "scale(1.5)"  // scale the box on hover
    }}
    />
    <Box 
         borderRadius="full"
        bgImage="/static/images/logos/truba-w.JPEG" 
        bgPosition="center"
        h={["60px","70px","90px", "110px" ,"130px"]}
        w={["100px","120px","160px","200px","240px"]}
        bgSize="cover" 
        
        bgBlendMode="screen" 
        transition="transform 1s"  // smooth transition for transform properties
    _hover={{ 
        transform: "scale(1.5)"  // scale the box on hover
    }}
    />
    <Box 
         borderRadius="full"
        bgImage="/static/images/logos/ytu-w.JPEG" 
        bgPosition="center"
        h={["60px","70px","90px", "110px" ,"130px"]}
        w={["100px","120px","160px","200px","240px"]}
        bgSize="cover" 
        
        bgBlendMode="screen" 
        transition="transform 1s"  // smooth transition for transform properties
    _hover={{ 
        transform: "scale(1.5)"  // scale the box on hover
    }}
    />
    <Box 
         borderRadius="full"
        bgImage="/static/images/logos/turkishair-w.JPEG" 
        bgPosition="center"
        h={["60px","70px","90px", "110px" ,"130px"]}
        w={["100px","120px","160px","200px","240px"]}
        bgSize="cover" 
        
        bgBlendMode="screen" 
        transition="transform 1s"  // smooth transition for transform properties
    _hover={{ 
        transform: "scale(1.5)"  // scale the box on hover
    }}
    />
</Grid>

        </Center>
        
      </Box>
    </Box>
  );
}

////END OF HOME PAGE
interface GradientBorderBoxProps {
  children: ReactNode;
}

const GradientBorderBox: React.FC<GradientBorderBoxProps> = ({ children }) => {
  return (
    <Box position="relative"  width={["100px","120px", "150px", "150px"]} height={["100px","120px", "150px", "150px"]} m={["1","2", "3","5"]} rounded="2xl">
      {/* Gradient background */}
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        
        sx={{
          background: 'linear-gradient(to bottom, rgba(57,155,255,1), rgba(238,113,249,1))',
          opacity:"0.4",
          borderRadius: 'inherit',
          zIndex: '-1',
          margin: '-2px', // Adjust as needed
        }}
      ></Box>
      {/* Transparent background to cover the inner part of the gradient, effectively leaving only the border with a gradient */}
      <Box
      
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        sx={{
          background: 'gray.700',  // Set to the background color of its parent
          opacity:"0.4",
          borderRadius: 'inherit',
          zIndex: '0',
          margin: '1px', // Adjust as needed
        }}
      ></Box>
      {/* Content */}
      <Box
        position="relative"
        
        width="100%"
        height="100%"
        rounded="2xl"
        border="1px solid transparent"
        zIndex="1"
      >
        <Text fontWeight="extrabold" textAlign="center" mt="2"  //color="black" 
        fontSize={["8pt", "11.5pt", "13.5pt", "13.5pt"]} p="2">{children}</Text>
      </Box>
      
    </Box>
  );
};

interface SpeakerBoxProps {
  title: string;
  name: string;
  institute: string;
  image: string;
}

const SpeakerBox: React.FC<SpeakerBoxProps> = ({ title, name, institute, image }) => {
  return (
    <Box //width="200px" 
    
     height="300px" position="relative" overflow="hidden" rounded="xl" boxShadow="lg" 
     _hover={{
      ".image-background": {
        filter: "grayscale(0%)",
        transition: "1s"
      }
    }}>
      {/* Gradient background over the image */}
      <Box
      className="image-background"
        position="absolute"
        width="100%"
        height="100%"
        
   bgImage={`linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.9)), url(${image})`}
        
        filter="grayscale(100%)"
        bgSize="cover"
        bgPosition="center"
      ></Box>
      {/* Content */}
      <Box
        position="relative"
        width="100%"
        height="100%"
        display="flex"
        flexDirection="column"
        justifyContent="flex-end"
        p="4"
      >
        <Text fontWeight="bold" color="white">{name}</Text>
        <Text fontSize="sm" color="white">{institute}</Text>
        <Text fontSize="xs" color="white" style={{
              background: "linear-gradient(to right, rgba(57,155,255,1), rgba(238,113,249,1))",
              WebkitBackgroundClip: "text",
              color: "transparent"
            }}>Title of talk: {title}</Text>
      </Box>
    </Box>
  );
};

//////OTHER COMPONENTS ENDPAGE
// src/components/Schedule.tsx

// src/components/Schedule.tsx

import {  VStack, Link, Tooltip,  } from "@chakra-ui/react";
import { useState } from "react";

interface DayDetailProps {
  day: number;
  date: string;
  details: {
    time: string;
    topic: JSX.Element;
    text: JSX.Element;
  }[];
}

const DayDetail: React.FC<DayDetailProps> = ({ day, date, details }) => {
  const [hoveredIndices, setHoveredIndices] = useState<number[]>([]);

  return (
    <VStack spacing={5} align="start">
      <Flex>

      
      <Text fontSize="xl" fontWeight="bold" mr="3">📅 </Text>
      <Text fontSize="xl" fontWeight="bold">
       Day {day} - {date}
      </Text>
      </Flex>
      {details.map((detail, index) => {
        const isHovered = hoveredIndices.includes(index);
        return (
          <Box
            key={index}
            _hover={{bg:"gray.700"}}
            border="1px solid gray"
            borderRadius="md"
            p={3}
            w="full"
            onMouseEnter={() => setHoveredIndices(prev => [...prev, index])}
            onMouseLeave={() => setHoveredIndices(prev => prev.filter(i => i !== index))}
          >
            <Text fontSize="12pt">{detail.time}</Text>
            <Text fontSize="14pt" fontWeight="extrabold" style={{
              background: "linear-gradient(to bottom right, rgba(57,155,255,1), rgba(238,113,249,1))",
              WebkitBackgroundClip: "text",
              color: "transparent"
            }}>{detail.topic}</Text>
            <Text 
              mt={2} 
              opacity={isHovered ? 1 : 0} 
              fontStyle="italic"
              fontSize="10pt"
              letterSpacing= "1px"
              transition="0.5s" 
              maxHeight={isHovered ? "300px" : "0px"} 
              overflow="hidden"
            >
              {detail.text}
            </Text>
          </Box>
        );
      })}
    </VStack>
  );
};


const Schedule: React.FC = () => {
  const [selectedDay, setSelectedDay] = useState(1);

  const days = [
    {
      day: 1,
      date: "24 June 2024",
      details: [
        {
          time: "12:00 - 14:00",
          topic: <>✍ Registration</>,
          text: <>The registration desk will be cracking open from 12:00 until 14:40</>,
        },
        {
          time: "14:00 - 14:15",
          topic: <>David Clary Opening Speech</>,
          text: <>Get ready to join us as we embark on the 17th QRS Workshop, graced by the inaugural address from David Clary, the visionary behind the very first QRS Workshop held in 1990 at Cambridge - United Kingdom.</>,
        },
        {
          time: "14:15 - 14:50",
          topic: <>Speaker A1 Title of Talk</>,
          text: <>Abstract will be here</>,
        },
        {
          time: "14:50 - 15:25",
          topic: <>Speaker A2 Title of Talk</>,
          text: <>Abstract will be here</>,
        },
        {
          time: "15:25 - 15:45",
          topic: <>Speaker B1 Title of Talk</>,
          text: <>Abstract will be here</>,
        },
        {
          time: "15:45 - 16:15",
          topic: <>☕️ Coffee Break</>,
          text: <></>,
        },
        {
          time: "16:15 - 16:50",
          topic: <>Speaker A3 Title of Talk</>,
          text: <>Abstract will be here</>,
        },
        {
          time: "16:50 - 17:25",
          topic: <>Speaker A4 Title of Talk</>,
          text: <>Abstract will be here</>,
        },
        {
          time: "17:25 - 18:00",
          topic: <>Speaker A5 Title of Talk</>,
          text: <>Abstract will be here</>,
        },
        {
          time: "18:00 - 18:30",
          topic: <>📷 QRS 2024 Photo Session</>,
          text: <>We are inviting you, as participants of QRS 2024, for a group photo shoot at the designated area. Please, be part of the picture!</>,
        },
        {
          time: "18:30 - 21:00",
          topic: <>Reception starts with Hasan Mandal, the president of TUBITAK, giving a welcome speech</>,
          text: <>The president of TUBITAK (The Scientific and Technological Research Council of Turkey), Dr. Hasan Mandal, will commence the reception with an insightful talk, sharing his thoughts and vision for the advancements in science and technology in Türkiye.</>,
        },
        // ... Add other details for the day here
      ],
    },
    {
      day: 2,
      date: "25 June 2024",
      details: [
        {
          time: "09:00 - 09:35",
          topic: <>Speaker A6 Title of Talk</>,
          text: <>Abstract will be here</>,
        },
        {
          time: "09:35 - 10:10",
          topic: <>Speaker A7 Title of Talk</>,
          text: <>Abstract will be here</>,
        },
        {
          time: "10:10 - 10:30",
          topic: <>Speaker B2 Title of Talk</>,
          text: <>Abstract will be here</>,
        },
        {
          time: "10:30 - 11:00",
          topic: <>☕️ Coffee Break</>,
          text: <></>,
        },
        {
          time: "11:00 - 11:35",
          topic: <>Speaker A8 Title of Talk</>,
          text: <>Abstract will be here</>,
        },
        {
          time: "11:35 - 12:10",
          topic: <>Speaker A9 Title of Talk</>,
          text: <>Abstract will be here</>,
        },
        {
          time: "12:10 - 12:30",
          topic: <>Speaker B3 Title of Talk</>,
          text: <>Abstract will be here</>,
        },
        {
          time: "12:30 - 14:00",
          topic: <>🍴 Lunch</>,
          text: <></>,
        },
        {
          time: "14:00 - 14:35",
          topic: <>Speaker A10 Title of Talk</>,
          text: <>Abstract will be here</>,
        },
        {
          time: "14:35 - 15:10",
          topic: <>Speaker A11 Title of Talk</>,
          text: <>Abstract will be here</>,
        },
        {
          time: "15:10 - 15:45",
          topic: <>Speaker A12 Title of Talk</>,
          text: <>Abstract will be here</>,
        },
        {
          time: "15:45 - 16:15",
          topic: <>☕️ Coffee Break</>,
          text: <></>,
        },
        {
          time: "16:15 - 16:50",
          topic: <>Speaker A13 Title of Talk</>,
          text: <>Abstract will be here</>,
        },
        {
          time: "16:50 - 17:25",
          topic: <>Speaker A14 Title of Talk</>,
          text: <>Abstract will be here</>,
        },
        {
          time: "17:25 - 18:00",
          topic: <>Speaker A15 Title of Talk</>,
          text: <>Abstract will be here</>,
        },
        {
          time: "18:00 - 18:20",
          topic: <>Speaker B5 Title of Talk</>,
          text: <>Abstract will be here</>,
        },
        {
          time: "18:25 - 22:00",
          topic: <>🍹Cocktail on a Boat: 🚢 Bosphorus Tour 🐟</>,
          text: <>Let's embark on a mesmerizing journey to the Istanbul Bosphorus, where the continents of Asia and Europe converge in an enchanting embrace. Experience the epitome of luxury with the Bosphorus Tour: Delight in a delectable sandwiched fish, savor delightful beverages, and indulge in tempting snacks, all while surrounded by breathtaking views aboard the Bosphorus Tour Ferry! Prepare to be captivated and pampered as you witness the beauty of the Bosphorus Strait. This is a truly unforgettable experience that will leave you with cherished memories of this magical voyage!
          P.S. If you don't enjoy fish or if you are a vegetarian, please check the relevant section on the registration form, as we have delicious alternatives for you as well.</>,
        },
        // ... Add other details for the day here
      ],
    },
    {
      day: 3,
      date: "26 June 2024",
      details: [
        {
          time: "09:00 - 09:35",
          topic: <>Speaker A16 Title of Talk</>,
          text: <>Abstract will be here</>,
        },
        {
          time: "09:35 - 10:10",
          topic: <>Speaker A17 Title of Talk</>,
          text: <>Abstract will be here</>,
        },
        {
          time: "10:10 - 10:30",
          topic: <>Speaker B6 Title of Talk</>,
          text: <>Abstract will be here</>,
        },
        {
          time: "10:30 - 11:00",
          topic: <>☕️ Coffee Break</>,
          text: <></>,
        },
        {
          time: "11:00 - 11:35",
          topic: <>Speaker A18 Title of Talk</>,
          text: <>Abstract will be here</>,
        },
        {
          time: "11:35 - 12:10",
          topic: <>Speaker A19 Title of Talk</>,
          text: <>Abstract will be here</>,
        },
        {
          time: "12:10 - 12:30",
          topic: <>Discussion and Decision Meeting: Next QRS</>,
          text: <>During this meeting, our focus will be on deliberating and ultimately determining both the venue and the individual(s) responsible for orchestrating the upcoming QRS.</>,
        },
        {
          time: "12:30 - 14:00",
          topic: <>🍴 Lunch</>,
          text: <></>,
        },
        {
          time: "14:00 - 14:35",
          topic: <>Speaker A20 Title of Talk</>,
          text: <>Abstract will be here</>,
        },
        {
          time: "14:35 - 15:10",
          topic: <>Speaker A21 Title of Talk</>,
          text: <>Abstract will be here</>,
        },
        {
          time: "15:10 - 15:45",
          topic: <>Speaker A22 Title of Talk</>,
          text: <>Abstract will be here</>,
        },
        {
          time: "15:45 - 16:15",
          topic: <>☕️ Coffee Break</>,
          text: <></>,
        },
        {
          time: "16:15 - 16:50",
          topic: <>Speaker A23 Title of Talk</>,
          text: <>Abstract will be here</>,
        },
        {
          time: "16:50 - 17:25",
          topic: <>Speaker A24 Title of Talk</>,
          text: <>Abstract will be here</>,
        },
        {
          time: "17:25 - 18:00",
          topic: <>Speaker A25 Title of Talk</>,
          text: <>Abstract will be here</>,
        },
        {
          time: "18:00 - 18:20",
          topic: <>Speaker B7 Title of Talk</>,
          text: <>Abstract will be here</>,
        },
        {
          time: "18:20 - 18:40",
          topic: <>Lightning Talks from Poster Presenters</>,
          text: <>We will be listening to 3-minute talks from poster presenters just before the poster session. The aim is to rev up our engines...</>,
        },
        {
          time: "18:40 - 20:30",
          topic: <>Poster Session</>,
          text: <>We will continue with scientific discussions in front of the posters. But don't worry, there's no need for anyone to search for a restaurant for dinner. Beverages, snacks, and most importantly, gözleme will be available to enjoy during the discussions in front of the posters</>,
        },
        {
          time: "20:30 - 22:30",
          topic: <>Excursions</>,
          text: <></>,
        },
        // ... Add other details for the day here
      ],
    },
    {
      day: 4,
      date: "27 June 2024",
      details: [
        {
          time: "09:00 - 09:35",
          topic: <>Speaker A26 Title of Talk</>,
          text: <>Abstract will be here</>,
        },
        {
          time: "09:35 - 10:10",
          topic: <>Speaker A27 Title of Talk</>,
          text: <>Abstract will be here</>,
        },
        {
          time: "10:10 - 10:30",
          topic: <>Speaker B8 Title of Talk</>,
          text: <>Abstract will be here</>,
        },
        {
          time: "10:30 - 11:00",
          topic: <>☕️ Coffee Break</>,
          text: <></>,
        },
        {
          time: "11:00 - 11:35",
          topic: <>Speaker A28 Title of Talk</>,
          text: <>Abstract will be here</>,
        },
        {
          time: "11:35 - 12:10",
          topic: <>Speaker A29 Title of Talk</>,
          text: <>Abstract will be here</>,
        },
        {
          time: "12:10 - 12:30",
          topic: <>Speaker B9 Title of Talk</>,
          text: <>Abstract will be here</>,
        },
        {
          time: "12:30 - 14:00",
          topic: <>🍴 Lunch</>,
          text: <></>,
        },
        {
          time: "14:00 - 14:35",
          topic: <>Speaker A30 Title of Talk</>,
          text: <>Abstract will be here</>,
        },
        {
          time: "14:35 - 15:10",
          topic: <>Speaker A31 Title of Talk</>,
          text: <>Abstract will be here</>,
        },
        {
          time: "15:10 - 15:45",
          topic: <>Speaker A32 Title of Talk</>,
          text: <>Abstract will be here</>,
        },
        {
          time: "15:45 - 16:15",
          topic: <>☕️ Coffee Break</>,
          text: <></>,
        },
        {
          time: "16:15 - 16:50",
          topic: <>Speaker A33 Title of Talk</>,
          text: <>Abstract will be here</>,
        },
        {
          time: "16:50 - 17:25",
          topic: <>Speaker A34 Title of Talk</>,
          text: <>Abstract will be here</>,
        },
        {
          time: "17:25 - 18:00",
          topic: <>Speaker A35 Title of Talk</>,
          text: <>Abstract will be here</>,
        },
        {
          time: "18:00 - 18:20",
          topic: <>Speaker B10 Title of Talk</>,
          text: <>Abstract will be here</>,
        },
        {
          time: "18:20 - 22:00",
          topic: <>🍴 Gala Dinner</>,
          text: <></>,
        },
        // ... Add other details for the day here
      ],
    },
    {
      day: 5,
      date: "28 June 2024",
      details: [
        {
          time: "09:00 - 09:35",
          topic: <>Speaker A36 Title of Talk</>,
          text: <>Abstract will be here</>,
        },
        {
          time: "09:35 - 10:10",
          topic: <>Speaker A37 Title of Talk</>,
          text: <>Abstract will be here</>,
        },
        {
          time: "10:10 - 10:30",
          topic: <>Speaker B11 Title of Talk</>,
          text: <>Abstract will be here</>,
        },
        {
          time: "10:30 - 11:00",
          topic: <>☕️ Coffee Break</>,
          text: <></>,
        },
        {
          time: "11:00 - 11:35",
          topic: <>Speaker A38 Title of Talk</>,
          text: <>Abstract will be here</>,
        },
        {
          time: "11:35 - 12:10",
          topic: <>Speaker A39 Title of Talk</>,
          text: <>Abstract will be here</>,
        },
        {
          time: "12:10 - 12:30",
          topic: <>Speaker B12 Title of Talk</>,
          text: <>Abstract will be here</>,
        },
        {
          time: "12:30 - 14:00",
          topic: <>🍴 Lunch</>,
          text: <></>,
        },
        {
          time: "14:00 - 14:35",
          topic: <>Speaker A40 Title of Talk</>,
          text: <>Abstract will be here</>,
        },
        {
          time: "14:35 - 15:10",
          topic: <>Speaker A41 Title of Talk</>,
          text: <>Abstract will be here</>,
        },
        {
          time: "15:10 - 15:30",
          topic: <>Closing Remarks</>,
          text: <></>,
        },
        // ... Add other details for the day here
      ],
    },
    // ... Add other days here
  ];

  const currentDayDetails = days.find((day) => day.day === selectedDay);

  return (
    <Grid width="100%" templateColumns={{ base: "repeat(1, 1fr)", sm: "repeat(2, 1fr)" }}
    gap={0}>
      <VStack spacing={5} align="start" width="100%" padding="20px">
        {days.map((day) => (
          <Flex key={day?.day}
          border="1px solid gray"
          p="4"
          borderRadius="4"
          fontWeight={selectedDay === day?.day ? "extrabold" : "medium"}
          bg={selectedDay === day?.day ? "gray.500" : "transparent"}
          onClick={() => setSelectedDay(day?.day)}
          cursor="pointer">

      
          <Text fontSize="xl" p="4" pr="2">📅 </Text>
          <Text fontSize="xl" p="4" pl="2">
           Day {day.day} - {day.date}
          </Text>
          </Flex>
        ))}
      </VStack>

      <Box width="100%" padding="20px">
        {currentDayDetails && <DayDetail {...currentDayDetails} />}
      </Box>
    </Grid>
  );
};


const RegistrationFee: React.FC = () => {
  const layout = useBreakpointValue({ base: 'column', sm: 'row' });

  return (
    <Box width="100%" py={5} px={8} bg="gray.900" borderRadius="md">
      <Grid
        templateColumns={{ base: '1fr', sm: '2fr 0.1fr 2fr 0.1fr 2fr' }} // Ensure equal column width & narrow dividers
        gap={6}
        alignItems="flex-start" // Align items to the start
      >
        {/* Column Template Function */}
        {['Student', 'Regular', 'Accompany'].map((title, index) => (
          <>
            <Box position="relative" width="100%" height={{base:"400px", sm:"600px"}}>
      <VStack spacing={4} align="start" width="100%">
        <Text fontSize="xl" fontWeight="bold" color="white" textAlign="center">
          {title}
        </Text>
        <Text 
          fontSize="5xl" 
          fontWeight="extrabold"
          style={{
            background: index === 0 
              ? "linear-gradient(to right, rgba(0,178,43,1), rgba(57,155,255,1))" 
              : index === 1 
              ? "linear-gradient(to right, rgba(57,155,255,1), rgba(238,113,249,1))" 
              : "linear-gradient(to right, rgba(178,0,0,1), rgba(255,212,96,1))",
            WebkitBackgroundClip: "text",
            color: "transparent"
          }} 
          textAlign="center"
        >
          {['250€', '650€', '450€'][index]}
        </Text>
        <VStack spacing={2} align="start" width="100%">
          {index === 0 && <Text color="gray.300">2 Starred Hotel</Text>}
          {index === 1 && <Text color="gray.300">5 Starred Hotel</Text>}
          {index === 2 && <Text color="gray.300">3 Starred Hotel</Text>}
          <Text color="gray.300">Access to all sessions</Text>
          <Text color="gray.300">Workshop materials</Text>
          {index === 2 && <Text color="gray.300">
            Accompanying person fee includes:<br/>
            🍸 Welcome Reception 🍽️ Gala dinner 🍹🚢 🐟 Cocktail on a Boat🚶‍♂️🚶‍♀️Excursion(s)
          </Text>}
          {index === 1 && <Text color="gray.300">Networking lunch</Text>}
          {index === 0 && <Text color="gray.300"></Text>}
        </VStack>
        <Button 
          position="absolute" 
          top="80%"
          //bottom="20px" 
          left="50%" 
          transform="translateX(-50%)" 
          //width="200px" 
          height="50px" 
          bgGradient={index === 0 
            ? "linear-gradient(to right, rgba(0,178,43,1), rgba(57,155,255,1))" 
            : index === 1 
            ? "linear-gradient(to right, rgba(57,155,255,1), rgba(238,113,249,1))" 
            : "linear-gradient(to right, rgba(178,0,0,1), rgba(255,212,96,1))"} 
          _hover={{bgGradient: index === 0 
            ? "linear-gradient(to left, rgba(0,178,43,1), rgba(57,155,255,1))" 
            : index === 1 
            ? "linear-gradient(to left, rgba(57,155,255,1), rgba(238,113,249,1))" 
            : "linear-gradient(to left, rgba(178,0,0,1), rgba(255,212,96,1))"}}
          fontSize="xxl"
          onClick={() => {}}
        >
          Register Now
        </Button>
      </VStack>
    </Box>
            
            {layout === 'row' && index !== 2 && <Box w="1px" bg="gray.700" h="100%" />}
            {layout === 'column' && index !== 2 && <Box h="1px" bg="gray.700" w="100%" my={4} />}
          </>
        ))}
      </Grid>
      <Divider mt="10"/>
      <Stack mt="10" align="center" justify="center">
      <Text fontWeight="extrabold" style={{
              background: "linear-gradient(to right, rgba(57,155,255,1), rgba(238,113,249,1))",
              WebkitBackgroundClip: "text",
              color: "transparent"
            }}>
      REGISTRATION PROCEDURE
</Text>
<Text>Registration and payment confirmations will be communicated via email. To ensure a seamless process, each individual registering is required to use a unique email address.</Text>
      <Flex>
        <Text p="3" style={{
              background: "linear-gradient(to right, rgba(57,155,255,1), rgba(238,113,249,1))",
              WebkitBackgroundClip: "text",
              color: "transparent"
            }}>
        Step 1: Pre-registration
        <Text color="white" textStyle="italic">To initiate the registration process, click the button below and complete the provided online registration form. [online registration form will be here]</Text>
        </Text>
        <Text p= "3" style={{
              background: "linear-gradient(to right, rgba(57,155,255,1), rgba(238,113,249,1))",
              WebkitBackgroundClip: "text",
              color: "transparent"
            }}>
        Step 2: Complete Registration:
        <Text color="white" textStyle="italic">After submitting the pre-registration form, you will receive an email containing a link to finalize your conference registration</Text>
        </Text>
      </Flex>
      </Stack>
      
    </Box>
  );
}



