import React, { Component } from 'react';
import { connect } from 'react-redux';

import TeaCard from './TeaCard';

class TeasList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const teas = this.props.teas;
    return (
      <ul>
        {Object.values(teas).map(tea =>
          <li className="list-group-item" key={tea.title}>
            <TeaCard tea={tea} />
          </li>
        )}
      </ul>
    );
  }
}

function mapStateToProps({ teas }) {
  return { teas };
}

export default connect(mapStateToProps)(TeasList);
