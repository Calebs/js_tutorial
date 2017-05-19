import React from 'react';
import ReactDOM from 'react-dom';
import HelloWorld from './components/hello.jsx';
import '../sass/style.scss';

ReactDOM.render(
   <HelloWorld />,
   document.getElementById('app')
);