import React from 'react';

const JakComponent = ({ value }) => {
  const rate = 4.30; 
  const euro = (value / rate).toFixed(2);

  return (
    <p>
      {`${value} PLN = ${euro} EUR`}
    </p>
  );
};

export default JakComponent;