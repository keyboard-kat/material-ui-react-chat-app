import React, { useEffect } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";

import ChatList from "Components/ChatList";
import ChatSession from "Components/ChatSession";

const useStyles = makeStyles(theme => ({
  hide: {
    display: "none"
  },
  content: {
    "&:hover,&:focus": {
      color: "#0AA2D8",
      background: "whitesmoke"
    }
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),

    marginRight: "200px"
  }
}));

export default function ChatsWrapper(props) {
  const classes = useStyles();

  const [sessionsList, setSessionsList] = React.useState([]);

  useEffect(() => {
    if (props.userChats !== undefined || null) {
      setSessionsList([props.userChats]);
    }
  }, [props.userChats, setSessionsList]);

  const [open, setOpen] = React.useState(false);

  function handleDrawerOpen() {
    if (!open) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  }
  const [sessionLog, setSessionLog] = React.useState([]);

  const [sessionAvatar, setSessionAvatar] = React.useState(undefined);
  return (
    <>
      <div className="col">
        {Array.isArray(sessionsList[0]) &&
          sessionsList[0].map((s, i) => {
            return (
              <ListItem
                key={i}
                className={classes.content}
                button
                onClick={() => {
                  handleDrawerOpen();
                  setSessionLog(s.messages);
                  setSessionAvatar(s.sessionAvatar);
                }}
              >
                <ChatList
                  listAvatar={s.sessionAvatar}
                  listUser={s.sessionUser}
                  listDate={s.sessionDate}
                  listPreview={s.sessionPreview}
                />
              </ListItem>
            );
          })}
      </div>

      <div
        className="col"
        style={{
          overflow: "auto",
          maxHeight: "560px"
        }}
      >
        <div className={clsx(!open && classes.hide)}>
          <ChatSession
            session={sessionLog}
            sessionAvatar={sessionAvatar}
            userAvatar={props.userAvatar}
          />
        </div>
      </div>
    </>
  );
}
