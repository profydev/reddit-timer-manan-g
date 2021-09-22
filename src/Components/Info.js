import React from 'react';
import PropTypes from 'prop-types';

function Info({ children, id }) {
  return <div id={id}>{children}</div>;
}

Info.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.string.isRequired,
};

export default Info;
