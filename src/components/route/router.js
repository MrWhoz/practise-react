import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import App from '../../App';
import Dashboard from '../dashboard/dashboard';

const Root = () => {
    return (
        
    <Router>
        <div>
        <Link to="/dashBoard">Dashboard</Link>
      <Route path="/" component={App} />
      <Route path="/dashboard" component={Dashboard}/>
      </div>
    </Router>
    
    )
}

export default Root;
