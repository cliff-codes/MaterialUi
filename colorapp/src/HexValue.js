import React from 'react'
import colorNames from 'colornames'
const HexValue = ({color}) => {

  return (
    <div>
        {(color) ? colorNames(color) : `Empty Value`}
    </div>
  )
}

export default HexValue