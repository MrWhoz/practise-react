import React, {Component} from 'react';
import $ from 'jquery';
import {Nav, NavItem} from 'react-bootstrap';

 class NavBar extends Component{
     constructor(props){
         super(props);
         this.handleSelect = this.handleSelect.bind();
     }
    handleSelect(selectedKey) {
        alert(`selected ${selectedKey}`);
      };
      render(){
          return(
            <Nav bsStyle="pills" activeKey={1} onSelect={this.handleSelect}>
            <NavItem eventKey={1} href="/home">NavItem 1 content</NavItem>
            <NavItem eventKey={2} title="Item">NavItem 2 content</NavItem>
            <NavItem eventKey={3} disabled>NavItem 3 content</NavItem>
          </Nav>
          )
      }
 }

export default NavBar;