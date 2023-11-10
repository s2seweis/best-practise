// BootstrapInstructions.js

import React from 'react';
import './BootstrapTailwind.css';

const BootstrapInstructions = () => {
  return (
    <div className="bootstrap-instructions">
      <h2 className="text-2xl font-bold mb-4">Adding Bootstrap to Your React Project</h2>

      {/* Step 1: Install Bootstrap */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Step 1: Install Bootstrap</h3>
        <p className="mb-2">
          Open your terminal and run the following command to install Bootstrap:
        </p>
        <pre className="bg-gray-100 p-2 rounded-md">
          <code className="text-sm">$ npm install bootstrap</code>
        </pre>
      </section>

      {/* Step 2: Import Bootstrap CSS */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Step 2: Import Bootstrap CSS</h3>
        <p className="mb-2">
          Import Bootstrap CSS in your stylesheets. For example, in your main CSS file:
        </p>
        <pre className="bg-gray-100 p-2 rounded-md">
          <code className="text-sm">
            {`/* src/styles/styles.css */\n\n`}
            {`@import '~bootstrap/dist/css/bootstrap.min.css';\n`}
          </code>
        </pre>
      </section>

      {/* Step 3: Use Bootstrap Components */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Step 3: Use Bootstrap Components</h3>
        <p className="mb-2">
          You can now use Bootstrap components in your React project. Refer to the Bootstrap documentation for component usage.
        </p>
        <p className="mb-2">
          <a
            href="https://getbootstrap.com/docs/5.1/getting-started/introduction/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline hover:text-blue-700"
          >
            Bootstrap Documentation
          </a>
        </p>
      </section>
    </div>
  );
};

export default BootstrapInstructions;
