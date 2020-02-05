import { State } from '../reducers'
import { useSelector } from 'react-redux'
export function useReducer(): number[] {
  return useSelector<State, number[]>((state) => state.numberCollection)
}