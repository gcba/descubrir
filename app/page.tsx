import { Box } from "@chakra-ui/react";
import Hero from '@/components/Hero';
import Multimedia from '@/components/Multimedia';
import Features from '@/components/Features';
import Stats from '@/components/Stats';
import Futuristic from '@/components/Futuristic';
import Testimonials from '@/components/Testimonials';
import CyberpunkCanvas from '@/components/CyberpunkCanvas';
import Earth3DSection from '@/components/Earth3DSection';
import MiniGame from '@/components/MiniGame';
import Contact from '@/components/Contact';
import GalaxyStory from '@/components/GalaxyStory';
import CasinoSection from '@/components/CasinoSection';
import ObeliscoSection from '@/components/ObeliscoSection';

export default function Home() {
  return (
    <Box as="main" minH="100vh">
      <Hero />
      <Multimedia />
      <Features />
      <Stats />
      <Futuristic />
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