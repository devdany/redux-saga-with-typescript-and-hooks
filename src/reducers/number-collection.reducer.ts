import { Actions, Dispatches } from '../provider/dispatchesAction'
import { BaseAction, actionIds } from '../common';

export type NumberCollectionState = number[];

export class NumberCollectionDispatches extends Dispatches {
  addNumber = (number: number) => this.p('addNumber', { number })
  addNumberSuccess = (number: number) => this.p('addNumberSuccess', { number })
}

const actions: Actions<number[]> = {
  addNumberSuccess: (state: number[], payload): number[] => {
    return [...state, payload]
  }
}

export const numberCollectionReducer = (
  state: NumberCollectionState = [0],
  action: BaseAction
) => {
  if (action.type in actions) {
    return actions[action.type](state, action.payload)
  } else {
    // console.error('Reducer error: the action type is not found', state, action)
    return state
  }
};
