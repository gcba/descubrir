"use client";

import {
  Box,
  Grid,
  Image,
  Text,
  Stack,
  Link,
  Heading,
  Container,
} from "@chakra-ui/react";
import { Play } from "lucide-react";

export default function EditorialChakra() {
  const editoriales = [
    { img: "/imgs/event1.jpg" },
    { img: "/imgs/event5.jpg" },
    { img: "/imgs/event4.png" },
    { img: "/imgs/event1.jpg" },
  ];

  return (
    <Box mb={10} className="card-container-editorial">
      <Container maxW="container.lg">
        {/* TÍTULO */}
        <Heading
          as="h2"
          size="lg"
          mb={6}
          color="white"
          fontFamily="'Nunito', sans-serif"
          fontSize="48px"
        >
          Noticias ❤
        </Heading>
        <Box mt={2} mb={4} height="2px" bg="white" width="100%" />

        {/* Contenedor para alinear las tarjetas y el enlace */}
        <Box
          width="100%"
          maxW="100vw"
          display="flex"
          flexDirection="column"
          alignItems="flex-start"
          overflowX={{ base: "auto", md: "hidden" }}
          flexWrap={{ base: "nowrap", md: "wrap" }}
          px={{ base: "calc((100vw - 348px) / 2)", md: "0px" }}
        >
          {/* GRID */}
          <Box
            display="flex"
            gap={6}
            overflowX={{ base: "auto", md: "hidden" }}
            flexWrap={{ base: "nowrap", md: "wrap" }}
            px="8px"
          >
            {[
              {
                title: "Festival de la Gastronomía ",
                img: "/imgs/event1.jpg",
              },
              { title: "Evento 2 ", img: "/imgs/event2.jpg" },
              { title: "Evento 3 ", img: "/imgs/event3.jpg" },
            ].map((evento, index) => (
              <Box
                key={index}
                w="348px"
                maxW="348px"
                minH="462px"
                // maxH="524px"
                flexShrink={0}
              >
                <Stack
                  w="100%"
                  h="100%"
                  border="1px solid #CFCFCF"
                  borderRadius="16px"
                  overflow="hidden"
                >
                  <Image
                    src={evento.img}
                    w="100%"
                    h="327px"
                    minH="327px"
                    objectFit="cover"
                  />

                  <Stack p="16px 24px 32px 24px" gap={0}>
                    <Text
                      as="span"
                      color="white"
                      p={"4px 8px"}
                      borderRadius={"16px"}
                      border={"1px solid white"}
                      width={"fit-content"}
                    >
                      San Telmo
                    </Text>

                    <Text
                      fontSize="24px"
                      color="white"
                      fontWeight="500"
                      mb="14px"
                      lineClamp={2}
                      pt={"14px"}
                    >
                      {/* para provocar el truncado */}
                      {evento.title}
                      {evento.title}
                      {evento.title}
                    </Text>

                    <Text fontSize="sm" color="white" lineClamp={4}>
                      {/* para provocar el truncado */}
                      Del 11 al 16 de febrero, Buenos Aires se convirtió en el
                      epicentro de la música. Del 11 al 16 de febrero, Buenos
                      Aires se convirtió en el epicentro de la música. Del 11 al
                      16 de febrero, Buenos Aires se convirtió en el epicentro
                      de la música. Del 11 al 16 de febrero, Buenos Aires se
                      convirtió en el epicentro de la música.
                    </Text>
                  </Stack>
                </Stack>
              </Box>
            ))}
          </Box>

          <Box mt={70} width="100%">
            <Link
              href="#"
              color="white"
              borderBottom="2px solid white"
              pb="4px"
              display="inline-flex"
              alignItems="center"
              _hover={{ textDecoration: "none", opacity: 0.8 }}
            >
              IR A NOTICIAS <Play color="orange" />{" "}
              {/*Lucide no tiene íconos rellenos*/}
            </Link>
          </Box>
        </Box>
        {/* Contenedor para alinear las tarjetas y el enlace */}
      </Container>
    </Box>
  );
}
