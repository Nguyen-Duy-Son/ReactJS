import React from 'react';
import './Toggle.css';

function myfunction() {
  let x = document.getElementById('button');
  if (x.style.backgroundColor != 'red'){
    x.style.backgroundColor = 'red';
  }
  else{
    x.style.backgroundColor = '#a6a1a1';
  }
  let y = document.getElementById('button--item')
  if (y.style.left != '60%'){
    y.style.left = '60%';
  }
  else{
    y.style.left='0';
  }
}

function Toggle() {
  return (
    <div>
      <button id="button" onClick={myfunction}>
        <button id='button--item' onClick={myfunction}>
        </button>
      </button>
    </div>
  );
}

export default Toggle;