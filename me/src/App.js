import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {AppBar, IconButton, Drawer, MenuItem, RaisedButton} from 'material-ui';
import { Button } from 'office-ui-fabric-react/lib/Button';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {open: false};
  };

  handleClickGithub = () => {
    window.open("http://github.com/mysterytony/mysterytony.github.io");
  };

  handleOpenMenu = () => {
    this.setState({open: true});
  };

  handleCloseMenu = () => this.setState({open: false});

  render() {
    return (
      <div className="App">
        <AppBar 
        title="Tony Li" 
        iconElementRight={<IconButton onClick={this.handleClickGithub} iconClassName="fa fa-github"></IconButton>}
        onLeftIconButtonTouchTap={this.handleOpenMenu.bind(this)}/>
        
        <RaisedButton
          label="Open Drawer"
          onClick={this.handleOpenMenu}
        />
        <Button>I am a button.</Button>
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
          
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Drawer
          docked={false}
          width={200}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}>
          <MenuItem onClick={this.handleCloseMenu}>Menu Item</MenuItem>
          <MenuItem onClick={this.handleCloseMenu}>Menu Item 2</MenuItem>
        </Drawer>
      </div>
    );
  }
}

export default App;
