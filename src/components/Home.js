import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TextFiller from './TextFiller';
import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Col, Container, Jumbotron, Row, Button} from 'reactstrap'

class Home extends Component {
    render() {
        return (
<div className="main">
    <div className="bg-top-div main">
        <Container className="text-center">
            <div>
                <Jumbotron className="jumbotron-container">
                    <h1 className="jumbotron-text display-3 text-center">
                    Front End Web Development</h1>
                    <h2 className="lead jumbotron-text">
                    </h2>
                    <hr className="my-2" />
                    <h2 className="h2 jumbotron-text" style={{'text-align': 'center'}}>
                       {/* <Button color="primary">F</Button>*/}
                       MongoDB | Express | React | Node.js | Python
                       

                    
                        
                        <br />
                    
                        <i className="fa fa-github fa-lg icon-padding" ></i>
                        <i className="fa fa-linkedin fa-lg icon-padding" ></i>
                        </h2>
                        
                    
                         
  
                </Jumbotron>
            </div>
        
        
        
        
        
        {/*<footer style={{'padding':'5vh'}}>Made with React and Reactstrap</footer>*/}
    
        </Container>
    </div>
</div>
        );
    }
}

export default Home;
