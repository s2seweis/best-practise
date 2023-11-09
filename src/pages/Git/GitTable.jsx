import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Git.css'; // Import your CSS file for table styling

const TableComponent = ({ data1 }) => {
  return (
    <div className="table-container">
      <div className='table-container-main'>

        <table>
          <thead>
            <tr>
              <th>Snippets</th>
              <th>Renders</th>
            </tr>
          </thead>
          <tbody>
            {data1.map((row, index) => (
              <tr key={index}>
                <td>{row.column1}</td>
                <td>{row.column2}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <h5>W3</h5>
        <Link to="https://www.w3schools.com/git/">
          Git Tutorial
        </Link>

      </div>
    </div>
  );
};

TableComponent.propTypes = {
  data1: PropTypes.arrayOf(
    PropTypes.shape({
      column1: PropTypes.string.isRequired,
      column2: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default TableComponent;
