import React, { Component } from 'react'
import NavBar from './component/NavBar'
import News from './component/News'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
export class App extends Component {
  pageSize = 10;
  apiKey = process.env.REACT_APP_NEWS_API;
  // apiKey = "7c06ca7a79824cd082909d5c508a102f";

  state = {
    progress:0
  }
  setProgress = (progress)=> {
     this.setState({ progress: progress });
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
            <NavBar />
            <Routes>

          <Route path='/' element={<News setProgress={this.setProgress} apiKey={this.apiKey}  key = "home" pageSize={this.pageSize} country="us" category="general"/>} />
          <Route exact path='/business' element={<News setProgress={this.setProgress} apiKey={this.apiKey}   key = "business" pageSize={this.pageSize} country="us" category="business" />} />
          <Route exact path='/general' element={<News setProgress={this.setProgress} apiKey={this.apiKey}   key = "general" pageSize={this.pageSize} country="us" category="general"/>} />
          <Route exact path='/entertainment' element={<News setProgress={this.setProgress} apiKey={this.apiKey}  key = "entertainment" pageSize={this.pageSize} country="us" category="entertainment"/>} />
          <Route exact path='/health' element={<News setProgress={this.setProgress} apiKey={this.apiKey}  key = "health" pageSize={this.pageSize} country="us" category="health"/>} />
          <Route  path='/sports' element={<News setProgress={this.setProgress} apiKey={this.apiKey}  key = "sports" pageSize={this.pageSize} country="us" category="sports"/>} />
          <Route exact path='/science' element={<News setProgress={this.setProgress} apiKey={this.apiKey}  key = "science" pageSize={this.pageSize} country="us" category="science"/>} />
          <Route exact path='/technology' element={<News setProgress={this.setProgress} apiKey={this.apiKey}  key = "technology" pageSize={this.pageSize} country="us" category="technology"/>} />
            
            </Routes>
        </BrowserRouter>
      </>
    )
  }
}

export default App
