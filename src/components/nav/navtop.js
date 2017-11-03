import React, {Component} from 'react';
import $ from 'jquery';
import {Nav, NavItem} from 'react-bootstrap';
import {Link} from 'react-router-dom';

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
              <div>
            
            <Nav bsStyle="pills" activeKey={1} onSelect={this.handleSelect}>
            
            
            <NavItem eventKey={1} href="/home">
            <Link to="/dashBoard">NavItem 2 content</Link> </NavItem>
            <NavItem eventKey={2} title="Item">NavItem 2 content</NavItem>
            <NavItem eventKey={3} disabled>NavItem 3 content</NavItem>
          </Nav>
          </div>
          )
      }
 }

export default NavBar;