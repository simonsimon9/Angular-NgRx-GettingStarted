import { createAction, createReducer, on } from '@ngrx/store';
import { User } from '../user';

export interface UserState{
    maskUserCheck: boolean,
    currentUser: User,
    users: User[]
}

export const maskUserReducer = createReducer(
    { maskUserCheck : true },
    on(createAction('[User] Mask User Name'), state =>{
        console.log('original state' + JSON.stringify(state));

        return {
            ...state,
            maskUserCheck: !state.maskUserCheck
        }
    })
)