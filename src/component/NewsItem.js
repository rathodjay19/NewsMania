import React, { Component } from 'react'

export class NewsItem extends Component {
render() {
     
    let { title, description ,imageUrl ,newsUrl,author,date ,source} = this.props;
    return (
      <div>
        <div className="card my-2 h-100" style={{ width: "18rem" }}>
          
          <span className="position-absolute top-0  translate-middle badge round-pill bg-danger"
            style={{
              left: '90%',
              zIndex:'1'
            }} >{source}</span>
                <img className="card-img-top" src={imageUrl} />
          <div className="card-body d-flex flex-column">
            
                <h5 className="card-title">{title}
              
                </h5>
            
                    <p className="card-text">{description}</p>
                    <p className="class-text">
              <small className="text=muted">By {author?author:"Unknown"} on {new Date(date).toGMTString()}</small>
                    </p>
                    <a href={newsUrl} target="_blank" className="btn btn-sm btn-dark mt-auto">Click to see more</a>
                </div>
            </div>
      </div>
    )
  }
}

export default NewsItem
