/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';

const MarkerSVG = ({ fill, x, y }) => {
  return (
    <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg" x={x} y={y}>
      <g clipPath="url(#clip0)">
        <path
          d="M19.9467 10.7846C19.9467 15.9154 15.7874 20.0746 10.6567 20.0746C5.52597 20.0746 1.3667 15.9154 1.3667 10.7846C1.3667 5.6539 5.52597 1.49463 10.6567 1.49463C15.7874 1.49463 19.9467 5.6539 19.9467 10.7846Z"
          fill={fill}
          fillOpacity="0.21"
          stroke={fill}
        />
        <g clipPath="url(#clip1)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.8641 15.0001C13.0747 15.0001 14.8668 13.208 14.8668 10.9974C14.8668 8.78672 13.0747 6.99463 10.8641 6.99463C8.65342 6.99463 6.86133 8.78672 6.86133 10.9974C6.86133 13.208 8.65342 15.0001 10.8641 15.0001Z"
            fill={fill}
          />
          <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="6" y="6" width="9" height="10">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10.8641 15.0001C13.0747 15.0001 14.8668 13.208 14.8668 10.9974C14.8668 8.78672 13.0747 6.99463 10.8641 6.99463C8.65342 6.99463 6.86133 8.78672 6.86133 10.9974C6.86133 13.208 8.65342 15.0001 10.8641 15.0001Z"
              fill="white"
            />
          </mask>
          <g mask="url(#mask0)" />
        </g>
      </g>
      <defs>
        <clipPath id="clip0">
          <rect x="0.866699" y="0.994629" width="20" height="20" fill="white" />
        </clipPath>
        <clipPath id="clip1">
          <rect x="6.86133" y="6.99463" width="8.00549" height="8.00549" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

MarkerSVG.defaultProps = {
  fill: '#2E5BFF',
  x: '0',
  y: '0',
};

MarkerSVG.propTypes = {
  fill: PropTypes.string,
  x: PropTypes.string,
  y: PropTypes.string,
};

export default MarkerSVG;
