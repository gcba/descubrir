'use client';

import { Box, Container, Flex, Image, Heading, Text, Button } from '@chakra-ui/react';
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import summer1 from '@/assets/images/summer/1.jpg';
import summer2 from '@/assets/images/summer/2.jpg';
import summer3 from '@/assets/images/summer/3.jpg';
import summer4 from '@/assets/images/summer/4.jpg';
import heart from '@/assets/images/icons/heart.png';

gsap.registerPlugin(ScrollTrigger);

const SummerImage = ({ src, small }: { src: string, small?: boolean }) => {
	return (
		<Image
			src={src}
			alt="summer"
			maxH="200px"
			maxW={small ? "150px" : "300px"}
			rounded="16px"
			objectFit="cover"
			objectPosition="center"
		/>
	)
}

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
				<Flex gap="96px">
					<Flex direction="column" gap="16px" w="full" maxW="569px" ref={imagesRef}>
						<Flex gap="16px" justify="end">
							<SummerImage src={summer1.src} small />
							<SummerImage src={summer2.src} />
						</Flex>
						<Flex gap="16px" justify="start">
							<SummerImage src={summer3.src} />
							<SummerImage src={summer4.src} small />
						</Flex>
					</Flex>

					<Flex direction="column" gap="24px" align="start" ref={summaryRef}>
						<Image ref={heartRef} src={heart.src} alt="heart" width="55px" />
						<Heading maxW="300px" size="5xl" lineHeight="48px">
							<span style={{ color: "#CB5F25" }}>Verano</span> en Buenos Aires
						</Heading>
						<Text fontSize="18px">Afters al aire libre, festivales, y shows en parques, plazas y anfiteatros. Cada semana los barrios presentaron programación.</Text>

						<Box paddingTop="40px">
							<Button variant="outline" borderColor="white" rounded="3xl" color="white">
								Mas Informacion
							</Button>
						</Box>
					</Flex>
				</Flex>
			</Container>
		</Box>
	);
}
