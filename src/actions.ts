import { BaseAction, actionIds } from './common';

export const numberRequestStartAction = (count): BaseAction => ({
  type: actionIds.GET_NUMBER_REQUEST_START,
  payload: count,
});

export const numberRequestCompletedAction = (
  numberGenerated: number
): BaseAction => ({
  type: actionIds.GET_NUMBER_REQUEST_COMPLETED,
  payload: numberGenerated,
});
