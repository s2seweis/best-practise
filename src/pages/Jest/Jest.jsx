import React from 'react';
import './Jest.css';

const JestInstructions = () => {
  return (
    <article className="jest-instructions">
      <h2 className="text-2xl font-bold mb-4">Jest Testing for React</h2>

      {/* Explanation */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">What is Jest?</h3>
        <p className="mb-2">
          Jest is a JavaScript testing framework widely used for testing React applications. It provides a simple and efficient way to write tests and ensure code reliability.
        </p>
      </section>

      {/* Basic Jest Test */}
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Example Jest Test</h3>
        <p className="mb-2">
          Let's create a simple Jest test for a hypothetical function that adds two numbers.
        </p>
        <div className="card p-4 bg-white rounded-md shadow-md">
          <div className="list-decimal pl-4">
            <div className="mb-4">
              <h4 className="text-lg font-semibold mb-2">Test Details:</h4>
              <strong>In this test:</strong>
            </div>
            <div className="code-field mb-4">
              <code className="text-sm">const sum = require('./sum');</code>
              <p>It imports the sum function from the sum.js file.</p>
            </div>
            <div className="code-field mb-4">
              <code className="text-sm">test('adds 1 + 2 to equal 3', () => {/* ... */});</code>
              <p>It defines a test case with a description. The description states that it's testing if adding 1 and 2 equals 3.</p>
            </div>
            <div className="code-field mb-4">
              <code className="text-sm">expect(sum(1, 2)).toBe(3);</code>
              <p>It uses Jest's expect function to make an assertion. The sum(1, 2) function call is expected to return 3, and toBe(3) asserts that the result should be exactly equal to 3. This test verifies that the sum function correctly adds two numbers. If the function works as expected, this test should pass.</p>
            </div>
            <div className="mb-2">
              <p>This test verifies that the function correctly adds two numbers. If the function works as expected, this test should pass.</p>
            </div>
            <div className="mb-2">
              Run your Jest tests using the command <code className="text-sm">$ npm test</code>.
            </div>
          </div>
        </div>
      </section>

      {/* Additional Resources */}
      <section>
        <h3 className="text-xl font-semibold mb-2">Additional Resources</h3>
        <p className="mb-2">
          For more detailed information and advanced usage, refer to the official Jest documentation:
        </p>
        <p className="mb-2">
          <a
            href="https://jestjs.io/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline hover:text-blue-700"
          >
            Jest Documentation
          </a>
        </p>
      </section>
    </article>
  );
};

export default JestInstructions;
