import React, { useState} from 'react'
import NewsItem from './Newsitem'
import Spinner from './Spinner';
import propTypes from 'prop-types'
import { useEffect } from 'react';
import { useLayoutEffect } from 'react';


const News=(props)=> {
  const[articles,setArticle]=useState([])
  const[loading,setLoading]=useState(true)
  const[page,setPage]=useState(1);
  const[totalResults,setTotalResults]=useState(0)


  const capitalizeFirstLetter=(string)=> {
    return string.charAt(0).toUpperCase()+string.slice(1);
  }
  
  

const updatepage=async()=> 
{

props.setProgress(0)
const url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&pagesize=${props.pageSize}&page=${page}`;
setLoading(true)

let data= await fetch(url);
let parsedData=await data.json();


setArticle(parsedData.articles);
setTotalResults(parsedData.totalResults);
setLoading(false)

props.setProgress(100)

}

useEffect(()=>{
document.title=`${capitalizeFirstLetter(props.category)}-BuzzLine`
updatepage();
},[])


const handlePrevClick=()=>{
 setPage(page - 1)
 console.log(page);
 updatepage() 
}


const handleNextClick=()=>{
  setPage(page + 1)
  console.log(page);
  updatepage()
}





    return (

       
      
       <div className="container ">

        <h2 className='text-center' style={{marginTop:'90px'}}>BuzzLine - Top Headlines on {capitalizeFirstLetter(props.category)}.</h2>
        {loading && <Spinner/>} 
       
        <div className="row">
              {!loading &&  articles.map((element)=>{
          return  <div className="column col-md-4" key={element.url}>
                  <NewsItem   title={element.title?element.title:""} source={element.source.name} discription={element.description?element.description:""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt}/>
        </div>
         
        })}

        <div className="container d-flex justify-content-between my-3 ">
        <button type="button" disabled={page<=1} onClick={handlePrevClick} className="btn btn-dark">&larr; Previous</button>
        <button type="button" disabled={page + 1 > Math.ceil(totalResults/20)} onClick={handleNextClick} className="btn btn-dark">Next &rarr;</button>
        </div>
        </div>
        
      </div>
    
    )
  }


News.defaultProps=
{
  country:"in",
  pageSize:6,
  category:'general',
}

News.propTypes=
{
  country:propTypes.string,
  pageSize:propTypes.number,
  category:propTypes.string,
}


export default News