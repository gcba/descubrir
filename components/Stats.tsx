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

        {/* GRID */}
        <Grid
          templateColumns={{
            base: "repeat(2, 1fr)",
            md: "repeat(4, 1fr)",
          }}
          gap={6}
        >
          {editoriales.map((item, index) => (
            <Box key={index} display={"flex"} justifyContent={"center"}>
              <Stack
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                flexDirection={"column-reverse"}
                w="264px"
                h="303px"
                maxW="264px"
                maxH="303px"
                _hover={{
                  backgroundColor: "white",
                }}
              >
                {/* IMAGEN */}
                <Image
                  src={item.img}
                  w="248px"
                  h="200px"
                  maxW="248px"
                  maxH="200px"
                  objectFit="cover"
                  borderRadius="16px"
                />

                {/* TEXTO */}
                <Box
                  display={"flex"}
                  justifyContent={"flex-start"}
                  alignItems={"flex-start"}
                  flexDirection={"column"}
                >
                  <Text as="h3" fontSize="md" fontWeight="bold" mt={2}>
                    <Link
                      href="#"
                      color="white"
                      _hover={{ textDecoration: "underline" }}
                    >
                      Editorial
                    </Link>
                  </Text>

                  <Text fontSize="sm" color="gray.300">
                    Descripción de la tarjeta
                  </Text>
                </Box>
              </Stack>
            </Box>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
