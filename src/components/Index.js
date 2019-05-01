//This component merges all the three components to form the entire application
import React, { Component } from 'react';

//Import the stlying for the application
import '../App.css';
import './styles/styles.css';
import './styles/slider-animations.css';


//Import the Header, Footer and Main components
import ButtonAppBar from './Header';
import BottomAppBar from './Footer';
import Main from './Main';

//Get the fetched data
let data = require("../components/Data");

export default class Index extends Component {

  constructor(props){
    super(props);
    //set the state data to null until its populated by the API
    this.state ={
      data : null
    }    
  }

//Fetch the API data the moment the component loads
  componentDidMount(){
    this.getData();        
  }
//Function to get the data
  getData = ()=>{
    //From the fetched data, get the news articles only
    //update the state with the data fetched from the API    
    data.newsData().then(res => this.setState({data: res.articles}));
  }
//Render the components in the browser
  render() {
    const {data} = this.state;
    return (
      <div className="holdingContainer">
          <Header/> 
          {/*Pass the data fetched from the API to the Main content as a prop*/}          
          <Main articles={data}/>                             
          <Footer/>
      </div>
    );
  }
}

