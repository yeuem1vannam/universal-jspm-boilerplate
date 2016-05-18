import React from 'react';
import ReactDOM from 'react-dom';
import {HelloWorld} from 'app/component.jsx';

let container = document.getElementById('app');
let component = ReactDOM.render(React.createElement(HelloWorld), container);
