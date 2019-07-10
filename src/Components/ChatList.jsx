import React from "react";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";

export default function ChatList(props) {
  return (
    <>
      <ListItemAvatar>
        <Avatar>{props.listAvatar}</Avatar>
      </ListItemAvatar>

      <ListItemText
        primary={props.listUser + " on " + props.listDate}
        secondary={
          <Typography
            component="span"
       variant="body2"
            style={{ display: "inline" }}
          >
            <br />
            {props.listPreview}
          </Typography>
        }
      />
    </>
  );
}
