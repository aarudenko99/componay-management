import React from 'react';
import PropTypes from 'prop-types';
import RouteCard from '../RouteCard';

const Sync = ({ isDashboard }) => {
  return (
    <>
      <RouteCard title="Sync" isDashboard={isDashboard} />
    </>
  );
};

Sync.defaultProps = {
  isDashboard: false,
};

Sync.propTypes = {
  isDashboard: PropTypes.bool,
};

export default Sync;
