import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state ={
      data : null
    }    
  }

  componentDidMount(){
    this.getData();
  }
  getData = ()=>{
    fetch(`https://api.nytimes.com/svc/mostpopular/v2/emailed/7.json?api-key=${process.env.REACT_APP_API_KEY}`)
    .then((res) =>res.json())
    .then(data=>{
      this.setState({data : data.results})      
      })
    .catch((error)=>console.log("Error:" + error))
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <div>{JSON.stringify(this.state.data)}</div>
      </div>
    );
  }
}

export default App;
