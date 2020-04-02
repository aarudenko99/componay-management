import React from 'react';
import PropTypes from 'prop-types';
import RouteCard from '../RouteCard';
import DepartmentCard from '../DepartmentCard';

const Facilities = ({ isDashboard }) => {
  return (
    <RouteCard title="Department Map" isDashboard={isDashboard}>
      <DepartmentCard />
    </RouteCard>
  );
};

Facilities.defaultProps = {
  isDashboard: false,
};

Facilities.propTypes = {
  isDashboard: PropTypes.bool,
};

export default Facilities;
