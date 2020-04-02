import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ReactTooltip from 'react-tooltip';
import RouteCard from '../RouteCard';
import MapChart from './MapChart';
import DepartmentCard from '../DepartmentCard';

const OrgMap = ({ isDashboard }) => {
  const [content, setContent] = useState('');

  return (
    <RouteCard title="Locations" isDashboard={isDashboard} isContentCentered>
      <MapChart setTooltipContent={setContent} tooltipContent={DepartmentCard} />
      <ReactTooltip type="none" offset={{ top: '-5px' }}>{content}</ReactTooltip>
    </RouteCard>
  );
};

OrgMap.defaultProps = {
  isDashboard: false,
};

OrgMap.propTypes = {
  isDashboard: PropTypes.bool,
};

export default OrgMap;
