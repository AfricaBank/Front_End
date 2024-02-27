import { extendTheme } from "@chakra-ui/react";

//import colors, { hexToRGB } from "./colors";
import breakpoints from "./breakpoints";
import { fontSizes, lineHeight } from "./fontSize";
//import { defaultCheckBoxStyle, defaultLabelStyles } from "./defaultFormStyles";
import TabStyles from "./tabStyles";
import ProgressBarStyles from "./ProgressBarStyles";
import calenderIcon from "@assets/images/calendar.svg";

export const theme = (dir?: string) => {
  return extendTheme({
    direction: dir,
    //colors,
    fonts: {
      body: "rubik-regular",
    },
    fontSizes: {
      ...fontSizes,
    },
    lineHeights: {
      ...lineHeight,
    },
    breakpoints,
    styles: {
      global: {
        html: {
          fontSize: "14px",
          webkitUserSelect: "none",
          msUserSelect: "none",
          userSelect: "none",
        },
        body: {
          backgroundColor: "white.500",
        },
        _focus: {
          boxShadow: "none !important",
        },

        _dataFocus: {
          boxShadow: "none !important",
        },
        "&::-webkit-scrollbar": {
          width: "4px",
          height: "4px",
        },
        "&::-webkit-scrollbar-track": {
          width: "6px",
          height: "6px",
        },
        "&::-webkit-scrollbar-thumb": {
          //background: hexToRGB("primary"),
          borderRadius: "24px",
        },
        input: {
          "&::-webkit-calendar-picker-indicator": {
            background: `url(${calenderIcon}) no-repeat`,
            width: "12px",
            backgroundSize: "contain",
          },
        },
        label: {
          _disabled: {
            opacity: "1 !important",
          },
        },
      },
    },
    components: {
      //...defaultLabelStyles,
      //...defaultCheckBoxStyle,
      ...TabStyles,
      ...ProgressBarStyles,
    },

    // add missing config here for fonts / spacing / etc...
  });
};
