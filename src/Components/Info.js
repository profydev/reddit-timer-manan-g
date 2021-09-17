import React from 'react';
import PropTypes from 'prop-types';

function Info({ children }) {
  return <div>{children}</div>;
}

Info.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Info;
