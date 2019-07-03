import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import componentsStyle from "Styles/componentsStyle.jsx";
import ChatWindow from "Components/ChatWindow";
import "index.css";

import Header from "./Header.jsx";

class LandingPage extends React.Component {
  render() {
    const classes = this.props;
    return (
      <>
        <Header
          color="transparent"
          brand={"CHAT APP"}
          fixed
          changeColorOnScroll={{
            height: 30,
            color: "white"
          }}
        />{" "}
        <div
          style={{ marginTop: "200px", maxHeight: "700px" }}
          className={classes.mainRaised}
        >
          <ChatWindow />
        </div>
      </>
    );
  }
}

export default withStyles(componentsStyle)(LandingPage);
