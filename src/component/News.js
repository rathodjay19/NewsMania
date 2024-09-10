import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'

export class News extends Component {
    

    constructor(){
        super();    
        console.log('Hello I am contructor from news component');

        this.state = {
            articles: [],
            loading: false,
            page:1
        } 
    }

    async componentDidMount(){
        console.log("This will run after render is done !");
        
        let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=7c06ca7a79824cd082909d5c508a102f&page=1&pagesize=${this.props.pageSize}`;
        
        let data = await fetch(url);
        let parsedData = await data.json();
        // console.log(parsedData);

        this.setState({
            articles: parsedData.articles ,
            totalResults:parsedData.totalResults
        });
    }

    handleNextClick = async () => {
        let url = `https://newsapi.org/v2/everything?q=keyword&apiKey=7c06ca7a79824cd082909d5c508a102f&page=${this.state.page + 1}&pagesize=${this.props.pageSize}`;
        
        this.setState({ loading: true });

        let data = await fetch(url);
        let parsedData = await data.json();
        // console.log(parsedData);

        this.setState({
            page: this.state.page+1,
            articles: parsedData.articles ,
            loading: false
        });
        // Scroll to the top of the page after the update
        window.scrollTo(0, 0);
    }
    handlePrevClick = async () => {
        let url = `https://newsapi.org/v2/everything?q=keyword&apiKey=7c06ca7a79824cd082909d5c508a102f&page=${this.state.page - 1}&pagesize=${this.props.pageSize}`;
        
        let data = await fetch(url);
        let parsedData = await data.json();
        // console.log(parsedData);

        
        this.setState({ loading: true });

        this.setState({
            page: this.state.page-1,
            articles: parsedData.articles ,
            loading: false
            
        });
        // Scroll to the top of the page after the update
        window.scrollTo(0, 0);
    }

  render() {
    return (
        <div className="container">
            <h1 className="text-center my-3">NewsMania- Read top current news here</h1>

            {this.state.loading && <Spinner />}
            
                <div className="row my-3">
                    {/* {this.state.articles.map(({ title:newname, description, urlToImage ,url}) => { */}
                    {/* {this.state.articles.map((element,index) => { */}
                    
                    {!this.state.loading && this.state.articles.map((element) => {
                        return <div className="col-md-4" key={element.url}>
                            <NewsItem title={element.title} description={element.description} imageUrl={!element.urlToImage ? "https://loremflickr.com/200/200?random=3":element.urlToImage}
                                newsUrl={element.url} />   
                       </div>
                    })} 
                </div>
            
                <div className="container d-flex justify-content-between">
                    <button disabled={this.state.page<=1} type="button" class="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
                    <button disabled={this.state.page+1 > Math.ceil(this.state.totalResults/this.props.PageSize)} type="button" class="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
                </div>
            </div>

            
    
    )
  }
}

export default News
