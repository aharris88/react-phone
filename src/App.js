import React, {Component} from 'react';
import Phone from './Phone';
import './App.css';
import {IntlProvider} from 'react-intl';

class App extends Component {
  state = {signalStrength: 0};

  handleLockClick = () => {
    this.phone.handleLockClick();
  };

  handleSignalChange = event => {
    this.setState({...this.state, signalStrength: Number(event.target.value)});
  };

  render() {
    return (
      <IntlProvider locale="en">
        <div className="App">
          <div
            className="App__Button App__Button--Lock"
            onClick={this.handleLockClick}
          />
          <div className="App__Settings">
            <div>
              <p>Signal</p>
              <input
                type="text"
                value={this.state.signalStrength}
                onChange={this.handleSignalChange}
              />
            </div>
          </div>
          <Phone
            signalStrength={this.state.signalStrength}
            ref={ref => this.phone = ref}
          >
            {this.props.children}
          </Phone>
        </div>
      </IntlProvider>
    );
  }
}

export default App;

