  import React, { Component } from 'react'
  import NavBar from './component/NavBar'
  import News from './component/News'
  import { BrowserRouter, Route, Routes } from "react-router-dom";
  import LoadingBar from 'react-top-loading-bar'
import About from './component/About'
import slides from './data/carouselData.json'  

  export class App extends Component {
    pageSize = 10;
    apiKey = process.env.REACT_APP_NEWS_API;
    // apiKey = "7c06ca7a79824cd082909d5c508a102f";

    state = {
      progress: 0,
      country:"us"     // Add country to the state
    }
    setProgress = (progress)=> {
      this.setState({ progress: progress });
    }
    // Function to update country when Dropdown changes
    changeCountry = (country) => {
      this.setState({ country });
    }
    render() {
      return (
        // <div>
        //   <NavBar />
        //   <News setProgress={setProgress}  pageSize={this.pageSize} country="us" category="sport"/>
        // </div>

        <>
          <LoadingBar
            height={3}
          color='#f11946'
          progress={this.state.progress}
        />
          <BrowserRouter>
              <NavBar changeCountry={this.changeCountry} />
              <Routes>

              <Route exact path='/about' key="1" element={<About data={slides} />}/>
              
            <Route path='/' element={<News setProgress={this.setProgress} apiKey={this.apiKey}  key = {`home-${this.state.country}`} pageSize={this.pageSize} country={this.state.country} category="general"/>} />
            <Route exact path='/business' element={<News setProgress={this.setProgress} apiKey={this.apiKey}   key = {`business-${this.state.country}`} pageSize={this.pageSize} country={this.state.country} category="business" />} />
            <Route exact path='/general' element={<News setProgress={this.setProgress} apiKey={this.apiKey}   key = {`general-${this.state.country}`} pageSize={this.pageSize} country={this.state.country} category="general"/>} />
            <Route exact path='/entertainment' element={<News setProgress={this.setProgress} apiKey={this.apiKey}  key = {`entertainment-${this.state.country}`} pageSize={this.pageSize} country={this.state.country} category="entertainment"/>} />
            <Route exact path='/health' element={<News setProgress={this.setProgress} apiKey={this.apiKey}  key = {`health-${this.state.country}`} pageSize={this.pageSize} country={this.state.country} category="health"/>} />
            <Route  path='/sports' element={<News setProgress={this.setProgress} apiKey={this.apiKey}  key = {`sports-${this.state.country}`} pageSize={this.pageSize} country={this.state.country} category="sports"/>} />
            <Route exact path='/science' element={<News setProgress={this.setProgress} apiKey={this.apiKey}  key = {`science-${this.state.country}`} pageSize={this.pageSize} country={this.state.country} category="science"/>} />
            <Route exact path='/technology' element={<News setProgress={this.setProgress} apiKey={this.apiKey}  key = {`technology-${this.state.country}`}pageSize={this.pageSize} country={this.state.country} category="technology"/>} />
              
              </Routes>
          </BrowserRouter>
        </>
      )
    }
  }

  export default App
