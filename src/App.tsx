import { Box, Text, FormLabel } from "@chakra-ui/react";
import { defaultLabelStyles } from "../src/theme/style";

function App() {
  return (
    <Box>
      <FormLabel style={defaultLabelStyles.FormLabel.baseStyle}>
        Your Label Text
      </FormLabel>
      <Text style={defaultLabelStyles.FormLabel.baseStyle}>Salut</Text>
    </Box>
  );
}

export default App;
