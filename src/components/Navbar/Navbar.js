import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem, Modal, ModalHeader, ModalBody, ModalFooter , Button } from 'reactstrap';
import ContactPopover from './ContactPopover'
import Calculator from '../projects/Calculator'
import './navbar.css'
import QuoteMachine from '../projects/QuoteMachine'
import { Link } from 'react-router-dom';

export default class CustomNavbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }
  toggle = () =>  {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }


  render() {
    return (
        <Navbar className="bg-top-div head-font" light expand="md" sticky="top"> 
          <NavbarBrand href="/" className="" >Vance Sereda</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/about">About</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Portfolio
                </DropdownToggle>
                <DropdownMenu right onClick={this.toggle}>
                  <DropdownItem header>
                    React
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem  tag={Link} to="/Projects#Weather">
                   Weather App
                  </DropdownItem>
                  <DropdownItem tag={Link} to="/Projects#QuoteMachine">
                    Random Quote Generator
                  </DropdownItem>
                  <DropdownItem tag={Link} to="/Projects#Calculator">
                   Calculator
                  </DropdownItem>
                  <DropdownItem divider />
                 {/*} <DropdownItem header >

                   React Native

                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                  Music Player App
                  </DropdownItem>
                  <DropdownItem>
                  Weather App
                  </DropdownItem>
    <DropdownItem divider />*/}
                  <DropdownItem header >
                    API / Microservices
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Timestamp 
                  </DropdownItem>
                  <DropdownItem>
                    Request Parser Header 
                  </DropdownItem>
                  <DropdownItem>
                    URL Shortener 
                  </DropdownItem>
                  <DropdownItem>
                    Exercise Tracker
                  </DropdownItem>
                  <DropdownItem>
                   File Metadata 
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem header>
                  Python / Data Science
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    BitMEX Algorithm Trading Bot
                  </DropdownItem>
                  <DropdownItem>
                    Algorithm Backtester
                  </DropdownItem>

                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <NavLink><ContactPopover /></NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
    );
  }

}