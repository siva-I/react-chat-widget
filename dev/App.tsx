import { Component } from "react";

import {
  Widget,
  addResponseMessage,
  setQuickButtons,
  toggleMsgLoader,
  addLinkSnippet,
} from "../index";
import { addUserMessage } from "..";

export default class App extends Component {
  componentDidMount() {
    addResponseMessage("Welcome to this awesome chat!");
  }

  handleNewUserMessage = (newMessage: any) => {
    toggleMsgLoader();
    setTimeout(() => {
      toggleMsgLoader();
      addResponseMessage(newMessage);
    }, 2000);
  };

  handleQuickButtonClicked = (e: any) => {
    addResponseMessage("Selected " + e);
    setQuickButtons([]);
  };

  handleSubmit = (msgText: string) => {
    if (msgText.length < 80) {
      addUserMessage("Uh oh, please write a bit more.");
      return false;
    }
    return true;
  };

  render() {
    return (
      <Widget
        title="AUTODESK ASSISTANT"
        subtitle={null}
        senderPlaceHolder="Type your question"
        showCloseButton={true}
        handleNewUserMessage={this.handleNewUserMessage}
        handleQuickButtonClicked={this.handleQuickButtonClicked}
        imagePreview
        handleSubmit={this.handleSubmit}
        emojis
      />
    );
  }
}
