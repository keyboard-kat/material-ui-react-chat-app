import React, { useEffect, useRef } from "react";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import ListItem from "@material-ui/core/ListItem";

import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core";
import componentsStyle from "../Styles/componentsStyle";

function ChatSession(props) {
  const { classes } = props;

  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(() => {
    if (props !== undefined || null) {
      scrollToBottom();
    }
  }, [props]);

  return (
    <>
      {props.session.map((msgs, i) => (
        <ListItem key={i}>
          {msgs.senderId !== 1000 ? (
            <>
              <ListItemText
                className={classes.chat}
                primary={msgs.content}
                secondary={
                  <Typography
                    key={i}
                    component="span"
                    variant="subtitle2"
                    color="inherit"
                  >
                    <br />
                    {msgs.createdAt}
                  </Typography>
                }
              />

              <ListItemAvatar>
                <Avatar className={classes.avatar}>
                  {props.sessionAvatar}
                </Avatar>
              </ListItemAvatar>
              <br />
            </>
          ) : (
            <>
              <ListItemAvatar>
                <Avatar className={classes.avatar}>{props.userAvatar}</Avatar>
              </ListItemAvatar>
              <ListItemText
                className={classes.chat}
                primary={msgs.content}
                secondary={
                  <Typography
                    key={i}
                    component="span"
                    variant="subtitle2"
                    color="inherit"
                  >
                    <br />
                    {msgs.createdAt}
                  </Typography>
                }
              />
            </>
          )}
        </ListItem>
      ))}

      <div ref={messagesEndRef}>
        <input className={classes.textField} />

        <Button className={classes.button}>SEND</Button>
      </div>
    </>
  );
}

export default withStyles(componentsStyle)(ChatSession);
