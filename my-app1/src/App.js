import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Form from "react-bootstrap/Form";

const scaleNames = {
  c: "Santigrat",
  f: "Fahrenayt",
};

function BoilingVerdict(props) {
  if (props.celcius >= 100) {
    return <p>Su Kaynıyor.</p>;
  }
  return <p>Su Kaynamaz.</p>;
}

function toCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}

function toFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

function tryConvert(temperature, convert) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return "";
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}



class TemperatureInput extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onTemperatureChange(e.target.value);
  }

  render() {
    const temperature = this.props.temperature;
    const scale = this.props.scale;

    return (
      <fieldset>
        <legend>{scaleNames[scale]} cinsinden sıcaklık girin:</legend>
        <input value={temperature} onChange={this.handleChange} />
      </fieldset>
    );
  }
}

class Calculator extends React.Component {
  constructor(props) {
    super(props);

    this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
    this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
    this.state = { temperature: '', scale: 'c' };
  }
  handleCelsiusChange(temperature) {
    this.setState({ scale: 'c', temperature });
  }

  handleFahrenheitChange(temperature) {
    this.setState({ scale: 'f', temperature });
  }

  render() {
    const scale = this.state.scale;
    const temperature = this.state.temperature;

    const celsius =
      scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
      
    const fahrenheit =
      scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;

    return (
      <div className="App">
        <header className="App-header">
          <TemperatureInput
            scale="c"
            temperature={celsius}
            onTemperatureChange={this.handleCelsiusChange}
          ></TemperatureInput>

          <TemperatureInput
            scale="f"
            temperature={fahrenheit}
            onTemperatureChange={this.handleFahrenheitChange}
          ></TemperatureInput>

          <BoilingVerdict celsius={parseFloat(celsius)} />
        </header>
      </div>
    );
  }
}

export default Calculator;
