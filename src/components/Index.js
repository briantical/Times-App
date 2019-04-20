import React, { Component } from 'react';
import '../App.css';
import './styles/styles.css';
import './styles/slider-animations.css';

import Header from './Header';
import Footer from './Footer';
import Main from './Main';


let data = require("./components/Data");

export default class Index extends Component {

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
    data.newsData().then(res => this.setState({data: res.articles}));
  }

  render() {
    const {data} = this.state;
    return (
      <div>
          <Header/>           
          <Main articles={data}/>                             
          <Footer/>
      </div>
    );
  }
}

