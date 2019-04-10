import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TrampingList from './Components/TrampingList.js'
import items from './data/index.js'


ReactDOM.render(<TrampingList items={items} />, document.getElementById('root'));