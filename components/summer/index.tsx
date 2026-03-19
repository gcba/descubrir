'use client';

import { Box, Container, Flex, Image, Heading, Text } from '@chakra-ui/react';
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Button from '@/components/button';
import summer1 from '@/assets/images/summer/1.jpg';
import summer2 from '@/assets/images/summer/2.jpg';
import summer3 from '@/assets/images/summer/3.jpg';
import summer4 from '@/assets/images/summer/4.jpg';
import heart from '@/assets/images/icons/heart.png';

gsap.registerPlugin(ScrollTrigger);

const SummerImage = ({ src, small }: { src: string, small?: boolean }) => (
	<Image
		src={src}
		alt="summer"
		maxH={{ base: "auto", md: "200px" }}
		maxW={small ? "30%" : "70%"}
		rounded="16px"
		objectFit="cover"
		objectPosition="center"
		overflow="hidden"
	/>
);

export default function Summer() {
	const sectionRef = useRef<HTMLDivElement>(null);
	const imagesRef = useRef<HTMLDivElement>(null);
	const heartRef = useRef<HTMLImageElement>(null);
	const summaryRef = useRef<HTMLDivElement>(null);

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

			gsap.from(imagesRef.current, {
				opacity: 0,
				scale: 0.5,
				...sharedProps,
			});

			gsap.from(heartRef.current, {
				x: 200,
				opacity: 0,
				...sharedProps,
			});


			if (summaryRef.current) {
				const summaryItems = Array.from(summaryRef.current.children).filter(
					child => child !== heartRef.current
				);
				gsap.from(summaryItems, {
					y: 100,
					opacity: 0,
					...sharedProps,
				});
			}

		}, sectionRef);

		return () => ctx.revert();
	}, []);

	return (
		<Box
			as="section"
			w="full"
			padding="80px 0"
			ref={sectionRef}
		>
			<Container maxW="1108px" margin="0 auto" padding={0}>
				<Flex
					direction={{ mdDown: "column" }}
					gap={{ base: "32px", md: "96px" }}
					padding={{ mdDown: "48px 16px" }}
				>
					{/* Images */}
					<Flex
						ref={imagesRef}
						direction="column"
						gap={{ base: "8px", md: "16px" }}
						w="full"
						maxW={{ base: "full", md: "569px" }}
					>
						<Flex gap={{ base: "8px", md: "16px" }} justify="end">
							<SummerImage src={summer1.src} small />
							<SummerImage src={summer2.src} />
						</Flex>
						<Flex gap={{ base: "8px", md: "16px" }} justify="start">
							<SummerImage src={summer3.src} />
							<SummerImage src={summer4.src} small />
						</Flex>
					</Flex>

					{/* Summary content */}
					<Flex
						ref={summaryRef}
						direction="column"
						gap={{ base: "16px", md: "24px" }}
						align="start"
					>
						<Image ref={heartRef} src={heart.src} alt="heart" width="55px" />
						<Heading maxW="300px" size="5xl" lineHeight="48px">
							<span style={{ color: "#CB5F25" }}>Verano</span> en Buenos Aires
						</Heading>
						<Text fontSize="18px">Afters al aire libre, festivales, y shows en parques, plazas y anfiteatros. Cada semana los barrios presentaron programación.</Text>

						<Box paddingTop={{ base: "32px", md: "40px" }}>
							<Button>
								Mas Informacion
							</Button>
						</Box>
					</Flex>
				</Flex>
			</Container>
		</Box>
	);
}
