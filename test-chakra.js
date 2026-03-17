const chakra = require('@chakra-ui/react');

console.log('Available exports:', Object.keys(chakra).filter(k => k.includes('system') || k.includes('System') || k.includes('Provider')));
console.log('\ndefaultSystem type:', typeof chakra.defaultSystem);
console.log('defaultSystem value:', chakra.defaultSystem);
console.log('\nChakraProvider type:', typeof chakra.ChakraProvider);
