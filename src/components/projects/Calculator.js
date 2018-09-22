import React, { Component } from 'react';
import {Button, Container, Col, Input, ButtonGroup , Row} from 'reactstrap';
import './Calculator.css';
import './../Projects.css'




class Calculator extends Component {
  
  constructor(props) {
    super(props)

    this.state = {
      value: null,
      displayValue: '0',
      waitingForOperand: false,
      operator: null
    }
  }


  inputDigit =  (digit) => {
    const {displayValue, waitingForOperand} = this.state



    if (waitingForOperand) {
      this.setState({
        displayValue: String(digit),
        waitingForOperand: false
      })

    } else {

      this.setState({
        displayValue : displayValue === '0' ? String(digit) : displayValue + digit

      })
    }
  } 

  inputDot = () =>  {
    const {displayValue, waitingForOperand} = this.state
    if (displayValue.indexOf('.')=== -1) {
      this.setState({
        displayValue: displayValue + '.',
        waitingForOperand: false
      })
    }
  }

  clearDisplay = () => {
    
    this.setState({
      displayValue: '0',
      waitingForOperand: false,
      value: 0

    })
  }

  toggleSign = () => {
    const {displayValue} = this.state;
    if (displayValue !== '0')
      this.setState({
        displayValue: displayValue.charAt(0) === ('-') ? displayValue.substr(1) : '-' + displayValue
      })
  }
  

  inputPercent = () => {
    const {displayValue} = this.state
    const value = parseFloat(displayValue)
    this.setState ( {
      displayValue: String(value / 100)
    })
  }
  performOperation = (nextOperator) => {
    const {displayValue, operator, value } = this.state
    
    const nextValue = parseFloat(displayValue)
    const operations = {
      '/': (prevValue, nextValue) => prevValue / nextValue,
      '*': (prevValue, nextValue) => prevValue * nextValue,
      '+': (prevValue, nextValue) => prevValue + nextValue,
      '-': (prevValue, nextValue) => prevValue - nextValue,
      '=': (prevValue, nextValue) => nextValue
    }
    if (value==null) {
      this.setState({
        value:nextValue
      })
    } else if (operator) {
      const currentValue = value || 0
      const computedValue = operations[operator](currentValue, nextValue)
    
      this.setState({
         value: computedValue,
         displayValue : String(computedValue)
      })
    }
    //const prevValue = ???
    
    //const computedValue = operations[operator](prevValue,nextValue)
    this.setState({
      waitingForOperand : true,
      operator: nextOperator
    })
  }
  render() {
    const { displayValue } = this.state;
    return (
    <div className="project-border text-center">
      <h3>Calculator</h3>
      <Container className="calc-resize" >
        
        <Row>
      
          <Input xs="12" lg="12" value={displayValue} style={{'marginBottom': '10px'}} className=""/>
          <Col xs="3" className="padding-0"> 
            <Button  outline block className=""  color="primary" onClick={()=> this.clearDisplay()}>AC</Button>
            <Button  outline block className=""  color="secondary" onClick={()=> this.inputDigit(7)}>7</Button>
            <Button  outline block className=""  color="secondary" onClick={()=> this.inputDigit(4)} >4</Button>
            <Button  outline block className=""  color="secondary" onClick={()=> this.inputDigit(1)}>1</Button>
            <Button  outline block className=""  color="secondary" onClick={()=> this.toggleSign()}>±</Button>  
          </Col>
          <Col xs="3" className="padding-0"> 
            <Button  outline block className=""  color="secondary">()</Button>
            <Button  outline block className=""  color="secondary" onClick={()=> this.inputDigit(8)}>8</Button>
            <Button  outline block className=""  color="secondary" onClick={()=> this.inputDigit(5)}>5</Button>
            <Button  outline block className=""  color="secondary" onClick={()=> this.inputDigit(2)}>2</Button>
            <Button  outline block className=""  color="secondary" onClick={()=> this.inputDigit(0)}>0</Button>  
          </Col>
          <Col xs="3" className="padding-0"> 
            <Button  outline block className=""  color="secondary" onClick={()=> this.inputPercent()}>%</Button>
            <Button  outline block className=""  color="secondary" onClick={()=> this.inputDigit(9)}>9</Button>
            <Button  outline block className=""  color="secondary" onClick={()=> this.inputDigit(6)}>6</Button>
            <Button  outline block className=""  color="secondary" onClick={()=> this.inputDigit(3)}>3</Button>
            <Button  outline block className=""  color="secondary" onClick={()=> this.inputDot()}>.</Button>    
          </Col>
          <Col xs="3" className="padding-0"> 
            <Button  outline block className=""  color="secondary" onClick={()=> this.performOperation('/')}>&divide;</Button>
            <Button  outline block className=""  color="secondary" onClick={()=> this.performOperation('*')}>&times;</Button>
            <Button  outline block className=""  color="secondary" onClick={()=> this.performOperation('-')}>-</Button>
            <Button  outline block className=""  color="secondary" onClick={()=> this.performOperation('+')}>+</Button>
            <Button  block className="" color="primary" onClick={()=> this.performOperation('=')}>=</Button>  
          </Col>
        </Row>
        
        

    

      </Container>
    </div>
    );
  }
}

export default Calculator;




        
/*<Col xs="3" className="padding-0"><Button block>className="".col</Button>
<Button block>className="".col</Button>
<Button block>className="".col</Button>
<Button block>className="".col</Button></Col>
<Col xs="3"><Button block>className=""Piss</Button></Col>*/














/*<Col className="padding-0"> 
        <Button     size="lg"  outline block className=""color="secondary">()</Button>
        <Button     size="lg"  outline block className=""color="secondary" onClick={()=> this.inputDigit(8)}>8</Button>

        <Button     size="lg"  outline block className=""color="secondary" onClick={()=> this.inputDigit(2)}>2</Button>
        <Button     size="lg"  outline block className=""color="secondary" onClick={()=> this.inputDigit(0)}>0</Button>  
      
       
        <Button     size="lg"  outline block className=""color="secondary" onClick={()=> this.inputPercent()}>%</Button>
        <Button     size="lg"  outline block className=""color="secondary" onClick={()=> this.inputDigit(9)}>9</Button>
        
        <Button     size="lg"  outline block className=""color="secondary" onClick={()=> this.inputDigit(12)}>12</Button>
        <Button     size="lg"  outline block className=""color="secondary" onClick={()=> this.inputDot()}>.</Button>    
      
       
        <Button     size="lg"  outline block className=""color="secondary" onClick={()=> this.performOperation('/')}>&divide;</Button>
        <Button     size="lg"  outline block className=""color="secondary" onClick={()=> this.performOperation('*')}>&times;</Button>
        
        <Button     size="lg"  outline block className=""color="secondary" onClick={()=> this.performOperation('+')}>+</Button>
        <Button color="primary" onClick={()=> this.performOperation('=')}>=</Button>  
      


      <Button     size="lg"  outline block className=""color="secondary" onClick={()=> this.inputDigit(1)}>1</Button>
      <Button     size="lg"  outline block className=""color="secondary" onClick={()=> this.toggleSign()}>±</Button>  
 
*/



