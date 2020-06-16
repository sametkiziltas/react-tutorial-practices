import React, { useState ,useEffect} from "react";
import "./App.css";

function Example() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  })
  return (
    <div>
      <p>you clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me!</button>
    </div>
  );
}

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Example></Example>
        </header>
      </div>
    );
  }
}

export default App;
