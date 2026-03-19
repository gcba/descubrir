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
          Editorial ❤
        </Heading>
        <Box mt={2} mb={4} height="2px" bg="white" width="100%" />

        {/* LINK - Ahora dentro del mismo contenedor que las tarjetas */}
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
            IR A EVENTOS DE HOY <Play color="orange" />{" "}
            {/*Lucide no tiene íconos rellenos*/}
          </Link>
        </Box>
        {/* Contenedor para alinear las tarjetas y el enlace */}
      </Container>
    </Box>
  );
}
