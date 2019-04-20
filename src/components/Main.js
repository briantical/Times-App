import React, { Component } from 'react';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';

const Main = (props) => {  
  return(
  	<div className="wrapper">
    	<Slider className="slider-wrapper">          
          	{
	            (props.articles !== null) 
	            ? 
	                props.articles.map((article, index) =>
			            <div
		                	key={index}
		                	className="slider-content"
		                	style={{ background: `url('${article.urlToImage}') no-repeat center center` }}
		                >   
			                <div className="inner">
			                  <h2>{article.title}</h2>
			                  <div>{article.description + " ..."}</div>
			                  <a href={article.url}><button>Read more</button></a>
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
    </div>)
}

export default Main;