import React, { Component } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';

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
        
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=c6bcdcd9b1924d71a152a54cc34b1aa8&page=1&pageSize=${this.props.pageSize}`;
        this.setState({loading : true});
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({articles: parsedData.articles, 
                       totalResults: parsedData.totalResults,
                       loading : false});
    }

    handlePrevClick = async ()=> {
        
        this.setState({loading : true});
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=c6bcdcd9b1924d71a152a54cc34b1aa8&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        let parsedData = await data.json();

        this.setState({
            page: this.state.page-1,
            articles: parsedData.articles,
            loading : false
        })
    }

    handleNextClick = async ()=> {

        this.setState({loading : true});
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=c6bcdcd9b1924d71a152a54cc34b1aa8&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        let parsedData = await data.json();

        this.setState({
            page : this.state.page+1,
            articles : parsedData.articles,
            loading : false

        })
        
    }

    render() {
        return (
            <>
            <div className="container my-3 d-flex justify-content-center ">
                    <h2 className="font-weight-bold display-4 text-light" >Today's Headlines</h2>
            </div>

            {this.state.loading && <Spinner />}

            <div className="row" >
                
                {!this.state.loading && this.state.articles.map((element)=>{
                    return <div className="col-md-4 d-flex justify-content-center" key={element.url}>
                    <NewsItem title={element.title!=null?element.title:" "} description={element.description!=null?element.description:" "} imageUrl={element.urlToImage} newsUrl={element.url}/>
                </div>
                })}
                
                <div className="container d-flex justify-content-between">
                    
                    <button type="button" className={`my-3 btn btn-danger ${this.state.page<=1?'invisible':'visible'}`} onClick={this.handlePrevClick}>&larr; Previous</button>
                    <button type="button" className={`my-3 btn btn-danger ${(this.state.page+1)> (Math.ceil(this.state.totalResults/this.props.pageSize))?'invisible':'visible'}`} onClick={this.handleNextClick}>Next &rarr;</button>
                </div>

                
            </div>
            </>
        )
    }
}

export default News
