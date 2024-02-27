//import { hexToRGB } from './colors'

//Ici il manque les couleurs
import { BoxProps, TextProps } from "@chakra-ui/react";

interface ListItemProps extends BoxProps {
  status?: string;
}

const pageTitle = {
  color: "quaternary.500",
  fontWeight: "extrabold",
  fontSize: "17px",
  fontFamily: "rubik-bold",
  mb: "5",
  pt: "3px",
};
const resetButton = {
  backgroundColor: "white.500",
  color: "primary.500",
  border: "1px solid ",
  borderColor: "primary.500",
};
const listingItemStyles = (status: boolean): ListItemProps => ({
  //border: `3px solid ${hexToRGB('white')}`,
  borderRadius: "15px",
  bg: "white",
  mb: "10px",
  p: "10px",
  _before: {
    content: '" "',
    height: "12px",
    width: "3px",
    //bg: `${hexToRGB(status ? 'primary' : 'tertiary')}`,
    //border: `2px solid ${hexToRGB(status ? 'primary' : 'tertiary')}`,
    position: "absolute",
    margin: "14px -13px",
    borderRadius: "3px",
  },
});
const buttonActionBgStyles = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  w: "42px",
  h: "42px",
  borderRadius: "7px",
  //bg: hexToRGB('primary', 0.06, 700),
  me: "5px",
};
/*const iconActionBgStyles = (status: string, alpha?: number | undefined) => {
  return hexToRGB(status === 'active' || status === 'completed' ? 'primary' : 'tertiary', alpha)
}*/
const titleWidget = {
  color: "quaternary.500",
  fontSize: "fs-20",
  fontFamily: "rubik-bold",
};
const contentWidget = {
  fontSize: "fs-15",
  //color: `${hexToRGB('quaternary', 1, 500)}`,
  fontFamily: "rubik-regular",
};
const btnSquareRadius = (status: boolean) => ({
  boxSize: "42px",
  p: "10px",
  //bg: hexToRGB(status ? 'primary' : 'blue', 1),
  color: "white",
  borderRadius: "7px",
});
const titleItemStyle: TextProps = {
  fontFamily: "rubik-regular",
  fontSize: "fs-14",
  color: "gray.500",
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
};
const valueItemStyle: TextProps = {
  fontFamily: "rubik-medium",
  fontSize: "fs-14",
  //color: `${hexToRGB('quaternary', 1)}`,
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
};
/*const statusColor = (status: string, alpha: number | undefined) => {
  hexToRGB(status ? "tertiary" : "primary", alpha);
};*/

export {
  pageTitle,
  resetButton,
  listingItemStyles,
  buttonActionBgStyles,
  //iconActionBgStyles,
  titleWidget,
  contentWidget,
  btnSquareRadius,
  titleItemStyle,
  valueItemStyle,
  //statusColor,
};
