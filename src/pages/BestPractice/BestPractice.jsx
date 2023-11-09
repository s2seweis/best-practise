import React from 'react';
import './BestPractice.css';

const BestPractice = () => {
  const bestPracticesData = [
    {
      title: '1. Component-Based Architecture',
      description: 'Organize your application into small, reusable components. Follow the Single Responsibility Principle: Each component should do one thing and do it well.',
    },
    {
      title: '2. State Management',
      description: 'Use local component state for managing component-specific state. For more complex applications, consider using state management libraries like Redux or React Context API.',
    },
    {
      title: '3. Props',
      description: 'Props should be read-only. Components should not modify the props directly. Validate props using PropTypes or TypeScript to catch potential bugs.',
    },
    {
      title: '4. ES6+ and Modern JavaScript',
      description: 'Use modern JavaScript features like arrow functions, destructuring, and classes. Stay updated with ECMAScript proposals and new language features.',
    },
    {
      title: '5. File and Folder Organization',
      description: 'Organize your files by feature or module, not by file type (e.g., group components, styles, and tests together). Use a consistent naming convention for files and components (e.g., PascalCase for components, camelCase for variables and functions).',
    },
    {
      title: '6. Error Boundaries',
      description: 'Use Error Boundaries to catch JavaScript errors anywhere in a component tree and log those errors or display a fallback UI.',
    },
    {
      title: '7. Performance Optimization',
      description: 'Use React´s built-in performance optimization features like memoization and PureComponent. Implement shouldComponentUpdate or use React.memo to prevent unnecessary renders.',
    },
    {
      title: '8. Testing',
      description: 'Write tests using tools like Jest and React Testing Library. Aim for high test coverage, especially for critical parts of your application.',
    },
    {
      title: '9. Accessibility',
      description: 'Ensure your application is accessible to all users, following accessibility best practices. Use semantic HTML elements and provide appropriate ARIA roles and attributes.',
    },
    {
      title: '10. Code Reviews and Collaboration',
      description: 'Regularly conduct code reviews to maintain code quality and consistency. Document your code and use meaningful variable and function names for readability. Collaborate with your team members and follow a consistent coding style guide.',
    },
    {
      title: '11. Security',
      description: 'Be mindful of security best practices, especially when handling user input and making API requests. Sanitize user inputs and validate data on both client and server sides.',
    },
    {
      title: '12. Documentation',
      description: 'Document your components, functions, and modules for easier understanding and onboarding of new team members.',
    },
  ];

  return (
    <div className="best-practices">
      <h1>12 Best Practices for a React App</h1>
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

export default BestPractice;
