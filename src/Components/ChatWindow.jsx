import React from "react";
import ChatData from "Data/chats.json";
import UsersData from "Data/users.json";
import withStyles from "@material-ui/core/styles/withStyles";
import componentsStyle from "Styles/componentsStyle.jsx";
import ChatsWrapper from "Components/ChatsWrapper";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

class ChatWindow extends React.Component {
  state = {
    isUserChats: undefined,
    isUserLoggedIn: undefined,
    isUserAvatar: undefined
  };
  componentDidMount() {
    this.setUserLoggedIn();
    this.getUserChats();
  }

  setUserLoggedIn = () => {
    const isUserLoggedIn = UsersData.find(
      userLoggedIn => userLoggedIn.id === 1000
    );
    const isUserAvatar =
      isUserLoggedIn.firstName.charAt(0) + isUserLoggedIn.lastName.charAt(0);
    this.setState({ isUserLoggedIn, isUserAvatar });
    return isUserLoggedIn.id;
  };

  getUserChats = () => {
    ChatData.filter(userChats => {
      userChats.users.includes(id => id === 1000);
      userChats.messages.map(i => {
        for (let i in userChats.messages) {
          userChats.messages[i].createdAt = new Date(
            userChats.messages[i].createdAt
          )
            .toString()
            .slice(0, -36);
        }

        return userChats.messages;
      });
      const userChatData = ChatData;

      return this.setChatObject(userChatData);
    });
  };

  setChatObject = chats => {
    let userChats = [];
    chats.map(s => {
      let chatUser = s.users.find(id => id !== 1000);
      let userData = UsersData.find(user => user.id === chatUser);

      const session = {
        id: userData.id,
        messages: s.messages.sort((a, b) => a.createdAt - b.createdAt),
        sessionUser: userData.firstName + " " + userData.lastName,
        sessionAvatar:
          userData.firstName.charAt(0) + userData.lastName.charAt(0),
        sessionPreview: s.messages[0].content,
        sessionDate: s.messages[0].createdAt
      };
      userChats.push(session);

      const isUserChats = userChats;

      return this.setState({ isUserChats });
    });
  };

  render() {
    const { classes } = this.props;
    return (
      <>
        <div className={classes.mainRaised}>
          <AppBar className={classes.appBar} position="static">
            <Tabs value={0}>
              <Tab label="MESSAGES" />
            </Tabs>
          </AppBar>
          <div className="container">
            <div className="row justify-content-start">
              <ChatsWrapper
                userChats={this.state.isUserChats}
                userLoggedIn={this.state.isUserLoggedIn}
                userAvatar={this.state.isUserAvatar}
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default withStyles(componentsStyle)(ChatWindow);
