import React, { Component } from 'react';
import './App.css';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';

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
    const {data} = this.state;
    return (
      <div className="App">        
        <Slider>          
          {
            (data !== null) ? 
            data.map((article, index) => 
              <div key={index}>
                <h2>{article.des_facet[0]}</h2>
                <div>{article.url}</div>
              </div>)
              :
              <h2>NOTHING YET</h2>
          }
        </Slider>
      </div>
    );
  }
}

export default App;
