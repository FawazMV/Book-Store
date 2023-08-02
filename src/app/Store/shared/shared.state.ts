export interface SharedState {
  showLoading: boolean
  errorMessage: string
}

export const intilalState: SharedState = {
  showLoading: false,
  errorMessage: ''
}
