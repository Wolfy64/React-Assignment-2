import React, { Component } from 'react';
import './App.css';
import Validation from './Validation/Validation';
import Char from './Char/Char';

class App extends Component {
  state = {
    userInput: '',
  }

  userInputHandler = (event) => {
    this.setState({userInput: event.target.value})
  }

  deleteCharHandler = (index) => {
    const letters = this.state.userInput.split('');
    letters.splice(index, 1);
    this.setState({userInput: letters.join('')})
  }

  render() {
    const charList = this.state.userInput.split('').map((char, index )=> {
      return <Char
        key={index}
        char={char}
        clicked={() =>this.deleteCharHandler(index)} />
    })

    return (
      <div className="App">
        <ol>
          <li>Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li>
          <li>Create a new component (=> ValidationComponent) which receives the text length as a prop</li>
          <li>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>
          <li>Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
          <li>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
          <li>When you click a CharComponent, it should be removed from the entered text.</li>
        </ol>
        <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>
        <hr />
        
        <textarea
          name="text"
          cols="30"
          rows="10"
          onChange={this.userInputHandler}></textarea>
        <p>{this.state.userInput}</p>
        <Validation textLenght={this.state.textLenght} />
        {charList}
      </div>
    );
  }
}

export default App;
