import React from "react";
import "./App.css";

function FancyBorder(props) {
  return (
    <div className={"FancyBorder FancyBorder-" + props.color}>
      {props.children}
    </div>
  );
}

function Dialog(props) {
  return (
    <FancyBorder color="blue">
      <h1 className="Dialog-title">{props.title}</h1>
      <p className="Dialog-message">{props.message}</p>
      {props.children}
    </FancyBorder>
  );
}

function WelcomeDialog(props) {
  return (
    <Dialog
      title={"Hoşgeldin " + props.name}
      message="Uzay aracımızı ziyaret ettiğiniz için teşekkür ederiz!"
    />
  );
}

class SignUpDialog extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
    this.state = { login: "" };
  }

  render() {
    return (
      <Dialog title="Mars Keşif Programı" message="Size nasıl başvurabiliriz?">
        <input 
          value={this.state.login}
          onChange={this.handleChange} 
        />
        <button 
          onClick={this.handleSignUp}
        >Beni kaydet!</button>
      </Dialog>
    );
  }

  handleChange(e) {
    this.setState({ login: e.target.value });
  }

  handleSignUp() {
    alert(`Welcome aboard, ${this.state.login}!`);
  }
}
class App extends React.Component {
  render() {
    const name = "Samet";
    return (
      <div className="App">
        <header className="App-header">

          <WelcomeDialog name={name} />
          <SignUpDialog></SignUpDialog>
          
        </header>
      </div>
    );
  }
}

export default App;
