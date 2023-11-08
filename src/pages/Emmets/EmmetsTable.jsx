import React from 'react';
import './Emmets.css'; // Import your CSS file for table styling

const TableComponent = ({ data }) => {
  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Snippets</th>
            <th>Renders</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>{row.column1}</td>
              <td>{row.column2}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;
