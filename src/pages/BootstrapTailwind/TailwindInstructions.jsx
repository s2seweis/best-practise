// TailwindInstructions.js

import React from 'react';
import './BootstrapTailwind.css';

const TailwindInstructions = () => {
  return (
    <div className="tailwind-instructions">
      <h2 className="text-2xl font-bold mb-4">Adding Tailwind CSS to Your React Project</h2>

      {/* Step 1: Install Tailwind CSS */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Step 1: Install Tailwind CSS</h3>
        <p className="mb-2">
          Open your terminal and run the following command to install Tailwind CSS and its dependencies:
        </p>
        <pre className="bg-gray-100 p-2 rounded-md">
          <code className="text-sm">$ npm install tailwindcss</code>
        </pre>
      </section>

      {/* Step 2: Create a Tailwind Configuration File */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Step 2: Create a Tailwind Configuration File</h3>
        <p className="mb-2">
          Run the following command to generate a `tailwind.config.js` file:
        </p>
        <pre className="bg-gray-100 p-2 rounded-md">
          <code className="text-sm">$ npx tailwindcss init</code>
        </pre>
      </section>

      {/* Step 3: Include Tailwind CSS in Your Styles */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Step 3: Include Tailwind CSS in Your Styles</h3>
        <p className="mb-2">
          Import Tailwind CSS in your stylesheets. For example, in your main CSS file:
        </p>
        <pre className="bg-gray-100 p-2 rounded-md">
          <code className="text-sm">
            {`/* src/styles/styles.css */\n\n`}
            {`@import 'tailwindcss/base';\n`}
            {`@import 'tailwindcss/components';\n`}
            {`@import 'tailwindcss/utilities';\n`}
          </code>
        </pre>
      </section>

      {/* Step 4: Build Your Styles */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Step 4: Build Your Styles</h3>
        <p className="mb-2">
          Run the following command to build your styles:
        </p>
        <pre className="bg-gray-100 p-2 rounded-md">
          <code className="text-sm">$ npx tailwindcss build -o output.css</code>
        </pre>
      </section>

      {/* Additional Steps */}
      <section>
        <h3 className="text-xl font-semibold mb-2">Additional Steps</h3>
        <p className="mb-2">
          These are the basic steps to get started with Tailwind CSS. Visit the official Tailwind CSS documentation for more advanced configurations and usage.
        </p>
        <p className="mb-2">
          <a
            href="https://tailwindcss.com/docs"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline hover:text-blue-700"
          >
            Tailwind CSS Documentation
          </a>
        </p>
      </section>
    </div>
  );
};

export default TailwindInstructions;
