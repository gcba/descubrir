import { Box } from "@chakra-ui/react";
// import Hero from '@/components/Hero';
import Hero from "@/components/hero";
// import Multimedia from '@/components/Multimedia';
import Summer from "@/components/summer";
import TarjetasHoySemanaFinde from "@/components/TarjetasHoySemanaFinde";
import TarjetasHoySemanaFindeBadge from "@/components/TarjetasHoySemanaFindeBadge";
import Explorar from "@/components/Explorar";
import Highlighted from '@/components/highlighted';

export default function Home() {
	return (
		<Box as="main" minH="100vh">
			<Hero />
			<Summer />
			{/* <Multimedia /> */}
			<TarjetasHoySemanaFinde />
			<Highlighted />
			<Explorar />
			<TarjetasHoySemanaFindeBadge />
		</Box>
	);
}
