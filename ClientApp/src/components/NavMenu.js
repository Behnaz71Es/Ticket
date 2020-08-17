import React, { Component } from 'react';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import './NavMenu.css';

export class NavMenu extends Component {
  static displayName = NavMenu.name;

  constructor (props) {
    super(props);
      this.ButtonClick = this.ButtonClick.bind(this)

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }
    ButtonClick() {
        fetch('components/InsertTicket', {
            method: "Post",
            body: JSON.stringify({ TicketTopic: 'فروش', Id:"#459664" , RelevantSector:'فروش' }),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
    }
  toggleNavbar () {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render () {
    return (
      <header>
        <Navbar className="navbar-expand-sm bg-dark navbar-toggleable-sm ng-white border-bottom box-shadow mb-3" >
                <Container>
                    <button className=" btn btn-primary navbar-btn" onClick={this.ButtonClick} >ثبت تیکت جدید+</button>
                   
            <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
            <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!this.state.collapsed} navbar>
              <ul className="navbar-nav flex-grow">
                <NavItem>
                                <NavbarBrand className="btn btn-default bg-white" >فیلتر  </NavbarBrand>    
                </NavItem>
                <NavItem>
                                
                                <input type="text" className="form-control bg-dark fa fa-search" placeholder="جستجو تیکت های پشتیبانی"></input>
                </NavItem>
                            <NavItem>
                                <NavbarBrand tag={Link} to='/ShowTicket' className="text-white">همه تیکت ها</NavbarBrand>
                </NavItem>
              </ul>
            </Collapse>
          </Container>
        </Navbar>
      </header>
    );
  }
}
