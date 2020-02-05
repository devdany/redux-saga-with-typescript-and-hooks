import * as React from 'react'

import { numberCollectionProvider } from '../../provider/dispatch'

interface Props {

}

export const NumberSetterComponent = (props: Props) => {
  
  return (
    <button onClick={() => numberCollectionProvider().addNumber(2)}>Request new number</button>
  )
}
