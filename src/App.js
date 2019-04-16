import React, { Component } from 'react';
import './App.css';
import './styles.css';
import './slider-animations.css';
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
    let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.REACT_APP_API_KEY}`
    console.log(url);
    fetch(url)
    .then((res) =>res.json())
    .then(data=>{      
      this.setState({data : data.articles});
      console.log(data.articles)     
      })
    .catch((error)=>console.log("Error:" + error))
  }

  render() {
    const {data} = this.state;
    return (
      <div className="wrapper">        
        <Slider className="slider-wrapper">          
          {
            (data !== null) ? 
            data.map((article, index) =>
              <div
                key={index}
                className="slider-content"
                style={{ background: `url('${article.urlToImage}') no-repeat center center` }}
              >   
                <div className="inner">
                  <h2>{article.title}</h2>
                  <div>{article.description}</div>
                </div>
                <section>                  
                  <span>
                    Posted by <strong>{article.source.name}</strong>
                  </span>
                </section>                           
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
