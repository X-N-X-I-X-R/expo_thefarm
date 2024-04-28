// working with martial-ui and react-router-dom to create a layout for the farm app
// sidebar {profile, dashboard , posts ,news ,stockmarket data , cummonity ideas , logout} 
// navbar {logo , search bar , notification , messages ,settings ,home}
// footer {contact , about , terms and conditions , privacy policy}
// main content {dashboard , posts , news , stockmarket data , cummonity ideas}

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Container } from '@material-ui/core';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Dashboard from './components/Dashboard';
import Posts from './components/Posts';
import News from './components/News';
import StockMarketData from './components/StockMarketData';
import CommunityIdeas from './components/CommunityIdeas';
import Profile from './components/Profile';
import Login from './components/Login';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';

const layout = () => {
  return (
    <Router>
      <Container>
        <Navbar />
        <Sidebar />
        <Switch>
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/posts" component={Posts} />
          <Route path="/news" component={News} />
          <Route path="/stockmarket" component={StockMarketData} />
          <Route path="/community" component={CommunityIdeas} />
          <Route path="/profile" component={Profile} />
          <Route path="/login" component={Login} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/" component={Home} />
        </Switch>
        <Footer />
      </Container>
    </Router>
  );
}

export default layout;
// Path: the-farm-101/src/components/About.js