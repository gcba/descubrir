"use client";

import { useEffect, useRef } from "react";
import { Box, Grid, Image, Text, Stack, Link } from "@chakra-ui/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Container, Play } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function EventosChakra() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, index) => {
        if (!card) return;

        gsap.fromTo(
          card,
          { x: -100, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.8,
            delay: index * 0.2,
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          },
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <Box
      ref={sectionRef}
      as="section"
      mb={5}
      display="flex"
      flexDirection="column"
      alignItems="center"
      width="100%"
      px={{ base: "16px", md: "125px" }}
      my="50px"
    >
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
        {/* SECCIÓN SUPERIOR */}
        <Grid
          templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
          mb={10}
          width="100%"
          alignItems="flex-start"
          justifyContent="space-around"
        >
          {/* ITEM 1 */}
          <Box width="180px" fontFamily="Montserrat" fontSize="18px">
            <Text fontSize="28px" fontWeight="bold" color="white">
              Hoy
            </Text>
            <Box mt={2} height="2px" bg="orangered" width="100%" />
          </Box>

          {/* ITEM 2 */}
          <Box width="180px" fontFamily="Montserrat" fontSize="18px">
            <Text fontSize="28px" fontWeight="bold" color="white">
              Esta semana
            </Text>

            <Box mt={2} height="2px" bg="white" width="191px" />
          </Box>

          {/* ITEM 3 */}
          <Box width="180px" fontFamily="Montserrat" fontSize="18px">
            <Text fontSize="28px" fontWeight="bold" color="white">
              Este finde
            </Text>
            <Box mt={2} height="2px" bg="white" width="191px" />
          </Box>
        </Grid>
        {/* SECCIÓN SUPERIOR */}
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
              title: "Festival de la Gastronomía",
              img: "/imgs/event1.jpg",
            },
            { title: "Evento 2", img: "/imgs/event2.jpg" },
            { title: "Evento 3", img: "/imgs/event3.jpg" },
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

                <Stack p="14px 24px 32px 24px">
                  <Text
                    fontSize="24px"
                    color="white"
                    fontWeight="500"
                    mb="14px"
                    lineClamp={2}
                  >
                    {evento.title}
                    {evento.title}
                    {evento.title}
                  </Text>

                  <Text fontSize="sm" color="white" lineClamp={4}>
                    Del 11 al 16 de febrero, Buenos Aires se convirtió en el
                    epicentro de la música. Del 11 al 16 de febrero, Buenos
                    Aires se convirtió en el epicentro de la música. Del 11 al
                    16 de febrero, Buenos Aires se convirtió en el epicentro de
                    la música. Del 11 al 16 de febrero, Buenos Aires se
                    convirtió en el epicentro de la música.
                  </Text>
                </Stack>
              </Stack>
            </Box>
          ))}
        </Box>

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
      </Box>
    </Box>
  );
}
