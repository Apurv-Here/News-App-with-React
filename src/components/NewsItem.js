import React, { Component } from 'react';
import noNewsImage from './Images/noNewsImage.JPG'


export class NewsItem extends Component {

    render() {
        let { title, description, imageUrl, newsUrl } = this.props;
        return (
            <div className="my-3">

                <div className="card" style={{width: "18rem"}}>
                    <img className="card-img-top" src={imageUrl==null?noNewsImage:imageUrl} alt=""/>
                        <div className="card-body">
                            <h5 className="card-title"><strong>{title}</strong></h5>
                            <p className="card-text">{description}...</p>
                            <a href={newsUrl} target="_blank"  rel="noreferrer" className="btn btn-primary btn-sm">Read more</a>
                        </div>
                </div>

            </div>
        )
    }
}

export default NewsItem
