import React from 'react';
import TableComponent from './PackagesTable'; // Import your TableComponent
import data1 from './data.json'; // Import your JSON data file

const Packages = () => {
  return (
    <div>
      <h1>Packages:</h1>
      <TableComponent
        data1={data1}
      />

    </div>
  );
};

export default Packages;
