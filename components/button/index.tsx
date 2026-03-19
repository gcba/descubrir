import { Button as ChakraButton } from "@chakra-ui/react";

export default function Button({ children, ...rest }: { children: React.ReactNode, [key: string]: any }) {
	return (
		<ChakraButton
			colorPalette="orange"
			rounded="3xl"
			color="white"
			fontWeight="bold"
			{...rest}
		>
			{children}
		</ChakraButton>
	);
}