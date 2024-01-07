// ! IMPORTANT: default color must be 500.

import { theme } from "@chakra-ui/react";

// ! IMPORTANT: 600 is hover color
const colors: { [color: string]: { [opacity: number]: string } } = {
  ...theme.colors,
  primary: {
    50: "#F6F5FD",
    100: "#E3DFF9",
    200: "#D0CAF5",
    300: "#BDB5F1",
    400: "#AAA0ED",
    500: "#4D37D9",
    600: "#8576E5",
    700: "#7261E1",
    800: "#5F4CDD",
    900: "#2C2C2C",
  },
  secondary: {
    50: "#dafbff",
    100: "#b3eafb",
    200: "#88dbf3",
    300: "#5ccbed",
    400: "#32bde6",
    500: "#49C4E9",
    600: "#077fa0",
    700: "#005b74",
    800: "#003747",
    900: "#00141d",
  },
  tertiary: {
    50: "#defff0",
    100: "#b6f6d9",
    200: "#8cf0c2",
    300: "#61e9aa",
    400: "#1CC577",
    500: "#1cc577",
    600: "#109c5d",
    700: "#067042",
    800: "#004426",
    900: "#001808",
  },
  quaternary: {
    400: "#C7C7D2",
    500: "#2C2C2C",
    600: "#4B4B4B",
  },
  purple: {
    500: "#4D4586",
    300: "#4D4586",
    900: "#aaa5d2",
  },
  blue: {
    100: "#4397D1",
    300: "#4cc5ea",
    500: "#62BBD6",
    600: "#3EB6DB",
  },
  green: {
    100: "#02864d",
    300: "#1CC577",
    500: "#1CC577",
    600: "#00ff8f",
  },
  gray: {
    400: "#CBCBCB",
    500: "#707070",
    900: "#f8f8fa",
  },
  overlay: {
    500: "#C7C7D2",
  },
  red: {
    500: "#ff3b3b",
  },
  black: {
    500: "#000000",
    600: "#1B1A1A",
  },
  white: {
    500: "#ffffff",
  },
  focus: {
    500: "#49C4E9",
  },
  light: {
    500: "#D8D8E4",
  },
  lighter: {
    500: "#C7C7D2",
  },
  shadowColor: {
    500: "#0B0051",
  },
  keyboardShadow: {
    500: "#4B7DE1",
  },
};

export const hexToRGB = (color: string, alpha?: number, op?: number) => {
  const hex = getColor(color, op);
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  const a = alpha ? `, ${alpha}` : "";

  return `rgba(${r},${g},${b}${a})`;
};

export const getColor = (color = "primary", opacity = 500) =>
  colors[color][opacity];

export default colors;
