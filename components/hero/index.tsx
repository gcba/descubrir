'use client';

import { useEffect, useRef } from "react";
import { gsap } from 'gsap';
import { Box, Image, Flex, Heading, Button, Input, InputGroup } from "@chakra-ui/react";
import { LuSearch } from "react-icons/lu"
import bgImage from "@/assets/images/hero/bg.png";
import titleImage from "@/assets/images/hero/title.png";
import Logo from "@/components/logo";

export default function Hero() {
	const sectionRef = useRef<HTMLDivElement>(null);
	const titleRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const ctx = gsap.context(() => {
			gsap.from(titleRef.current, {
				y: 200,
				opacity: 0,
				duration: 1,
				delay: 0.3,
				ease: 'power3.out',
			});
		}, sectionRef);

		return () => ctx.revert();
	}, []);

	return (
		<Box
			as="section"
			position="relative"
			w="full"
			h="100vh"
			overflow="hidden"
			ref={sectionRef}
		>
			{/* background image */}
			<Image src={bgImage.src} position="absolute" top={0} left={0} alt="hero" w="full" h="full" objectFit="cover" />

			{/* conent */}
			<Flex h="full" direction="column" position="relative" zIndex={3} align="center" justify="space-between">
				<Flex direction="column" marginTop="16px" gap="4" align="center">
					<Flex align="center" gap="8" padding="16px 24px">
						<Logo />
						<Heading size="lg">Agenda</Heading>
						<Heading size="lg">Mapa</Heading>
						<Heading size="lg">Pascuas en BA</Heading>
						<Button colorPalette="orange" rounded="3xl" margin="0 24px 0 90px" fontWeight="bold" color="white">
							Ingresar
						</Button>
					</Flex>

					<InputGroup flex="1" startElement={<LuSearch />} maxW="570px">
						<Input placeholder="Buscar" rounded="3xl" size="xl" borderColor="white" />
					</InputGroup>
				</Flex>

				<Flex ref={titleRef} direction="column" align="center" gap="13px" marginBottom="60px">
					<Image src={titleImage.src} width="300px" alt="Linda" />
					<Heading size="4xl" maxW="500px" textAlign="center">El sitio para vivir la ciudad más linda del mundo.</Heading>
				</Flex>
			</Flex>

			{/* bottom shadow */}
			<Box
				position="absolute"
				bottom="-100px"
				left="5%"
				w="90%"
				h="300px"
				borderTopRightRadius="100%"
				borderTopLeftRadius="100%"
				background="black"
				filter="blur(50px)"
				pointerEvents="none"
				zIndex={2}
			/>
		</Box>
	);
}
