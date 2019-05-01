//This is the main content component of the application
import React from 'react';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';

//The data from the API is obtained from the articles prop
const Main = (props) => {   
  return(
  	<div className="mainFold">
  	<div className="wrapper">
    	<Slider className="slider-wrapper" style={{height: "100%"}}>          
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
		              	<div className="noData">DATA NOT YET AVAILABLE</div>
          	}          
        </Slider>
    </div>
    </div>
    )
}

export default Main;