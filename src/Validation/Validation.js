import React from 'react';

const validation = (props) => {
  let validationMessage = 'Text too short!';
 
  if (props.textLenght > 5) {
    validationMessage = 'Text long enough';
  }

  return <p>{validationMessage}</p>
}

export default validation;