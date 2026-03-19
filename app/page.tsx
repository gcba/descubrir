import { Box } from "@chakra-ui/react";
// import Hero from '@/components/Hero';
import Hero from "@/components/hero";
// import Multimedia from '@/components/Multimedia';
import Summer from "@/components/summer";
import TarjetasHoySemanaFinde from "@/components/TarjetasHoySemanaFinde";
import TarjetasHoySemanaFindeBadge from "@/components/TarjetasHoySemanaFindeBadge";
import Explorar from "@/components/Explorar";
import Testimonials from "@/components/Testimonials";
import CyberpunkCanvas from "@/components/CyberpunkCanvas";
import Earth3DSection from "@/components/Earth3DSection";
import MiniGame from "@/components/MiniGame";
import Contact from "@/components/Contact";
import GalaxyStory from "@/components/GalaxyStory";
import CasinoSection from "@/components/CasinoSection";
import ObeliscoSection from "@/components/ObeliscoSection";
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
			<Testimonials />
			<CyberpunkCanvas />
			<Earth3DSection />
			<MiniGame />
			<Contact />
			<GalaxyStory />
			<CasinoSection />
			<ObeliscoSection />
		</Box>
	);
}
