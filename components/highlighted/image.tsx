import { Image as ChakraImage } from "@chakra-ui/react";

export default function HighlightedImage({ src, ...rest }: { src: string, [key: string]: any }) {
	return (
		<ChakraImage
			src={src}
			alt="highlighted"
			borderRadius="16px"
			objectFit="cover"
			objectPosition="center"
			overflow="hidden"
			w="full"
			{...rest}
		/>
	)
};
