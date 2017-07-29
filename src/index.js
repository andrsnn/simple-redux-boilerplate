import React from 'react';
import ReactDOM from 'react-dom';

/**
 * Import the stylesheet you want used! Here we just reference
 * the main SCSS file we have in the styles directory.
 */
import './styles/main.scss';

const Root = () => {
    return (
        <div>testing</div>
    );
};


ReactDOM.render(
  <Root />,
  document.getElementById('root')
);
