const colors = {
  CitrineWhite: "#FAFAD6",
  BlueZodiac: "#12224C",
  Jaffa: "#F67242"
};

const googleFont =
  "https://fonts.googleapis.com/css?family=Archivo:400,500,700&display=swap";

export default {
  googleFont,
  fonts: {
    body: "'Archivo', sans-serif",
    monospace: '"Roboto Mono", monospace'
  },
  fontSizes: [25, 40, 50, 20, 24, 32, 48, 64],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700
  },
  colors: {
    text: colors.BlueZodiac,
    background: colors.CitrineWhite,
    primary: colors.Jaffa
  },
  styles: {
    root: {
      textAlign: "left",
      fontSize: ["1.5em", "3em"]
    },
    h1: {
      letterSpacing: "0em",
      color: colors.Jaffa,
      margin: 2,
      fontSize: "80px",
      textAlign: "left"
    },
    h2: {
      color: colors.Jaffa
    },
    p: {
      fontSize: 0
    },
    li: {
      fontSize: 0
    }
  }
};
