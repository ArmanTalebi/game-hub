import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "dark",
};

const theme = extendTheme({
  config,
  colors: {
    gray: {
      50: "#f1f1f3",
      100: "#d6d6d7",
      200: "#bbbbbd",
      300: "#a0a0a5",
      400: "#84848c",
      500: "#6b6b73",
      600: "#535359",
      700: "#3c3c3f",
      800: "#232325",
      900: "#0c0c0e",
    },
  },
});

export default theme;
