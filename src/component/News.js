import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    articles=[
        {
            "source": {
            "id": null,
            "name": "MacRumors"
            },
            "author": "Hartley Charlton",
            "title": "macOS Sequoia Release Likely to Be the Earliest in Years",
            "description": "macOS Sequoia will be one of the earliest new macOS launches in over a decade, likely releasing within as little as just a week. \n\n\n\n\n\nInternal Apple documentation obtained by MacRumors suggests that macOS 15.0 Sequoia will be officially released to the publi…",
            "url": "https://www.macrumors.com/2024/09/08/macos-sequoia-earliest-release-in-years/",
            "urlToImage": "https://images.macrumors.com/t/xGhGQgXH5CxiUkPdRpa21SPEVQA=/1600x/article-new/2024/06/sequoia.jpg",
            "publishedAt": "2024-09-08T09:14:55Z",
            "content": "macOS Sequoia will be one of the earliest new macOS launches in over a decade, likely releasing within as little as just a week. \r\nInternal Apple documentation obtained by MacRumors suggests that mac… [+1828 chars]"
        },
        {
            "source": {
            "id": "business-insider",
            "name": "Business Insider"
            },
            "author": "Jordan Hart",
            "title": "The thing I'm most excited to see from Apple's big 'Glowtime' event",
            "description": "A new gold iPhone 16 Pro will generate buzz for Apple, Bloomberg's Mark Gurman predicts. I'm excited to see the latest take on a classic color.",
            "url": "https://www.businessinsider.com/apple-new-gold-iphone-product-im-most-excited-by-glowtime-2024-9",
            "urlToImage": "https://i.insider.com/66db362c5444ffafa7634012?width=1200&format=jpeg",
            "publishedAt": "2024-09-08T09:22:02Z",
            "content": "I'm already feeling excited about Monday's launch event.Justin Sullivan/Getty Images\r\n<ul><li>Apple's launch event on Monday will unveil the new gold iPhone 16 Pro models.</li><li>Bloomberg's Mark Gu… [+1977 chars]"
        },
        {
            "source": {
            "id": null,
            "name": "heise online"
            },
            "author": "Stefan Krempl",
            "title": "Überwachung: Deutschland fragt europaweit die meisten Nutzerdaten ab",
            "description": "Deutsche Behörden haben Apple, Meta, Google und Microsoft zwischen 2013 und 2022 aufgefordert, Daten zu 709.400 Konten offenzulegen. Das ist europaweite Spitze.",
            "url": "https://www.heise.de/news/Ueberwachung-Deutschland-fragt-europaweit-die-meisten-Nutzerdaten-ab-9860933.html",
            "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/4/6/6/5/4/4/7/Auge-c0db25d38e82fccf.jpeg",
            "publishedAt": "2024-09-08T08:19:00Z",
            "content": "Deutschland ist Europameister bei der Bestandsdatenabfrage bei großen Tech-Unternehmen. Über einen Zeitraum von zehn Jahren forderten deutsche Behörden seit 2013 Nutzerinformationen zu 709.400 Konten… [+2735 chars]"
        }
    ]

    constructor(){
        super();    
        console.log('Hello I am contructor from news component');

        this.state = {
            articles: this.articles,
            loading: false
        } 
    }


  render() {
    return (
      <div>
            <div className="container">
                <h2>NewsMania- Read top current news here</h2>

                <div className="row">
                    {/* {this.state.articles.map(({ title:newname, description, urlToImage ,url}) => { */}
                    {/* {this.state.articles.map((element,index) => { */}
                    {this.state.articles.map((element) => {
                        return <div className="col-md-4" key={element.url}>
                        <NewsItem title={element.title} description={element.description}  imageUrl={element.urlToImage} />   
                       </div>
                    })}
                    
                </div>
            </div>

            
            <NewsItem />
           
            

      </div>
    )
  }
}

export default News
