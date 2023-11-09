import React from 'react';
import TableComponent from './GitTable'; // Import your TableComponent
import data1 from './data.json'; // Import your JSON data file

const Git = () => {
  return (
    <div>
      <h1>Git Commands</h1>
      <TableComponent
        data1={data1}
      />

    </div>
  );
};

export default Git;
