import { Carousel as ChakraCarousel, Flex, Separator, Text, Box, Heading } from "@chakra-ui/react";
import highlighted1 from '@/assets/images/highlighted/1.jpg';
import highlighted2 from '@/assets/images/highlighted/2.png';
import highlighted3 from '@/assets/images/highlighted/3.png';
import highlighted4 from '@/assets/images/highlighted/4.png';
import Image from "./image";
import Button from "@/components/button";

const carouselItems = [highlighted1.src, highlighted2.src, highlighted3.src, highlighted4.src];

export default function Carousel() {
	return (
		<ChakraCarousel.Root display={{ base: 'block', md: 'none' }} slideCount={4} mx="auto">
			<ChakraCarousel.ItemGroup>
				{carouselItems.map((src, index) => (
					<ChakraCarousel.Item key={index} index={index}>
						<Flex direction="column" align="start" gap="32px">
							<Image src={src} h="435px" />
							<Separator borderColor="white" size="md" opacity={0.7} w="full" />
							<Text fontSize="22px">Entretenimiento</Text>
							<Box>
								<Heading size="5xl" lineHeight="48px" color="#CB5F25">BAD</Heading>
								<Heading size="5xl" lineHeight="48px">Buenos Aires</Heading>
								<Text paddingTop="24px" fontSize="18px">Afters al aire libre, festivales, y shows en parques, plazas y anfiteatros. Cada semana los barrios presentaron programación.</Text>
							</Box>
							<Button marginTop="16px">Más información</Button>
						</Flex>
					</ChakraCarousel.Item>
				))}
			</ChakraCarousel.ItemGroup>
		</ChakraCarousel.Root>
	)
}
