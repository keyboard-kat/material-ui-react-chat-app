import React from "react";
import ChatData from "Data/chats.json";
import UsersData from "Data/users.json";
import withStyles from "@material-ui/core/styles/withStyles";
import componentsStyle from "Styles/componentsStyle.jsx";
import ChatList from "Components/ChatList";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

class ChatWindow extends React.Component {
  state = {
    isUserChats: "",
    isUserAvatar: ""
  };
  componentDidMount() {
    this.getUserChats();
  }

  getUserChats = () => {
    ChatData.filter(userChats => {
      userChats.users.includes(1000, 0);

      for (let i in userChats.messages) {
        userChats.messages[i].createdAt = new Date(
          userChats.messages[i].createdAt
        );
      }

      const isUserChats = this.mapChatData(ChatData);

      return this.setState({ isUserChats });
    });
  };

  mapChatData = chatsArray =>
    chatsArray.map((chatData, i) => {
      let chatUser = chatData.users.find(id => id !== 1000);
      let sender = UsersData.find(user => user.id === chatUser);

      const isSenderAvatar =
        sender.firstName.charAt(0) + sender.lastName.charAt(0);

      const date = chatData.messages[0].createdAt;
      const content = chatData.messages[0].content;
      const isUser = UsersData.find(user => user.id === 1000);
      const isUserAvatar =
        isUser.firstName.charAt(0) + isUser.lastName.charAt(0);

      this.setState({ isUserAvatar, isSenderAvatar });

      return (
        <ChatList
          chats={chatData.messages}
          senderAvatar={isSenderAvatar}
          chatDate={date.toString()}
          chatContent={content}
          userAvatar={isUserAvatar}
          key={i}
        />
      );
    });

  render() {
    const { classes } = this.props;
    return (
      <>
        <div
          style={{ marginTop: "200px", maxHeight: "700px" }}
          className={classes.mainRaised}
        >
          <AppBar
            style={{ backgroundColor: "#0AA2D8", paddingTop: "50px" }}
            position="static"
          >
            <Tabs value={0}>
              <Tab label="MESSAGES" />
              <Tab label="CONTACTS" />
            </Tabs>
          </AppBar>
          <div style={{ overflow: "auto", maxHeight: "600px" }}>
            {this.state.isUserChats}
          </div>
        </div>
      </>
    );
  }
}

export default withStyles(componentsStyle)(ChatWindow);
