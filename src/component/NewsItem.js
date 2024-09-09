import React, { Component } from 'react'

export class NewsItem extends Component {
render() {
     
    let { title, description ,imageUrl ,newsUrl} = this.props;
    return (
      <div>
            <div className="card my-2 h-100" style={{width: "18rem"}}>
                <img className="card-img-top" src={imageUrl} />
                <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    
                    <a href={newsUrl} target="_blank" className="btn btn-sm btn-primary mt-auto">Click to see more</a>
                </div>
            </div>
      </div>
    )
  }
}

export default NewsItem
