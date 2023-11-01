import React from 'react';

const Eslint = () => {
  return (
    <div>

      <h1>Add Eslint to an existing React Project:</h1>
      <ol>

        <li>
          npm install eslint eslint-plugin-react eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react-hooks --save-dev
        </li>
        <li>
          npx eslint --init
        </li>
        <li>
          modify the .eslintrc.js file according to your needs
        </li>
        <li>
          add script tags to the package.json file
        </li>

        {/* "scripts": {
        "lint": "eslint .",
        "lint:fix": "eslint . --fix"
        } */}

        <li>
          commands:
          npm run lint/ npm run lint:fix

        </li>

      </ol>

      <h1>Use Eslint:</h1>
      <ol>
        <li>For seeing the errors in the browser:</li>
        <li>
          run npx eslint . = for showing the probs and errors in the console
        </li>
        <li>run npx eslint . --fix (will show the props in the browser)</li>
        <li>start working on a file</li>

      </ol>

    </div>
  );
};

export default Eslint;
