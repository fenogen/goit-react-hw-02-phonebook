import React from "react";
import Phonebook from "./components/Phonebook/Phonebook"
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Phonebook />
      </div>
    );
  }
}

export default App;
