import React from 'react';
import ReactDOM from 'react-dom';
import ReactFront from './front/react-front/App';

// import css from './front/scss/front.scss';
// eslint-disable-next-line no-unused-vars
import reactFront from './front/react-front/scss/react-front.scss';

document.addEventListener('DOMContentLoaded', () => {
  if (document.querySelector('#react-front')) {
    ReactDOM.render(
      <ReactFront />,
      document.querySelector('#react-front'),
    );
  }
});
console.log('Hello front');
