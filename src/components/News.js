import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {

    constructor(){
        super();
        this.state = {
            articles : [],
            loading : false,
            page : 1
        }
    }

    async componentDidMount(){
        let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=c6bcdcd9b1924d71a152a54cc34b1aa8&page=1";
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({articles: parsedData.articles});
    }

    handlePrevClick = async ()=> {
        
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=c6bcdcd9b1924d71a152a54cc34b1aa8&page=${this.state.page-1}`;
        let data = await fetch(url);
        let parsedData = await data.json();

        this.setState({
            page: this.state.page-1,
            articles: parsedData.articles

        })
    }

    handleNextClick = async ()=> {
        


        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=c6bcdcd9b1924d71a152a54cc34b1aa8&page=${this.state.page+1}`;
        let data = await fetch(url);
        let parsedData = await data.json();

        this.setState({
            page: this.state.page+1,
            articles: parsedData.articles

        })
        
    }

    render() {
        return (
            <>
            <div className="container my-3 d-flex justify-content-center ">
                    <h2 className="font-weight-bold display-4">Today's Headlines</h2>
            </div>

            <div className="row" >
                
                {this.state.articles.map((element)=>{
                    return <div className="col-md-4 d-flex justify-content-center" key={element.url}>
                    <NewsItem title={element.title!=null?element.title:" "} description={element.description!=null?element.description:" "} imageUrl={element.urlToImage} newsUrl={element.url}/>
                </div>
                })}
                
                <div className="container d-flex justify-content-between">
                    
                    <button type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
                    <button type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
                </div>

                
            </div>
            </>
        )
    }
}

export default News
