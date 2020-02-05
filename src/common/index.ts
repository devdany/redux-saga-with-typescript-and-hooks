export const actionIds = {
  GET_NUMBER_REQUEST_START:
    'addNumber',
  GET_NUMBER_REQUEST_COMPLETED:
    'addNumberSuccess',
}

export interface BaseAction {
  type: string
  payload?
}
