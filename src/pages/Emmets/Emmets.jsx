import React from 'react';
import TableComponent from './EmmetsTable'; // Import your TableComponent
import jsonData from './data.json'; // Import your JSON data file

const Emmets = () => {
  return (
    <div>
      <h1>Simple React Snippets</h1>
      <h5>By Burke Holland</h5>
      <TableComponent data={jsonData} />
    </div>
  );
};

export default Emmets;
