import defaultLabelStyles from "../src/theme/style";
import { Box, Text } from "@chakra-ui/react";

function App() {
  // Fonction utilitaire pour transformer l'objet de style
  const transformStyle = (styleObject: any) => ({
    ...styleObject,
    fontFamily: styleObject.fontFamily.regular,
  });

  return (
    <>
      <Box maxHeight="100vh" padding={50}>
        {/* Login */}
        <Text style={transformStyle(defaultLabelStyles.FormLabel.loginStyle)}>
          Login
        </Text>
        <Text style={transformStyle(defaultLabelStyles.FormLabel.loginStyle2)}>
          Login
        </Text>
        <Text
          style={transformStyle(defaultLabelStyles.FormLabel.passwordLogin)}
        >
          Mot de passe oublié
        </Text>
        <Text
          style={transformStyle(defaultLabelStyles.FormLabel.baseStyleRegular)}
        >
          AfricaBank Main 15px
        </Text>
        <Text
          style={transformStyle(defaultLabelStyles.FormLabel.baseStyleRegular2)}
        >
          AfricaBank Main 12px
        </Text>
        <Text
          style={transformStyle(defaultLabelStyles.FormLabel.baseStyleMedium)}
        >
          AfricaBank NaveBar 14px
        </Text>
        <Text
          style={transformStyle(defaultLabelStyles.FormLabel.baseStyleBold)}
        >
          AfricaBank Main 20px
        </Text>
        <Text
          style={transformStyle(defaultLabelStyles.FormLabel.baseStyleBold2)}
        >
          AfricaBank Sidebar 15px
        </Text>
        <Text
          style={transformStyle(defaultLabelStyles.FormLabel.baseStyleBold3)}
        >
          AfricaBank Main 17px
        </Text>
      </Box>
    </>
  );
}

export default App;
