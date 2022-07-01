import React from 'react';
import HexValue from './HexValue';

const DisplayColor = ({color}) => {
  return (
    <section style={{
        backgroundColor : color
    }}>
      <HexValue
        color = {color}
      />
    </section>
  )
}

export default DisplayColor
