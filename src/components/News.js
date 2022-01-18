import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types';


export class News extends Component {

    static defaultProps = {
        country : 'in',
        pageSize : 9,
        category : 'general',
    }
    static propTypes = {
        country : PropTypes.string,
        pageSize : PropTypes.number,
        category : PropTypes.string,
    }

  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }

  async updateNews(){
    this.setState({ loading: true });
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=c6bcdcd9b1924d71a152a54cc34b1aa8&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
  }

  async componentDidMount() {
    this.updateNews();
  }

  handlePrevClick = async () => {
    this.setState({page : this.state.page-1});
    this.updateNews();
  };

  handleNextClick = async () => {
    this.setState({page : this.state.page+1});
    this.updateNews();
  };

  render() {
    return (
      <>
        <div className="justify-content-center">
          <div className="container my-3 d-flex justify-content-center ">
            <h2
              className="font-weight-bold display-4 text-light"
              style={{ margin: "35px 0px" }}
            >
              Today's Headlines
            </h2>
          </div>

          {this.state.loading && <Spinner />}

          <div className="row">
            {!this.state.loading &&
              this.state.articles.map((element) => {
                return (
                  <div
                    className="col-md-4 d-flex justify-content-center"
                    key={element.url}
                  >
                    <NewsItem
                      title={element.title != null ? element.title : " "}
                      description={
                        element.description != null
                          ? element.description
                          : " (Click Below to read this news) "
                      }
                      imageUrl={element.urlToImage}
                      newsUrl={element.url}
                      author={element.source.name}
                      date={element.publishedAt}
                    />
                  </div>
                );
              })}

            <div className="container d-flex justify-content-between">
              <button
                type="button"
                className={`my-3 btn btn-danger ${
                  this.state.page <= 1 ? "invisible" : "visible"
                }`}
                onClick={this.handlePrevClick}
              >
                &larr; Previous
              </button>
              <button
                type="button"
                className={`my-3 btn btn-danger ${
                  this.state.page + 1 >
                  Math.ceil(this.state.totalResults / this.props.pageSize)
                    ? "invisible"
                    : "visible"
                }`}
                onClick={this.handleNextClick}
              >
                Next &rarr;
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default News;
