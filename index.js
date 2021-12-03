import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

var name = "WORLD";
var greet = <p> <h1>HELLO , {name} </h1></p>;

ReactDOM.render(
  greet,
  document.getElementById('root')
);

