// Définir le type des objets de styles
interface LabelStyles {
  FormLabel: {
    baseStyleRegular: {
      fontFamily: {
        regular: string;
      };
      color: string;
      fontSize: string;
      fontStyle: string;
      fontWeight: string;
      lineHeight: string;
    };
    baseStyleRegular2: {
      fontFamily: {
        regular: string;
      };
      color: string;
      fontSize: string;
      fontStyle: string;
      fontWeight: string;
      lineHeight: string;
    };
    baseStyleMedium: {
      fontFamily: {
        medium: string;
      };
      color: string;
      fontSize: string;
      fontStyle: string;
      fontWeight: string;
      lineHeight: string;
    };
    baseStyleBold: {
      fontFamily: {
        bold: string;
      };
      color: string;
      fontSize: string;
      fontStyle: string;
      fontWeight: string;
      lineHeight: string;
    };
    baseStyleBold2: {
      fontFamily: {
        bold: string;
      };
      color: string;
      fontSize: string;
      fontStyle: string;
      fontWeight: string;
      lineHeight: string;
    };
    baseStyleBold3: {
      fontFamily: {
        bold: string;
      };
      color: string;
      fontSize: string;
      fontStyle: string;
      fontWeight: string;
      lineHeight: string;
    };
    loginStyle: {
      fontFamily: {
        regular: string;
      };
      color: string;
      fontSize: string;
      fontStyle: string;
      fontWeight: string;
      lineHeight: string;
      width: string;
      height: string;
      flexShrink: string;
    };
    loginStyle2: {
      fontFamily: {
        regular: string;
      };
      color: string;
      fontSize: string;
      fontStyle: string;
      fontWeight: string;
      lineHeight: string;
      width: string;
      height: string;
      flexShrink: string;
    };
    passwordLogin: {
      fontFamily: {
        regular: string;
      };
      color: string;
      fontSize: string;
      fontStyle: string;
      fontWeight: string;
      lineHeight: string;
      width: string;
      height: string;
      flexShrink: string;
      textDecoration: string;
    };
  };
}

// Utilisez le type pour l'objet de styles
const defaultLabelStyles: LabelStyles = {
  FormLabel: {
    baseStyleRegular: {
      fontFamily: {
        regular: "Lato, sans-serif",
      },
      color: "#000",    
      fontSize: "15px",
      fontStyle: "normal",
      fontWeight: "400",
      lineHeight: "normal",
    },
    baseStyleRegular2: {
      fontFamily: {
        regular: "Lato, sans-serif",
      },
      color: "#000",    
      fontSize: "12px",
      fontStyle: "normal",
      fontWeight: "500",
      lineHeight: "normal",
    },
    baseStyleMedium: {
      fontFamily: {
        medium: "Lato Medium, sans-serif",
      },
      color: "#000",    
      fontSize: "14px",
      fontStyle: "normal",
      fontWeight: "500",
      lineHeight: "normal",
    },
    baseStyleBold: {
      fontFamily: {
       
        bold: "Lato",
      },
      color: "#050505",    
      fontSize: "20px",
      fontStyle: "normal",
      fontWeight: "700",
      lineHeight: "normal",
    },
    baseStyleBold2: {
      fontFamily: {
       
        bold: "Lato",
      },
      color: "#050505",    
      fontSize: "15px",
      fontStyle: "normal",
      fontWeight: "700",
      lineHeight: "normal",
    },
    baseStyleBold3: {
      fontFamily: {
       
        bold: "Lato",
      },
      color: "#050505",    
      fontSize: "17px",
      fontStyle: "normal",
      fontWeight: "700",
      lineHeight: "normal",
    },
    loginStyle: {
      fontFamily: {
        regular: "Afterglow",
      },
      color: "secondary.500",
      fontSize: "50px",
      fontStyle: "normal",
      fontWeight: "400",
      lineHeight: "normal",
      width: "135px",
      height: "47px",
      flexShrink: "0",
    },
    loginStyle2: {
      fontFamily: {
        regular: "Afterglow",
      },
      color: "secondary.500",
      fontSize: "13px",
      fontStyle: "normal",
      fontWeight: "400",
      lineHeight: "normal",
      width: "135px",
      height: "47px",
      flexShrink: "0",
    },
    passwordLogin: {
      fontFamily: {
        regular: "Afterglow",
      },
      color: "secondary.500",
      fontSize: "13px",
      fontStyle: "normal",
      fontWeight: "400",
      lineHeight: "normal",
      width: "135px",
      height: "47px",
      flexShrink: "0",
      textDecoration: "underline",
    },
  },
};

export default defaultLabelStyles;
