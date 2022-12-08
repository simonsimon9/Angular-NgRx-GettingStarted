import { createAction, createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';
import { User } from '../user';


export interface UserState{
    maskUserCheck: boolean,
    currentUser: User,
    users: User[]
}

const initialState: UserState = {
    maskUserCheck: false,
    currentUser: null,
    users: []
}

const getUserFeatureState = createFeatureSelector<UserState>('users');

export const getMaskUserCheck = createSelector(
    getUserFeatureState,
    state => state.maskUserCheck
)

export const getCurrentUser = createSelector(
    getUserFeatureState,
    state => state.currentUser
)

export const getUsers = createSelector(
    getUserFeatureState,
    state => state.users
)

export const maskUserReducer = createReducer(
    initialState,
    on(createAction('[User] Mask User Name'), (state): UserState =>{
        console.log('original state' + JSON.stringify(state));

        return {
            ...state,
            maskUserCheck: !state.maskUserCheck
        }
    })
)