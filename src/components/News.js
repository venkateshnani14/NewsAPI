import React, { Component } from 'react'
import Newscomp from './Newscomp'
import PropTypes from 'prop-types'
import Gift from './gift'

export default class News extends Component {
    constructor(props) {
        super(props)
        this.state = {
            articles: [],
            page: 1,
            language: 'en',
            loading: false
        }
        let categ = this.props.category
        document.title = `NewsAPI - ${categ[0].toUpperCase() + categ.slice(1)}`
    }
    async firstfunc() {
        const url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=26fd714f5d46482b924a665ce471ef76&page=${this.state.page}&pageSize=12&language=${this.state.language}`;
        this.setState({ loading: true });
        let data = await fetch(url);
        let fetched_data = await data.json();
        console.log(fetched_data, 'API FETCH SUCCESS');
        this.setState({ articles: fetched_data.articles, totalResults: fetched_data.totalResults, loading: false })
    }
    async componentDidMount() {
        this.setState({ page: this.state.page });
        this.firstfunc();
    }

    Previous = async () => {
        this.setState({ page: this.state.page - 1 });
        this.firstfunc();
    }
    Next = async () => {
        if (this.state.page + 1 > Math.ceil(this.state.totalResults / 20)) {
        }
        else {
            this.setState({ page: this.state.page + 1 },()=>{this.firstfunc()});
        }
    }

    static propTypes = {
        category: PropTypes.string
    }

    render() {
        let { title, description, urlToImage, url } = this.props;
        let categ = this.props.category
        return (
            <div id='news_main' className='container row mt-0'>
                <div className='d-flex justify-content-center'>
                    {this.state.loading && <Gift />}
                </div>
                {!this.state.loading && this.state.articles.map((elements) => {
                    return <div id='newsitem_div' className='container col-sm-12 col-lg-4 my-5 justify-content-center d-flex'>
                        <Newscomp title={elements.title ? elements.title.slice(0, 46) : 'NO-TITLE'} description={elements.description} urlToImage={elements.urlToImage ? elements.urlToImage : ''} url={elements.url}
                            author={elements.author ? elements.author : 'Unknown'} date={elements.publishedAt ? elements.publishedAt : 'Unknown author'} name={elements.source.name} />
                    </div>
                })}
                <div className='container d-flex justify-content-between mt-5 mb-5'>
                    <button disabled={this.state.page === 1} className='btn btn-outline-primary btn-sm' onClick={this.Previous}>❮❮ Previous page</button>
                    <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / 20)} className='btn btn-outline-primary btn-sm' onClick={this.Next}>Next page ❯❯</button>
                </div>
            </div>
        )
    }
}
