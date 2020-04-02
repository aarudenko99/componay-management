import React from 'react';
import PropTypes from 'prop-types';
import RouteCard from '../RouteCard';

const OrgChart = ({ isDashboard }) => {
  return (
    <>
      <RouteCard title="TechCore" isDashboard={isDashboard} />
    </>
  );
};

OrgChart.defaultProps = {
  isDashboard: false,
};

OrgChart.propTypes = {
  isDashboard: PropTypes.bool,
};

export default OrgChart;
