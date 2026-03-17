import { Image, Flex } from "@chakra-ui/react";
import heartImg from "@/assets/images/icons/heart.png";
import logoImg from "@/assets/images/icons/logo.png";

export default function Logo() {
	return (
		<Flex alignItems="center" gap="2">
			<Image src={heartImg.src} alt="heart" />
			<Image src={logoImg.src} alt="logo" />
		</Flex>
	);
}
