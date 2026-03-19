'use client';

import { useEffect, useRef } from "react";
import { gsap } from 'gsap';
import { Box, Image, Flex, Heading, Input, InputGroup, IconButton } from "@chakra-ui/react";
import { LuSearch, LuMenu } from "react-icons/lu";
import { FaUser } from "react-icons/fa6";
import bgImage from "@/assets/images/hero/bg.png";
import titleImage from "@/assets/images/hero/title.png";
import Logo from "@/components/logo";
import Button from "@/components/button";

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
			<Image
				src={bgImage.src}
				position="absolute"
				top={0}
				left={0}
				alt="hero"
				w="full"
				h="full"
				objectFit="cover"
				objectPosition="center"
			/>

			{/* conent */}
			<Flex h="full" direction="column" position="relative" zIndex={3} align="center" justify="space-between">
				<Flex
					direction="column"
					marginTop={{ base: '0', md: '16px' }}
					gap="4"
					align="center"
					w={{ mdDown: 'full' }}
				>
					{/* navbar */}
					<Flex
						align="center"
						gap="8"
						padding={{ base: '12px 16px', md: '16px 24px' }}
						w={{ mdDown: 'full' }}
						justify={{ mdDown: "space-between" }}
					>
						<Logo />
						<Heading display={{ mdDown: 'none' }} size="lg">Agenda</Heading>
						<Heading display={{ mdDown: 'none' }} size="lg">Mapa</Heading>
						<Heading display={{ mdDown: 'none' }} size="lg">Pascuas en BA</Heading>
						<Button display={{ mdDown: 'none' }} margin="0 24px 0 90px">
							Ingresar
						</Button>

						{/* mobile buttons */}
						<Flex display={{ base: 'flex', md: 'none' }} gap="8px">
							<IconButton aria-label="user" colorPalette="orange" borderRadius="10px">
								<FaUser color="white" />
							</IconButton>
							<IconButton aria-label="menu" borderRadius="10px">
								<LuMenu />
							</IconButton>
						</Flex>
					</Flex>

					{/* search input */}
					<InputGroup display={{ mdDown: 'none' }} flex="1" startElement={<LuSearch />} maxW="570px">
						<Input placeholder="Buscar" rounded="3xl" size="xl" borderColor="white" />
					</InputGroup>
				</Flex>

				{/* title & description */}
				<Flex
					ref={titleRef}
					direction="column"
					align="center"
					gap="13px"
					marginBottom={{ base: '28px', md: '60px' }}
				>
					<Image src={titleImage.src} w={{ base: '230px', md: '300px' }} alt="Linda" />
					<Heading
						size={{ base: '3xl', md: '4xl' }}
						maxW={{ base: 'full', md: '500px' }}
						textAlign="center"
						padding={{ mdDown: '0 16px' }}
					>
						El sitio para vivir la ciudad más linda del mundo.
					</Heading>
				</Flex>
			</Flex>

			{/* bottom shadow */}
			<Box
				position="absolute"
				bottom="-100px"
				left={{ base: '-20%', md: '5%' }}
				w={{ base: '140%', md: '90%' }}
				h="300px"
				borderTopRightRadius={{ base: "0", md: "100%" }}
				borderTopLeftRadius={{ base: "0", md: "100%" }}
				background="black"
				filter="blur(50px)"
				pointerEvents="none"
				zIndex={2}
			/>
		</Box>
	);
}
