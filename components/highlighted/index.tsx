'use client';

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Box, Container, Flex, Heading, Text, Separator } from "@chakra-ui/react";
import highlighted1 from '@/assets/images/highlighted/1.jpg';
import highlighted2 from '@/assets/images/highlighted/2.png';
import highlighted3 from '@/assets/images/highlighted/3.png';
import highlighted4 from '@/assets/images/highlighted/4.png';
import Button from "@/components/button";
import Image from "./image";
import Carousel from "@/components/highlighted/carousel";

gsap.registerPlugin(ScrollTrigger);

export default function Highlighted() {
	const sectionRef = useRef<HTMLDivElement>(null);
	const imgRef = useRef<HTMLImageElement>(null);
	const galleryRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const ctx = gsap.context(() => {
			const sharedProps = {
				ease: "power3.out",
				delay: 0.3,
				duration: 1,
				scrollTrigger: {
					trigger: sectionRef.current,
					start: "top 85%",
					toggleActions: "play none none reverse"
				}
			};

			gsap.from(imgRef.current, {
				opacity: 0,
				scale: .3,
				x: 100,
				y: 100,
				...sharedProps,
			});

			gsap.from(".x-animaton", {
				x: -200,
				opacity: 0,
				stagger: 0.1,
				...sharedProps,
			});

			gsap.from(".y-animation", {
				y: 100,
				opacity: 0,
				...sharedProps,
			});

			gsap.from(galleryRef.current, {
				y: 100,
				opacity: 0,
				...sharedProps
			});
		}, sectionRef);

		return () => ctx.revert();
	}, []);

	return (
		<Box
			ref={sectionRef}
			as="section"
			w="full"
			padding={{ base: "32px 16px", md: "60px 0" }}
		>
			<Container display={{ mdDown: 'none' }} maxW="1108px" margin="0 auto" padding={0}>
				<Flex direction="column" gap="32px">
					<Flex gap="32px">
						<Flex direction="column" align="start" justify="space-between" w="40%">
							<Flex direction="column" gap="24px">
								<Separator className="x-animaton" borderColor="white" size="md" w="80%" opacity={0.7} />
								<Text className="x-animaton" fontSize="22px" padding="24px 0">Entretenimiento</Text>
								<Box className="y-animation">
									<Heading size="5xl" lineHeight="48px" color="#CB5F25">BAD</Heading>
									<Heading size="5xl" lineHeight="48px">Buenos Aires</Heading>
								</Box>
								<Text className="y-animation" fontSize="18px">Afters al aire libre, festivales, y shows en parques, plazas y anfiteatros. Cada semana los barrios presentaron programación.</Text>
							</Flex>

							<Box className="x-animaton">
								<Button>Más información</Button>
							</Box>
						</Flex>

						<Image ref={imgRef} src={highlighted1.src} />
					</Flex>

					<Flex ref={galleryRef} gap="24px" align="stretch">
						<Image src={highlighted2.src} cursor="pointer" />
						<Image src={highlighted3.src} cursor="pointer" />
						<Image src={highlighted4.src} cursor="pointer" />
					</Flex>
				</Flex>
			</Container>

			<Carousel />
		</Box>
	)
}
