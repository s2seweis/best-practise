import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Emmets.css'; // Import your CSS file for table styling

const TableComponent = ({ data1, data2 }) => {
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

        <h1>ES7+ React/Redux/React-Native snippets
        </h1>
        <h5>CMD + Shift + R (Mac) or CTRL + ALT + R for (Windows)</h5>
        <Link to="https://marketplace.visualstudio.com/items?itemName=rodrigovallades.es7-react-js-snippets">
          Es7
        </Link>

        <table>
          <thead>
            <tr>
              <th>Snippets</th>
              <th>Renders</th>
            </tr>
          </thead>
          <tbody>
            {data2.map((row, index) => (
              <tr key={index}>
                <td>{row.column1}</td>
                <td>{row.column2}</td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>
    </div>
  );
};

TableComponent.propTypes = {
  data1: PropTypes.arrayOf(PropTypes.object).isRequired,
  data2: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default TableComponent;
