import React from 'react';
import './Extensions.css';

const Extensions = () => {
  const bestPracticesData = [
    {
      title: 'JSON Viewer',
      description: 'A JSON Viewer extension, such as the one available for various code editors like Visual Studio Code, is a tool designed to help developers view and interact with JSON (JavaScript Object Notation) data in a more readable and organized format. JSON is a common data interchange format used for representing and exchanging data between a server and a client, or between different parts of an application.',
    },
    {
      title: 'Redux DevTools',
      description: 'The Redux DevTools extension is a powerful tool designed to enhance the development and debugging experience when working with Redux, a popular state management library for JavaScript applications, including React applications. Redux DevTools provides a set of features that allow developers to inspect, monitor, and manipulate the state and actions of a Redux store in real-time.',
    },
    {
      title: 'CSS Viewer',
      description: 'A CSS Viewer is a tool or extension that helps developers view and inspect CSS styles applied to elements on a webpage. CSS (Cascading Style Sheets) is a language used for describing the look and formatting of a document written in HTML or XML. CSS Viewers provide various features to simplify the process of inspecting and understanding the styles applied to different elements on a web page.',
    },
    {
      title: 'ESLint',
      description: 'ESLint is a widely used static code analysis tool for identifying and fixing problems in JavaScript code. It helps developers write cleaner, more maintainable code by enforcing coding standards and best practices. ESLint does this by analyzing JavaScript code and reporting any patterns that do not adhere to the configured rules.',
    },
    {
      title: 'Prettier',
      description: 'Prettier is an opinionated code formatter that automatically formats your code to follow a consistent style, ensuring a uniform and aesthetically pleasing appearance. It supports various programming languages, including JavaScript, TypeScript, HTML, CSS, and more.',
    },
    {
      title: 'ES7+ React/Redux/React-Native snippets',
      description: 'ES7+ React/Redux/React-Native Snippets is a Visual Studio Code extension that provides a collection of code snippets for React, Redux, and React Native development using modern ECMAScript 7 (ES7) and beyond syntax. These snippets are shortcuts that allow developers to quickly insert commonly used code patterns and structures, saving time and effort when writing React, Redux, and React Native applications.',
    },
    {
      title: 'Simple React Snippets',
      description: 'Simple React Snippets is a Visual Studio Code extension that provides a collection of simple and commonly used code snippets for React development. These snippets allow developers to quickly insert code templates for React components, hooks, and other React-related patterns, saving time and improving productivity during development.',
    },
    {
      title: 'Jest',
      description: 'Jest is a popular JavaScript testing framework primarily used for testing React applications, although it can be used for any JavaScript project. It is maintained by Facebook and designed to be simple to set up, easy to use, and efficient.',
    },
  ];

  return (
    <div className="best-practices">
      <h1>Extensions</h1>
      <div className="best-practices-cards">
        {bestPracticesData.map((item, index) => (
          <div className="card" key={index}>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Extensions;
