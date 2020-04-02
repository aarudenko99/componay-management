import React from 'react';
import PropTypes from 'prop-types';
import { ComposableMap, ZoomableGroup, Geographies, Geography, Marker } from 'react-simple-maps';
import MarkerSVG from './MarkerSVG';

const MapChart = ({ setTooltipContent, tooltipContent }) => {
  const TooltipContent = tooltipContent;
  // @TODO: move this to our CDN
  const geoUrl = 'https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json';
  // @TODO: markers array needs to come from the api
  const markers = [
    { city: 'Tampa', coordinates: [-82.444141, 27.961189], departmentName: 'Customer Service Center', total: 17, employees: 15, contingent: 2 },
    { city: 'Austin', coordinates: [-97.745667, 30.269100], departmentName: 'Marketing Center', total: 23, employees: 19, contingent: 4 },
    { city: 'Boston', coordinates: [-71.062624, 42.360981], departmentName: 'Engineering Center', total: 40, employees: 32, contingent: 8 },
    { city: 'Miami', coordinates: [-80.255292, 25.794990], departmentName: 'Miami MFG', total: 10, employees: 5, contingent: 5 },
    { city: 'Ogden', coordinates: [-111.971968, 41.222466], departmentName: 'Ogden Development Center', total: 6, employees: 5, contingent: 1 },
    { city: 'Seattle', coordinates: [-122.333851, 47.603445], departmentName: 'Headquarters', total: 2, employees: 2, contingent: 0 },
  ];

  return (
    <ComposableMap
      data-tip=""
      projection="geoAlbersUsa"
      projectionConfig={{
        scale: 1000,
      }}
      style={{
        width: '100%',
        height: '100%',
      }}
    >
      <ZoomableGroup center={[-97, 39]} zoom={1.3}>
        <Geographies geography={geoUrl}>
          {({ geographies }) => geographies
            .map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                style={{
                  default: {
                    fill: '#E0E7FF',
                    stroke: '#FFFFFF',
                    strokeWidth: 1,
                    outline: 'none',
                  },
                  hover: {
                    fill: '#ADB4CC',
                    stroke: '#FFFFFF',
                    strokeWidth: 1.25,
                    outline: 'none',
                  },
                  pressed: {
                    fill: '#E0E7FF',
                    stroke: '#FFFFFF',
                    strokeWidth: 1.25,
                    outline: 'none',
                  },
                }}
              />
            ))}
        </Geographies>
        {markers.map(({ city, contingent, coordinates, departmentName, employees, total }) => (
          <Marker
            key={departmentName}
            coordinates={coordinates}
            onMouseEnter={() => {
              setTooltipContent(
                <TooltipContent
                  city={city}
                  contingent={contingent}
                  departmentName={departmentName}
                  employees={employees}
                  total={total}
                />,
              );
            }}
            onMouseLeave={() => {
              setTooltipContent('');
            }}
          >
            {city === 'Ogden'
              // @TODO: temporary until we base this off of user's location via id_token
              ? <MarkerSVG x="-10" y="-15" fill="#09B66D" />
              : <MarkerSVG x="-10" y="-15" />}
          </Marker>
        ))}
      </ZoomableGroup>
    </ComposableMap>
  );
};

MapChart.defaultProps = {
  setTooltipContent: null,
  tooltipContent: null,
};

MapChart.propTypes = {
  setTooltipContent: PropTypes.func,
  tooltipContent: PropTypes.func,
};

export default MapChart;
