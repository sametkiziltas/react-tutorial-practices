import React from "react";
import "./App.css";

function FancyBorder(props) {
  return (
    <div className={"FancyBorder FancyBorder-" + props.color}>
      {props.children}
    </div>
  );
}

function WelcomeDialog(props) {
  return (
    <FancyBorder color="red">
      <h1 className="Dialog-title">Welcome {props.name}</h1>
      <p className="Dialog-message">Thank you for visiting our App !</p>
    </FancyBorder>
  );
}

function Contacts() {
  return <div className="Contacts"></div>;
}

function Chat() {
  return <div className="Chat"></div>;
}

function SplitPane(props) {
  return (
    <div className="SplitPane">
      <div className="SplitPane-left">{props.left}</div>
      <div className="SplitPane-right">{props.right}</div>
    </div>
  );
}

class App extends React.Component {
  render() {
    const name = "Samet";
    return (
      <div className="App">
        <header className="App-header">
          <WelcomeDialog name={name} />
          <SplitPane left={<Contacts />} right={<Chat />} />
        </header>
      </div>
    );
  }
}

export default App;
