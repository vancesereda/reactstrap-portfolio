import React, { Component, Fragment} from 'react';
import { Button, Jumbotron } from 'reactstrap';

class QuoteMachine extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quote: {
                content: '',
                link: '',
                title: ''
            },
            hasQuote: false
          
        },
        this.END_POINT = 'https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1'
    }

    getRandomQuote = () => {
        // const url = 'https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1';
        fetch(this.END_POINT, {cache: "no-store"})
            .then(response => response.json())
            .then(data => {
                console.log(data);
                
                if (data[0].content && data[0].title && data[0].link) {
                    let { quote } = this.state;
                    let quoteData = data[0];
                    quote.content = quoteData.content;
                    quote.link = quoteData.link;
                    quote.title = quoteData.title;
                    this.setState({ quote }, () => {
                        if (this.state.hasQuote === false) {
                            this.setState({ hasQuote: true })
                        }
                    })
                } else {
                    return console.error("No Quote found, 404")
                }
            })
    }

    renderQuote = () => {
        
        const { hasQuote } = this.state;

        const  { title, content, link } = this.state.quote;
        const quoteContent = content
                                .replace(/&#8220;/g,'"')
                                .replace(/&#8221;/g,'"')
                                .replace(/&#8217;/g, "'")
                                .replace(/&#8211;/g, "-")
                                .replace(/\\n/g, '')
                                .replace(/<[^>]*>/g, '')
                                
        const titleContent = title
                    .replace(/&#8221;/g,'"')
                    .replace(/&#8217;/g, "'")
                    .replace(/&#8211;/g, "-")
        return (
            <div>
                <h2>{titleContent}</h2>
                <p className = "lead"> {quoteContent}</p>
            <br />
            </div>
            
        )

    }

    /*shareOnTwitter = (text, url) => {
            // Opens a pop-up with twitter sharing dialog

        window.open('http://twitter.com/share?url='+encodeURIComponent(url)+'&text='+encodeURIComponent(text), '', 'left=0,top=0,width=550,height=450,personalbar=0,toolbar=0,scrollbars=0,resizable=0');
    }*/


    render() {
        const { hasQuote } = this.state;
        return (
            <div className="padding">
                <h2>Quote Machine</h2>
                <div>
                    <Jumbotron>
                        <br />
                        {hasQuote === true ? 
                            this.renderQuote() : 'no quote yet'}
                        <br />
                        <Button color="primary" onClick={this.getRandomQuote}>
                        New Quote
                        </Button>
                    </Jumbotron>
                </div>
            </div>
                );
    }
}

export default QuoteMachine;
