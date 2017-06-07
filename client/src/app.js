import React from 'react';
import ReactDOM from 'react-dom';
import RoundContainer from './containers/RoundContainer';

window.onload = function(){
  ReactDOM.render(
    <RoundContainer />,
    document.getElementById('app')
  );
}
