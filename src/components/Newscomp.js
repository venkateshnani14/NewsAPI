import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Newscomp extends Component {
    // constructor(){
    // super();
    // console.log('consoled constructor')
    // this.articles = [
    // {
    // "source": {
    // "id": "bbc-news",
    // "name": "BBC News"
    // },
    // "author": "BBC Sport",
    // "title": "Premier League: Champions Man City 1-0 Chelsea - Alvarez gives champions lead",
    // "description": "Follow live text updates as West Ham host Leeds plus two more fixtures from the Premier League including Man City v Chelsea.",
    // "url": "http://www.bbc.co.uk/sport/live/football/65448263",
    // "urlToImage": "https:////m.files.bbci.co.uk/modules/bbc-morph-sport-seo-meta/1.23.3/images/bbc-sport-logo.png",
    // "publishedAt": "2023-05-21T15:22:22.0364922Z",
    // "content": "Leeds boss Sam Allardyce, speaking to Sky Sports: \"Obviously very disappointing. There were lots of things that suggested we had opportunities to get three points in the first half but unfortunately … [+1437 chars]"
    // },
    // {
    // "source": {
    // "id": "bbc-news",
    // "name": "BBC News"
    // },
    // "author": "BBC News",
    // "title": "Kurt Cobain: Guitar smashed by Nirvana frontman sells for nearly $600,000",
    // "description": "The black Stratocaster destroyed by Nirvana's frontman is signed by all three band members.",
    // "url": "http://www.bbc.co.uk/news/world-us-canada-65664330",
    // "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/1622D/production/_129796609_gettyimages-1255060925.jpg",
    // "publishedAt": "2023-05-21T14:52:20.2064724Z",
    // "content": "A guitar smashed by Kurt Cobain, the late frontman of US rock band Nirvana, has sold at auction for nearly $600,000 (£480,000).\r\nThe busted black Fender Stratocaster had been expected to sell for a t… [+1672 chars]"
    // },
    // {
    // "source": {
    // "id": "bbc-news",
    // "name": "BBC News"
    // },
    // "author": "BBC News",
    // "title": "Bakhmut: City 'not occupied' by Russia, says defiant Zelensky",
    // "description": "Russia's Wagner group claims to have taken full control of the city after a bloody months-long battle.",
    // "url": "http://www.bbc.co.uk/news/world-europe-65662563",
    // "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/4041/production/_129794461_d8f6a84ca3217140eeb81316862142919d8ca5440_85_6187_34822000x1125.jpg",
    // "publishedAt": "2023-05-21T14:52:18.6772765Z",
    // "content": "A defiant Volodymyr Zelensky has insisted Bakhmut \"is not occupied\" by Russia after a Moscow-backed mercenary group had claimed control.\r\nUkraine's president was speaking during a scene-stealing visi… [+4309 chars]"
    // }
    // ]

    // this.state = {
    // articles:this.articles,
    // newsurl:this.newsurl
    // }
    // }

    render() {
        let { title, description, urlToImage ,author , date , name} = this.props
        return (
            <div>
                <div className="card" style={{ width: "18rem", background:'#031425' , height: "14rem", margin: "0px 0px 10rem 0%" }}>
                    <img style={{ width: '252px', height: '141px' }} className="card-img-top" src={this.props.urlToImage?this.props.urlToImage:'https://cdn.pixabay.com/photo/2016/11/21/11/25/blue-1844759_640.jpg'} />
                    <div style={{background:'#031425'}} className="card-body">
                        <h5 className="card-title text-light">{this.props.title}...</h5>
                        <p id='description_para' className="card-text text-secondary">{this.props.description?this.props.description.slice(0, 90) : 'NO-DESCRIPTION'}...</p>
                        <p style={{color:'#383a3b'}}><i>Published by {author} on {new Date(date).toGMTString()}</i></p>
                        <a target='blank' href={this.props.url} className="btn btn-warning text-dark"><b>Read more</b></a>
                    </div>
                </div>
            </div>
        )
    }
}
