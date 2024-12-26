import React from 'react';
import PropTypes from 'prop-types';
import './PointsSummary.css';

const PointsSummary = ({ pointsByMonth }) => (
  <div className="points-summary">
    <h2>Points Summary</h2>
    <ul>
      {Object.keys(pointsByMonth).map((month) => (
        <li key={month}>
          {month}: {pointsByMonth[month]} points
        </li>
      ))}
    </ul>
  </div>
);

PointsSummary.propTypes = {
  pointsByMonth: PropTypes.objectOf(PropTypes.number).isRequired,
};

export default PointsSummary;