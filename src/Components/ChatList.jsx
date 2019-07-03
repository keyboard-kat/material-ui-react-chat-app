import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";

import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import GridContainer from "_components/GridContainer";
import GridItem from "_components/GridItem";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import Button from "@material-ui/core/Button";
const useStyles = makeStyles(theme => ({
  chatsContainer: {
    display: "fixed",
    marginLeft: "250px",
    backgroundColor: "#0AA2D8"
  },
  textField: {
    width: "250px",
    height: " 25px"
  },
  button: {
    borderColor: "white",
    backgroundColor: "#0AA2D8",
    border: "1px solid",
    height: " 25px",
    color: "white"
  },
  chat: {
    padding: 5,
    backgroundColor: "white",
    borderRadius: 5
  },
  chatList: {
    "&:hover,&:focus": {
      color: "#0AA2D8",
      background: "whitesmoke"
    }
  },

  hide: {
    display: "none"
  },
  content: {
    marginRight: 0,
    marginTop: "none",

    "&:hover,&:focus": {
      color: "#0AA2D8",
      background: "white"
    }
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),

    marginRight: "350px"
  }
}));

export default function ChatList(props) {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  function handleDrawerOpen() {
    if (!open) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  }
  console.log(props.userAvatar);
  return (
    <>
      <GridContainer>
        <GridItem xs={12} md={12} sm={12}>
          <main
            className={clsx(classes.content, {
              [classes.contentShift]: open
            })}
          >
            <List>
              <ListItem
                className={classes.chatList}
                button
                onClick={handleDrawerOpen}
              >
                <ListItemAvatar>
                  <Avatar>{props.senderAvatar}</Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={props.chatContent}
                  secondary={
                    <Typography
                      component="span"
                      variant="body2"
                      style={{ display: "inline" }}
                      color="textPrimary"
                    >
                      <br />
                      {props.chatDate}
                    </Typography>
                  }
                />
              </ListItem>
            </List>
          </main>
        </GridItem>

        <div className={classes.root}>
          <GridItem xs={12} md={12} sm={12}>
            <div className={classes.chatsContainer}>
              <div className={clsx(!open && classes.hide)}>
                {props.chats.map((msgs, i) => (
                  <ListItem key={i}>
                    {msgs.senderId !== 1000 ? (
                      <ListItemAvatar>
                        <Avatar>{props.senderAvatar.toString()}</Avatar>
                      </ListItemAvatar>
                    ) : (
                      <ListItemAvatar>
                        {" "}
                        <Avatar>{props.userAvatar.toString()}</Avatar>{" "}
                      </ListItemAvatar>
                    )}

                    <ListItemText
                      className={classes.chat}
                      primary={msgs.content.toString()}
                      secondary={
                        <Typography
                          key={i}
                          component="span"
                          variant="body2"
                          style={{ display: "inline" }}
                          color="textPrimary"
                        >
                          <br />
                          {msgs.createdAt.toString()}
                        </Typography>
                      }
                    />
                  </ListItem>
                ))}
                <input className={classes.textField} />
                <Button className={classes.button}>SEND</Button>
              </div>
            </div>
          </GridItem>
        </div>
      </GridContainer>
    </>
  );
}

ChatList.propTypes = {
  chats: PropTypes.any,
  userAvatar: PropTypes.any,
  senderAvatar: PropTypes.any,
  chatDate: PropTypes.any,
  chatContent: PropTypes.any,
  i: PropTypes.any
};
