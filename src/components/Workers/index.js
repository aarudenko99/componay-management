import React from 'react';
import PropTypes from 'prop-types';
import RouteCard from '../RouteCard';
import WorkerCard from '../WorkerCard';

const Workers = ({ isDashboard }) => {
  return (
    <RouteCard title="TechCore" isDashboard={isDashboard}>
      <WorkerCard />
    </RouteCard>
  );
};

Workers.defaultProps = {
  isDashboard: false,
};

Workers.propTypes = {
  isDashboard: PropTypes.bool,
};

export default Workers;
