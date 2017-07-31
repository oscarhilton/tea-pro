import React, { Component } from 'react';
import { connect } from 'react-redux';

import TeasList from './TeasList';

class Teas extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <p>Teas component.</p>
        <TeasList />
      </div>
    );
  }
}

export default connect()(Teas);
