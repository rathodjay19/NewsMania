import React, { Component } from 'react'

export class NewsItem extends Component {
render() {
     
    let { title, description ,imageUrl} = this.props;
    return (
      <div>
            <div className="card my-2" style={{width: "18rem"}}>
                <img className="card-img-top" src={imageUrl} />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    
                    <a href="/newsdetails" className="btn btn-sm btn-primary">Click to see more</a>
                </div>
            </div>
      </div>
    )
  }
}

export default NewsItem
