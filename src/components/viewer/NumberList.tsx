import * as React from 'react'

import { useReducer } from '../../provider/selector'

interface Props {
  
}

export const NumberViewerComponent = (props: Props) => {
  const numberList = useReducer()
  console.log(numberList)
  return (
    <>
      <h5>Generated numbers collection:</h5>
      <ul>
        {numberList.map(currentNumber => (
          <li key={currentNumber}>{currentNumber}</li>
        ))}
      </ul>
    </>
  )
}
