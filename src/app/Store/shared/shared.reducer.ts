import { createReducer, on } from '@ngrx/store'
import { setLoadingSpinner } from './shared.actions'
import { intilalState } from './shared.state'
const _sharedReducer = createReducer(intilalState, on(setLoadingSpinner, (state, action) => {
    return {
        state,
        showLoading: action.status
    }
}))

export function SharedReducer(state: any, action: any) {
    return _sharedReducer(state, action)
}