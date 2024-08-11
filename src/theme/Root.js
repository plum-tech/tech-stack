import React from "react";
import { ChakraProvider } from "@chakra-ui/react";

// Default implementation, that you can customize
export default function Root({children}) {
  return (
    <ChakraProvider>
      {children}
    </ChakraProvider>
  );
}