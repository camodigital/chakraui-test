import { Box, Center, Flex, Square, Text } from '@chakra-ui/react'

export default function Home() {
  return (
    <Flex color="white">
      <Center w="100px" bg="green.500">
        <Text>home</Text>
      </Center>
      <Square bg="blue.500" size="150px">
        <Text>with</Text>
      </Square>
      <Box flex="1" bg="tomato">
        <Text>chakra</Text>
      </Box>
    </Flex>
  )
}
