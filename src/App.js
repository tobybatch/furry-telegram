import {Box, ChakraProvider, Flex, Text, VStack} from "@chakra-ui/react"
import {UI} from "./components/MainUi";

function App({Component}) {
    return (
        <ChakraProvider>
            <Flex color="white">
            <VStack w="100px" bg="green.500">
                <Text>Menu 1</Text>
                <Text>Menu 2</Text>
                <Text>Menu 3</Text>
            </VStack>
            <Box flex="1" bg="tomato">
                <UI />
            </Box>
        </Flex>
        </ChakraProvider>
    )
}

export default App;
