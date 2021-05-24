import React from 'react';
import { Link } from 'react-router-dom'; 

class NavBar extends React.Component {
    constructor(props) {
      super(props);
      this.logoutUser = this.logoutUser.bind(this);
      this.getLinks = this.getLinks.bind(this);
    }
  
    logoutUser(e) {
        e.preventDefault();
        this.props.logout();
    }
  
    getLinks() {
        if (this.props.loggedIn) {
          return (
              <div>
                  <h1>Hi, {this.props.user} </h1>
                  <button onClick={this.logoutUser}>Logout</button>
              </div>
          );
        } else {
          return (
              <div>
                  <Link to={'/signup'}>Signup</Link>
                  <Link to={'/login'}>Login</Link>
              </div>
          );
        }
    }
  
    render() {
        return (
          <div>
              <h1>Not Sorry</h1>
              { this.getLinks() }
          </div>
        );
    }
}
  
export default NavBar;