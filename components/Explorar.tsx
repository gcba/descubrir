"use client";

import { useEffect, useRef } from "react";
import {
  Box,
  Container,
  Heading,
  Flex,
  Text,
  Stack,
  Image,
} from "@chakra-ui/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Cpu, Grid, Link, Monitor, Play, Server } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Futuristic() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, index) => {
        if (!card) return;

        // Floating / rotation animation
        gsap.to(card, {
          y: "+=20",
          rotationY: 360,
          rotationX: 15,
          duration: 3 + index,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });

        // Scroll-triggered fade-in
        gsap.from(card, {
          opacity: 0,
          y: 50,
          duration: 1,
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

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
          Explorá la Ciudad{" "}
        </Heading>

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
              { title: "Evento 4 ", img: "/imgs/event3.jpg" },
              { title: "Evento 5 ", img: "/imgs/event3.jpg" },
              { title: "Evento 6 ", img: "/imgs/event3.jpg" },
            ].map((evento, index) => (
              <Box
                key={index}
                w="348px"
                maxH="200px"
                h="200px"
                // maxH="524px"
                flexShrink={0}
              >
                <Stack w="100%" h="100%" borderRadius="16px" overflow="hidden">
                  <Image
                    src={evento.img}
                    w="100%"
                    h="327px"
                    minH="327px"
                    objectFit="cover"
                    opacity={"0.45"}
                  />

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
                </Stack>
              </Box>
            ))}
          </Box>
        </Box>
        {/* Contenedor para alinear las tarjetas y el enlace */}
      </Container>
    </Box>
  );
}
