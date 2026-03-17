"use client";

import { useEffect, useRef } from "react";
import { Box, Grid, Image, Text, Stack, Link } from "@chakra-ui/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Play } from "lucide-react";

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
    >
      {/* Contenedor para alinear las tarjetas y el enlace */}
      <Box
        width="100%"
        maxWidth="1200px"
        display="flex"
        flexDirection="column"
        alignItems="flex-start" // Alinea todo a la izquierda
      >
        {/* GRID */}
        <Grid
          templateColumns={{
            base: "1fr",
            sm: "repeat(2, 1fr)",
            lg: "repeat(4, 1fr)",
          }}
          gap={6}
          width="100%"
          justifyContent="start" // Las tarjetas alineadas a la izquierda
        >
          {[
            { title: "Evento 1", img: "/imgs/event1.jpg", h: "350px" },
            { title: "Evento 2", img: "/imgs/event2.jpg", h: "380px" },
            { title: "Evento 3", img: "/imgs/event3.jpg", h: "350px" },
            { title: "Evento 4", img: "/imgs/event4.jpg", h: "350px" },
          ].map((evento, index) => (
            <Box
              key={index}
              ref={(el: HTMLDivElement | null) =>
                (cardsRef.current[index] = el)
              }
              opacity={0}
            >
              <Stack
                w="253px"
                minH="420px"
                maxH="450px"
                transition="all 0.3s ease"
                _hover={{
                  transform: "scale(1.08)",
                  zIndex: 2,
                }}
              >
                <Image
                  src={evento.img}
                  w="253px"
                  h={evento.h}
                  objectFit="cover"
                  borderRadius="16px"
                  borderColor="none"
                />
                <Text
                  mt="15px"
                  color="white"
                  paddingTop="15px"
                  paddingBottom="7px"
                  fontWeight="400"
                  fontFamily="'Nunito', sans-serif"
                >
                  {evento.title}
                </Text>
                <Text fontSize="sm" color="white">
                  Descripción de evento
                </Text>
              </Stack>
            </Box>
          ))}
        </Grid>

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
            Ir a todos los eventos
            <Play /> {/*Lucide no tiene íconos rellenos*/}
          </Link>
        </Box>
      </Box>
    </Box>
  );
}
