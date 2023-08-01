import { BooksReducers } from "../Pages/Home/store/books.reducers";
import { SHARED_STATE_NAME } from "./shared/shared.selector";
import { SharedState } from './shared/shared.state'
import { SharedReducer } from "./shared/shared.reducer";
import { AuthReducer } from "../Pages/Auth/store/auth.reducers";

export interface AppState {
    posts: any;
    [SHARED_STATE_NAME]: SharedState
}

export const appReducer = {
    books: BooksReducers,
    [SHARED_STATE_NAME]: SharedReducer,
    // auth: AuthReducer
};
