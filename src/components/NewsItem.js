import React, { Component } from 'react';
import noNewsImage from './Images/noNewsImage.JPG'


export class NewsItem extends Component {

    render() {
        let { title, description, imageUrl, newsUrl, source_name, date } = this.props;
        return (
            <div className="my-3">

                <div className="card" style={{width: "18rem"}}>
                    <img className="card-img-top" src={imageUrl==null?noNewsImage:imageUrl} alt=""/>
                        <div className="card-body">
                            <h5 className="card-title"><strong>{title}</strong></h5>
                            <p className="card-text">{description}...</p>
                            <p className="card-text"><small className="text-muted">By {source_name==null? "Unknown" : source_name} on {new Date(date).toLocaleString("en-US", {timeZone: "Asia/Kolkata"})} (IST) </small></p>
                            <a href={newsUrl} target="_blank"  rel="noreferrer" className="btn btn-primary btn-sm">Read more</a>
                        </div>
                </div>

            </div>
        )
    }
}

export default NewsItem
