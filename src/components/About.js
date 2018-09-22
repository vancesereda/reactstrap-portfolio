import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap'
import './About.css'
class About extends Component {
    render() {
        return (
<div className=" main bg-top-div text-center">
<Container>
<Row>
 
    <Col xs={{size:10, offset:1}} lg={{size:8, offset:2}}>
        <h1>About Me</h1>
        
        <img className="img-responsive img" src="/vance.jpg" alt="avatar" />
            
            <p>I'm a chemical engineer (BS ChemE '18, Univ. of Washington) turned software developer, currently living in Seattle, WA. 
           I'm passionate about web development and data engineering.
           
           
            </p>
    </Col>
    

    
            
    </Row> 

</Container>
</div>
        );
    }
}

export default About;


{/*I'm a chemical engineer turned software developer.
I enjoy front end development (React) and data engineering (Python, Pandas and Jupyter Lab). </p> */}