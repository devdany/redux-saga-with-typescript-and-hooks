export type Action = {
  type: string
  payload: any
}

export type Actions<StateName> = {
  [name: string]: (state: StateName, payload: any) => StateName
}

export class Dispatches {
  private dispatch
  constructor(dispatch) {
    this.dispatch = dispatch
  }
  protected p(name, value) {
    this.dispatch({ type: name, payload: value })
  }
}
