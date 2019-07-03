import { container } from "./main.jsx";

const componentsStyle = {
  container,
  navLink: {
    color: "inherit",
    position: "relative",
    padding: "1.5",
    fontWeight: "400",
    fontSize: "16px",
    textTransform: "uppercase",
    borderRadius: "3px",
    lineHeight: "20px",
    textDecoration: "none",
    margin: "10px",
    display: "inline-flex",
    "&:hover,&:focus": {
      color: "#0AA2D8",
      background: "white"
    }
  },

  mainRaised: {
    margin: "auto",

    width: "600px",
    background: "white",
    position: "relative",
    zIndex: "3",
    color: "black",
    borderRadius: "6px",
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
  }
};

export default componentsStyle;
