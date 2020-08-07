import React from 'react';
import PropTypes from 'prop-types';

import './index.css';

class CardInfo extends React.PureComponent {
  render() {
    const { title, content } = this.props;

    return (
      <div className="card-info">
        <h3 className="card-title">
          { title }
        </h3>

        <p className="card-content">
          { content }
        </p>
      </div>
    );
  }
}

CardInfo.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default CardInfo;
